
var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","info.xml",false);

xmlhttp.send();

var xmlDoc=xmlhttp.responseXML;

document.getElementsByTagName("html")[0].style.overflowX="hidden"; 


function F1() {
var w=window.innerWidth;
var r=0;
if (w>=900) {
    w=900;
    r=(window.innerWidth-900)/2;
    document.getElementById("h").style.fontSize="x-large";
    document.getElementById("text").style.fontSize="large";
    
    document.getElementsByTagName("span")[0].style.fontSize="large";
    document.getElementsByTagName("span")[1].style.fontSize="large";
    document.getElementsByTagName("span")[2].style.fontSize="large";
    document.getElementsByTagName("span")[3].style.fontSize="large";
    document.getElementsByTagName("span")[4].style.fontSize="large";
    
    }
if (w>600&&w<900) {
document.getElementById("h").style.fontSize="medium";
document.getElementById("text").style.fontSize="small";


document.getElementsByTagName("span")[0].style.fontSize="small";
document.getElementsByTagName("span")[1].style.fontSize="small";
document.getElementsByTagName("span")[2].style.fontSize="small";
document.getElementsByTagName("span")[3].style.fontSize="small";
document.getElementsByTagName("span")[4].style.fontSize="small";
document.getElementById("mobile").style.fontSize="small";
document.getElementById("minsk").style.fontSize="small";

}
if (w<=600) {
    document.getElementById("h").style.fontSize="x-small";
    document.getElementById("text").style.fontSize="xx-small";
    
    
    document.getElementsByTagName("span")[0].style.fontSize="xx-small";
    document.getElementsByTagName("span")[1].style.fontSize="xx-small";
    document.getElementsByTagName("span")[2].style.fontSize="xx-small";
    document.getElementsByTagName("span")[3].style.fontSize="xx-small";
    document.getElementsByTagName("span")[4].style.fontSize="xx-small";
    document.getElementById("mobile").style.fontSize="x-small";
    document.getElementById("minsk").style.fontSize="x-small";
    
    }
    
document.getElementById("head").style.marginTop=-w*0.01;
document.getElementById("head").style.marginLeft=-w*0.01+r;
document.getElementById("head").style.height=w*0.12;
document.getElementById("head").style.width=w;
document.getElementsByClassName("button")[0].style.marginTop=w*0.11;
document.getElementsByClassName("button")[0].style.marginLeft=-w*0.01+r;
document.getElementsByClassName("button")[0].style.height=w*0.03;
document.getElementsByClassName("button")[0].style.width=w*0.2;
document.getElementsByClassName("button")[1].style.marginTop=w*0.11;
document.getElementsByClassName("button")[1].style.marginLeft=w*0.194+r;
document.getElementsByClassName("button")[1].style.height=w*0.03;
document.getElementsByClassName("button")[1].style.width=w*0.2;
document.getElementsByClassName("button")[2].style.marginTop=w*0.11;
document.getElementsByClassName("button")[2].style.marginLeft=w*0.398+r;
document.getElementsByClassName("button")[2].style.height=w*0.03;
document.getElementsByClassName("button")[2].style.width=w*0.2;
document.getElementsByClassName("button")[3].style.marginTop=w*0.11;
document.getElementsByClassName("button")[3].style.marginLeft=w*0.602+r;
document.getElementsByClassName("button")[3].style.height=w*0.03;
document.getElementsByClassName("button")[3].style.width=w*0.2;
document.getElementsByClassName("button")[4].style.marginTop=w*0.11;
document.getElementsByClassName("button")[4].style.marginLeft=w*0.806+r;
document.getElementsByClassName("button")[4].style.height=w*0.03;
document.getElementsByClassName("button")[4].style.width=w*0.18;


document.getElementById("block").style.marginTop=w*0.1445;
document.getElementById("block").style.marginLeft=-w*0.01+r;
document.getElementById("block").style.height=w*0.65;
document.getElementById("block").style.width=w*1;
document.getElementById("z").style.marginTop=w*0.1445;
document.getElementById("z").style.marginLeft=-w*0.01+r;
document.getElementById("z").style.height=w*0.65;
document.getElementById("z").style.width=w*1;
document.getElementsByTagName("footer")[0].style.marginTop=w*0.8;
document.getElementsByTagName("footer")[0].style.marginLeft=-w*0.02+r;
document.getElementsByTagName("footer")[0].style.height=w*0.1;
document.getElementsByTagName("footer")[0].style.width=w*1.03;
document.getElementById("minsk").style.marginTop=w*0.07;
document.getElementById("minsk").style.marginLeft=w*0.02;
document.getElementById("mobile").style.marginTop=w*0.07;
document.getElementById("mobile").style.marginLeft=w*0.89;
document.getElementById("h").style.marginLeft=w*0.385+r;
document.getElementById("h").style.marginTop=w*0.15;

document.getElementById("xml1").innerHTML=xmlDoc.getElementsByTagName("node")[0].innerHTML+" "+xmlDoc.getElementsByTagName("node")[1].innerHTML+" "+xmlDoc.getElementsByTagName("node")[2].innerHTML+" "+xmlDoc.getElementsByTagName("node")[3].innerHTML;
document.getElementById("xml2").innerHTML=xmlDoc.getElementsByTagName("node")[0].innerHTML;
document.getElementById("text").style.marginTop=w*0.19;
document.getElementById("text").style.marginLeft=w*0.2+r;

document.getElementById("text").style.width=w*0.5754;
}
function first() {
window.open("mMain page.html","_self");
}
function second() {
window.open("mHistory.html","_self");
}
function third() {
window.open("mVehicles.html","_self");
}
function fourth() {
window.open("mRoutes.html","_self");
}
function fifth() {
window.open("Payment.html","_self");
}
function transfer() {
window.open("Main page.html","_self");   
}
