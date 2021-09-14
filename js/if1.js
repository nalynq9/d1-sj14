var crtDate = new Date();
var crtHours = crtDate.getHours();

console.log(crtHours);
if(crtHours > 20){
    document.write("Good Day!");
}else{
    document.write("Good evening");
}