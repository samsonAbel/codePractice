function getFisrtChild(){
    var firstChild = document.getElementsByClassName('sample')[0].innerHTML;
    var correctChild = firstChild.replace("Eva","Abel");
    document.getElementsByClassName("sample")[0].innerHTML = correctChild;
}

function getSecondChild(){
    var secondChld = document.getElementsByClassName("sample")[1].innerHTML;
    var correctChild = secondChld.replace("Abel","Eva");
    document.getElementsByClassName("sample")[1].innerHTML = correctChild;}


// var result = abc.test(str);
// console.log(result);
var regex =/[bt]ear/;
console.log(regex.test(bear));