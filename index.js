function checklength()
{
    title = document.getElementById('title').innerHTML;
    document.getElementById('length').innerHTML = title.length;
}

function replace()
{
    let text = document.getElementById("title").innerHTML;
    document.getElementById("title").innerHTML = text.replace("Responsive","Flexible");
}

function uppercase() {
    let text = document.getElementById("title2").innerHTML;
    document.getElementById("title2").innerHTML = text.toUpperCase();
}

function substring() {
    let text = document.getElementById("paragraph1").innerHTML;
    document.getElementById("substring").innerHTML = text.substr(43,6);
}

function concatenate() {
    let text1 = document.getElementById("title").innerHTML;
    let text2 = document.getElementById("title2").innerHTML;
    let text3 = text1.concat(" with ",text2);
    document.getElementById("concatenate").innerHTML = text3;
}

function ToString() {
    let x = 3;
    document.getElementById("string").innerHTML = x.toString();
}

function getNumber() {
    let x = true;
    document.getElementById("number").innerHTML = Number(x); 
}

function toNumber() {
    document.getElementById("text").innerHTML = Number.parseFloat("-176.33");
}

function storeWholeNumber() {
    document.getElementById("integer").innerHTML = parseInt("-176.36");
}

function validateInteger() {
    document.getElementById("validate").innerHTML = Number.isInteger(-176.36);
}

const franchise = ["KFC", "McDonalds", "HungryJacks", "SevenEleven", "Subways"];
const luckynum = [123, 555, 8432, 3012];
const unluckynum = [66, 127, 96];

function arraylength() {
    let size = franchise.length;
    document.getElementById("franchisenumber").innerHTML = size;
}

function arrayitems() {
    document.getElementById("franchisename").innerHTML = franchise.toString();
}

function newarrayitem() {
    franchise.push("Dominos");
    document.getElementById("newfranchisename").innerHTML = franchise;
}

function mergearray() {
    const numbers = luckynum.concat(unluckynum);
    document.getElementById("merge").innerHTML = numbers;
}

function splicearray() {
    unluckynum.splice(2, 0, "777", "9009");
    document.getElementById("splice").innerHTML = unluckynum;
}

function fulldate() {
    const d = new Date();
    document.getElementById("fulldate").innerHTML = d;
}

function specifieddate() {
    const d = new Date(1998, 29, 8, 23, 41, 26, 0);
    document.getElementById("specified").innerHTML = d;
}

function previousCentury() {
    const d = new Date(87, 12, 28);
    document.getElementById("previous").innerHTML = d;
}

function secondsAfter() {
    const d = new Date(100000000);
    document.getElementById("after").innerHTML = d;
}

function shortenedDate() {
    const d = new Date(2003, 6);
    document.getElementById("shortened").innerHTML = d;
}