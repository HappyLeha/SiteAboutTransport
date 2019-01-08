
var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","info.xml",false);

xmlhttp.send();

var xmlDoc=xmlhttp.responseXML;




function F1() {
var w=window.innerWidth;


if (w<=900) {
document.getElementById("h").style.fontSize="x-large";
document.getElementById("text").style.fontSize="large";

document.getElementById("lefttext").style.fontSize="x-large";
document.getElementById("righttext").style.fontSize="x-large";
document.getElementsByTagName("span")[0].style.fontSize="large";
document.getElementsByTagName("span")[1].style.fontSize="large";
document.getElementsByTagName("span")[2].style.fontSize="large";
document.getElementsByTagName("span")[3].style.fontSize="large";
document.getElementsByTagName("span")[4].style.fontSize="large";
document.getElementsByTagName("html")[0].style.overflowX="visible";
w=900;
}
else {
document.getElementById("h").style.fontSize="xx-large";
document.getElementById("text").style.fontSize="x-large";
document.getElementById("lefttext").style.fontSize="xx-large";
document.getElementById("righttext").style.fontSize="xx-large";
document.getElementsByTagName("span")[0].style.fontSize="x-large";
document.getElementsByTagName("span")[1].style.fontSize="x-large";
document.getElementsByTagName("span")[2].style.fontSize="x-large";
document.getElementsByTagName("span")[3].style.fontSize="x-large";
document.getElementsByTagName("span")[4].style.fontSize="x-large";
document.getElementsByTagName("html")[0].style.overflowX="hidden";    
}
document.getElementById("head").style.marginTop=-w*0.01;
document.getElementById("head").style.marginLeft=-w*0.01;
document.getElementById("head").style.height=w*0.12;
document.getElementById("head").style.width=w;
document.getElementsByClassName("button")[0].style.marginTop=w*0.11;
document.getElementsByClassName("button")[0].style.marginLeft=-w*0.01;
document.getElementsByClassName("button")[0].style.height=w*0.03;
document.getElementsByClassName("button")[0].style.width=w*0.2;
document.getElementsByClassName("button")[1].style.marginTop=w*0.11;
document.getElementsByClassName("button")[1].style.marginLeft=w*0.194;
document.getElementsByClassName("button")[1].style.height=w*0.03;
document.getElementsByClassName("button")[1].style.width=w*0.2;
document.getElementsByClassName("button")[2].style.marginTop=w*0.11;
document.getElementsByClassName("button")[2].style.marginLeft=w*0.398;
document.getElementsByClassName("button")[2].style.height=w*0.03;
document.getElementsByClassName("button")[2].style.width=w*0.2;
document.getElementsByClassName("button")[3].style.marginTop=w*0.11;
document.getElementsByClassName("button")[3].style.marginLeft=w*0.602;
document.getElementsByClassName("button")[3].style.height=w*0.03;
document.getElementsByClassName("button")[3].style.width=w*0.2;
document.getElementsByClassName("button")[4].style.marginTop=w*0.11;
document.getElementsByClassName("button")[4].style.marginLeft=w*0.806;
document.getElementsByClassName("button")[4].style.height=w*0.03;
document.getElementsByClassName("button")[4].style.width=w*0.172;

document.getElementById("lefttower").style.marginTop=w*0.1443;
document.getElementById("lefttower").style.height=w*0.4;
document.getElementById("lefttower").style.width=w*0.19;
document.getElementById("lefttext").style.marginTop=w*0.145;
document.getElementById("lefttower").style.marginLeft=-w*0.01;
document.getElementById("lefttext").style.height=w*0.4;
document.getElementById("lefttext").style.width=w*0.19;
document.getElementById("lefttext").style.marginLeft=w*0.03;
document.getElementById("block").style.marginTop=w*0.1445;
document.getElementById("block").style.marginLeft=w*0.18;
document.getElementById("block").style.height=w*0.3955;
document.getElementById("block").style.width=w*0.6154;
document.getElementById("righttext").style.marginTop=w*0.145;
document.getElementById("righttext").style.height=w*0.4;
document.getElementById("righttext").style.width=w*0.1;
document.getElementById("righttext").style.marginLeft=w*0.85;
document.getElementById("righttower").style.marginTop=w*0.1443;
document.getElementById("righttower").style.height=w*0.4;
document.getElementById("righttower").style.width=w*0.19;
document.getElementById("righttower").style.marginLeft=w*0.8;
document.getElementsByTagName("footer")[0].style.marginTop=w*0.545;
document.getElementsByTagName("footer")[0].style.marginLeft=-w*0.02;
document.getElementsByTagName("footer")[0].style.height=w*0.1;
document.getElementsByTagName("footer")[0].style.width=w*1.03;
document.getElementById("minsk").style.marginTop=w*0.07;
document.getElementById("minsk").style.marginLeft=w*0.02;
document.getElementById("mobile").style.marginTop=w*0.07;
document.getElementById("mobile").style.marginLeft=w*0.89;
document.getElementById("h").style.marginLeft=w*0.385;
document.getElementById("h").style.marginTop=w*0.15;

document.getElementById("xml1").innerHTML=xmlDoc.getElementsByTagName("node")[0].innerHTML+" "+xmlDoc.getElementsByTagName("node")[1].innerHTML+" "+xmlDoc.getElementsByTagName("node")[2].innerHTML+" "+xmlDoc.getElementsByTagName("node")[3].innerHTML;
document.getElementById("xml2").innerHTML=xmlDoc.getElementsByTagName("node")[0].innerHTML;
document.getElementById("text").style.marginTop=w*0.19;
document.getElementById("text").style.marginLeft=w*0.2;

document.getElementById("text").style.width=w*0.5754;
}
function first() {
window.open("Main page.html","_self");
}
function second() {
window.open("History.html","_self");
}
function third() {
window.open("Vehicles.html","_self");
}
function fourth() {
window.open("Routes.html","_self");
}
function fifth() {
window.open("Payment.html","_self");
}
function transfer() {
window.open("mMain page.html","_self");   
}
