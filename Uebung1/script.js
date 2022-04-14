/*
Author:
Lukas Ahlert
*/

//Information from the given .js-files

var cities = [
  [6.9570, 50.9367], //Köln
  [4.9041, 52.3676], //Amsterdam
  [9.4797, 51.3127], //Kassel
  [2.1686, 41.3874], //Barcelona
  [10.1815, 36.8065], //Tunis
  [135.7681,35.0116], //Kyoto
  [26.1025, 44.4268], //Bucharest
  [15.4395, 47.0707], //Graz
  [31.2357, 30.0444], //Kairo
  [6.2603, 53.3498], //Dublin
  [10.7522, 59.9139] //Oslo
];

var point = [7.595737,51.969508];


//Array which will be filled with the results of the distance calculations

var distances = [];

//initialising variables

var lat1 = 7.595737;
var lon1 = 51.969508;

var lat2 = cities[0];
var lon2 = cities[1];


//adding the calculated distances to an array

for (var i = 0; i < cities.length - 1; i++) {
  distances.push(HaversineFormula(lat1, lon1, lat2, lon2));
}


//sorting the distances array

distances.sort(function(x,y) {
  return x-y;
});


//Changes the results paragraph in the HTML document to display the calculated distance array

document.getElementById("results").innerHTML = "The distances in km are " + distances;


//using Haversine Formula to calculate the distances

function HaversineFormula(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

//degree into radians

function deg2rad(deg) {
  return deg * (Math.PI/180)
}