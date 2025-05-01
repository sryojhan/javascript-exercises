
function round(number){

  return Math.round(number * 10) / 10;
}

const convertToCelsius = function(value) {

  return round((value - 32) * 5 / 9);
};

const convertToFahrenheit = function(value) {
  
  return round((value * 9 / 5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
