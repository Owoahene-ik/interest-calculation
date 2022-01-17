const Hapi = require('@hapi/hapi');


function rates(principal, days) {
     rate = 0.00;

    if(principal <= 25000 && days == 30){
        rate = 4;
    }else if(principal <= 25000 && days == 60){
        rate = 4.5;
    }else if(principal > 25000 && days == 91){
        rate = 5.5;
    }else if(principal <= 25000 && days == 182){
        rate = 7.5;
    }else if(principal <= 25000 && days == 365){
        rate = 9;
    }else if(principal <= 25000 && days == 728){
        rate = 9.75;
    }else  if(principal > 25000 && principal <=50000  && days == 30){
        rate = 5;
    }else if(principal > 25000 && principal <=50000  && days == 60){
        rate = 5.5;
    }else if(principal > 25000 && principal <=50000  && days == 91){
        rate = 6.5;
    }else if(principal > 25000 && principal <=50000  && days == 182){
        rate = 8;
    }else if(principal > 25000 && principal <=50000  && days == 365){
        rate = 9.5;
    }else if(principal > 25000 && principal <=50000  && days == 728){
        rate = 10.25;
    }else if(principal > 50000 && principal <=100000  && days == 30){
        rate = 6;
    }else if(principal > 50000 && principal <=100000   && days == 60){
        rate = 6.5;
    }else if(principal > 50000 && principal <=100000   && days == 91){
        rate = 7.5;
    }else if(principal > 50000 && principal <=100000   && days == 182){
        rate = 8.5;
    }else if(principal > 50000 && principal <=100000   && days == 365){
        rate = 10;
    }else if(principal > 50000 && principal <=100000  && days == 728){
        rate = 10.75;
    }else if(principal > 100000 && principal <=500000  && days == 30){
        rate = 7;
    }else if(principal > 100000 && principal <=500000   && days == 60){
        rate = 7.75;
    }else if(principal > 100000 && principal <=500000   && days == 91){
        rate = 8.5;
    }else if(principal > 100000 && principal <=500000   && days == 182){
        rate = 9;
    }else if(principal > 100000 && principal <=500000    && days == 365){
        rate = 10.5;
    }else if(principal > 100000 && principal <=500000  && days == 728){
        rate = 11.25;
    }else if(principal > 500000 && principal <=1000000  && days == 30){
        rate = 8;
    }else if(principal > 500000 && principal <=1000000    && days == 60){
        rate = 8.5;
    }else if(principal > 500000 && principal <=1000000   && days == 91){
        rate = 9;
    }else if(principal > 500000 && principal <=1000000   && days == 182){
        rate = 9.5;
    }else if(principal > 500000 && principal <=1000000     && days == 365){
        rate = 10.5;
    }else if(principal > 500000 && principal <=1000000   && days == 728){
        rate = 11.5;
    }else if(principal > 1000000  && days == 30){
        rate = 9;
    }else if(principal > 1000000    && days == 60){
        rate = 9.5;
    }else if(principal > 1000000   && days == 91){
        rate = 10;
    }else if(principal > 1000000   && days == 182){
        rate = 10.5;
    }else if(principal > 1000000     && days == 365){
        rate = 11;
    }else if(principal > 1000000   && days == 728){
        rate = 12;
    }

    return rate;
    
}


module.exports = rates;