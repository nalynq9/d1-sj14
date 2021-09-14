var a = "Global";
function scopeTest(){
    var myLocal = "Local";
    document.write(myLocal);
    console.log(myLocal);
}

console.log(myLocal);
scopeTest();

var x = 1;

{
    let x = 2;
}

console.log(x);