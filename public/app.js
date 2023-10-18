"use strict";
// enum resourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON};
// interface Resource <T> {
//    uid: number;
//    resourceType: resourceType,
//    data: T
// }
// const docOne: Resource <object> = {
//    uid: 1,
//    resourceType: resourceType.BOOK,
//    data:{ title:"Name of wind"}
// }
// const docTwo: Resource <object> ={
//  uid:2,
//  resourceType: resourceType.PERSON,
//  data:{name: "Criss"}
// }
// console.log(docOne, docTwo);
// DAYS OF THE WEEK
// enum weekDay { Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday}
// function getDayMessage (day: weekDay){
//    if (day >= weekDay.Monday && day <= weekDay.Friday ){
//       return "It's a workday"
//    } else {
//       return "It's weekend"
//    }
// }
var TrafficLightColor;
(function (TrafficLightColor) {
    TrafficLightColor[TrafficLightColor["Red"] = 0] = "Red";
    TrafficLightColor[TrafficLightColor["Yellow"] = 1] = "Yellow";
    TrafficLightColor[TrafficLightColor["Green"] = 2] = "Green";
})(TrafficLightColor || (TrafficLightColor = {}));
function getNextLightColor(currentColor) {
    switch (currentColor) {
        case TrafficLightColor.Red:
            return TrafficLightColor.Yellow;
        case TrafficLightColor.Yellow:
            return TrafficLightColor.Green;
        case TrafficLightColor.Green:
            return TrafficLightColor.Red;
    }
}
console.log(getNextLightColor(TrafficLightColor.Yellow)); // This should correctly return TrafficLightColor.Red
