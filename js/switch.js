var crtDate = new Date();
var dayOfWeek = crtDate.getDay();
var strDay;
console.log(dayOfWeek);

switch(dayOfWeek){
    case 0:
        strDay = "Sunday";
        break;

    case 1:
        strDay = "Monday";
        break;

    case 2:
        strDay = "Tuesday";
        break;

    default:
        strDay = "Invalid";
        break;
}
console.log(strDay);