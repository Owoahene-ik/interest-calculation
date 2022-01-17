"use strict";

const Hapi = require("@hapi/hapi");

const vision = require("@hapi/vision")

const Joi = require('joi')

const rates = require('./rates')

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });



  server.route({
      path: '/investment',
      method: 'POST',
      handler: (request, h) => {
//payload request data
        const principal = JSON.stringify(request.payload. principal);

        const days = JSON.stringify(request.payload.days);

//this function gets the principal and days to return rate
        const rate = rates(principal,days);

        // return 'this is the rate ' +rate;

//we then calculate the interest as we have the rate, principal and days(days will be converted to year(s) for calculatio)
        let interest = (Number(principal) * Number(rate) * Number(days))/(100 * 365); 

        const interest1 = interest.toFixed(2)
        const amt = Number(principal) + Number(interest)
        

          return {
            "Rate" : rate,
            "Total Interest" : interest1,
            "Total Amount" : amt.toFixed(2)
          };
      },
      options: {
        validate: {
            payload: Joi.object({
                principal: Joi.number().min(10000),
                days: Joi.number().min(30)
            })
        }
    }
  });





  //this is to handle error 404 which is a route not existing
  server.route({
    method: "*",
    path: "/{any*}",
    handler: function (request, h) {
      return "404 Error! No route was found";
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
