// var a = "Global";
// function scopetest () {
//     var myLocal = "Local";
//     console.log(myLocal);
//     document.write(myLocal);
// }

// console.log(myLocal);
// scopetest();

var x = 1;//Global

{
    let x = 2;//Local
}

console.log(x);