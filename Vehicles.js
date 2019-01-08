var w;
var b0=false;
var b1=false;
var b2=false;
var b3=false;
var b4=false;
var b5=false;
var to0=false;
var to1=false;
var to2=false;
var to3=false;
var to4=false;
var to5=false;
var ta0=false;
var ta1=false;
var ta2=false;
function F(){
var mt;
var h;
w=window.innerWidth;
if (w<=900) {
    document.getElementById("block").style.fontSize="small";
    
    document.getElementsByTagName("span")[0].style.fontSize="large";
    document.getElementsByTagName("span")[1].style.fontSize="large";
    document.getElementsByTagName("span")[2].style.fontSize="large";
    document.getElementsByTagName("span")[3].style.fontSize="large";
    document.getElementsByTagName("span")[4].style.fontSize="large";
    document.getElementsByTagName("html")[0].style.overflowX="visible";
    w=900;
    }
    else {
    document.getElementById("block").style.fontSize="medium";
    
    
    document.getElementsByTagName("span")[0].style.fontSize="x-large";
    document.getElementsByTagName("span")[1].style.fontSize="x-large";
    document.getElementsByTagName("span")[2].style.fontSize="x-large";
    document.getElementsByTagName("span")[3].style.fontSize="x-large";
    document.getElementsByTagName("span")[4].style.fontSize="x-large";
    document.getElementsByTagName("html")[0].style.overflowX="hidden";    
    }
document.getElementById("head").style.height=w*0.13;
document.getElementById("head").style.width=w*1.0025;
document.getElementById("head").style.marginLeft=-w*0.02;
document.getElementById("head").style.marginTop=-w*0.02;
document.getElementsByClassName("button")[0].style.marginTop=w*0.11;
document.getElementsByClassName("button")[0].style.marginLeft=-w*0.02;
document.getElementsByClassName("button")[0].style.height=w*0.03;
document.getElementsByClassName("button")[0].style.width=w*0.21;
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
document.getElementById("block").style.marginTop=w*0.144;
document.getElementById("block").style.marginLeft=w*0.2;
document.getElementById("block").style.width=w*0.6;
document.getElementsByTagName("img")[1].style.height=w*0.15;
document.getElementsByTagName("img")[2].style.height=w*0.15;
document.getElementsByTagName("img")[3].style.height=w*0.15;
document.getElementsByTagName("img")[4].style.height=w*0.15;
document.getElementsByTagName("img")[5].style.height=w*0.15;
document.getElementsByTagName("img")[6].style.height=w*0.15;
document.getElementsByTagName("img")[7].style.height=w*0.15;
document.getElementsByTagName("img")[8].style.height=w*0.15;
document.getElementsByTagName("img")[9].style.height=w*0.15;
document.getElementsByTagName("img")[10].style.height=w*0.15;
document.getElementsByTagName("img")[11].style.height=w*0.15;
document.getElementsByTagName("img")[12].style.height=w*0.15;
document.getElementsByTagName("img")[13].style.height=w*0.15;
document.getElementsByTagName("img")[14].style.height=w*0.15;
document.getElementsByTagName("img")[15].style.height=w*0.15;
document.getElementsByTagName("footer")[0].style.marginTop=w*4;
document.getElementsByTagName("footer")[0].style.marginLeft=-w*0.02;
document.getElementsByTagName("footer")[0].style.height=w*0.1;
document.getElementsByTagName("footer")[0].style.width=w*1.03;
document.getElementById("minsk").style.marginTop=w*0.07;
document.getElementById("minsk").style.marginLeft=w*0.02;
document.getElementById("mobile").style.marginTop=w*0.07;
document.getElementById("mobile").style.marginLeft=w*0.89;
}

function B0() {
if (b0) {
document.getElementsByClassName("hidden")[0].style.display="none"
document.getElementsByClassName("bus")[0].style.backgroundColor="red";
b0=false;
}
else {
document.getElementsByClassName("hidden")[0].style.display="block"
document.getElementsByClassName("bus")[0].style.backgroundColor="crimson"
b0=true; 
}
}
function B1() {
if (b1) {
document.getElementsByClassName("hidden")[1].style.display="none"
document.getElementsByClassName("bus")[1].style.backgroundColor="red";
b1=false;
}
else {
document.getElementsByClassName("hidden")[1].style.display="block"
document.getElementsByClassName("bus")[1].style.backgroundColor="crimson"
b1=true; 
}
}
function B2() {
if (b2) {
document.getElementsByClassName("hidden")[2].style.display="none"
document.getElementsByClassName("bus")[2].style.backgroundColor="red";
b2=false;
}
else {
document.getElementsByClassName("hidden")[2].style.display="block"
document.getElementsByClassName("bus")[2].style.backgroundColor="crimson"
b2=true; 
}
}
function B3() {
if (b3) {
document.getElementsByClassName("hidden")[3].style.display="none"
document.getElementsByClassName("bus")[3].style.backgroundColor="red";
b3=false;
}
else {
document.getElementsByClassName("hidden")[3].style.display="block"
document.getElementsByClassName("bus")[3].style.backgroundColor="crimson"
b3=true; 
}
}
function B4() {
if (b4) {
document.getElementsByClassName("hidden")[4].style.display="none"
document.getElementsByClassName("bus")[4].style.backgroundColor="red";
b4=false;
}
else {
document.getElementsByClassName("hidden")[4].style.display="block"
document.getElementsByClassName("bus")[4].style.backgroundColor="crimson"
b4=true; 
}
}
function B5() {
if (b5) {
document.getElementsByClassName("hidden")[5].style.display="none"
document.getElementsByClassName("bus")[5].style.backgroundColor="red";
b5=false;
}   
else {
document.getElementsByClassName("hidden")[5].style.display="block"
document.getElementsByClassName("bus")[5].style.backgroundColor="crimson"
b5=true; 
}
}
function To0() {
if (to0) {
document.getElementsByClassName("hidden")[6].style.display="none"
document.getElementsByClassName("trol")[0].style.backgroundColor="blue";
to0=false;
}   
else {
document.getElementsByClassName("hidden")[6].style.display="block"
document.getElementsByClassName("trol")[0].style.backgroundColor="steelblue"
to0=true; 
}
}
function To1() {
if (to1) {
document.getElementsByClassName("hidden")[7].style.display="none"
document.getElementsByClassName("trol")[1].style.backgroundColor="blue";
to1=false;
}   
else {
document.getElementsByClassName("hidden")[7].style.display="block"
document.getElementsByClassName("trol")[1].style.backgroundColor="steelblue"
to1=true; 
}
}
function To2() {
if (to2) {
document.getElementsByClassName("hidden")[8].style.display="none"
document.getElementsByClassName("trol")[2].style.backgroundColor="blue";
to2=false;
}   
else {
document.getElementsByClassName("hidden")[8].style.display="block"
document.getElementsByClassName("trol")[2].style.backgroundColor="steelblue"
to2=true; 
}
}
function To3() {
if (to3) {
document.getElementsByClassName("hidden")[9].style.display="none"
document.getElementsByClassName("trol")[3].style.backgroundColor="blue";
to3=false;
}   
else {
document.getElementsByClassName("hidden")[9].style.display="block"
document.getElementsByClassName("trol")[3].style.backgroundColor="steelblue"
to3=true; 
}
}
function To4() {
if (to4) {
document.getElementsByClassName("hidden")[10].style.display="none"
document.getElementsByClassName("trol")[4].style.backgroundColor="blue";
to4=false;
}   
else {
document.getElementsByClassName("hidden")[10].style.display="block"
document.getElementsByClassName("trol")[4].style.backgroundColor="steelblue"
to4=true; 
}
}
function To5() {
if (to5) {
document.getElementsByClassName("hidden")[11].style.display="none"
document.getElementsByClassName("trol")[5].style.backgroundColor="orangered";
to5=false;
}   
else {
document.getElementsByClassName("hidden")[11].style.display="block"
document.getElementsByClassName("trol")[5].style.backgroundColor="darkorange"
to5=true; 
}
}
function Ta0() {
if (ta0) {
document.getElementsByClassName("hidden")[12].style.display="none"
document.getElementsByClassName("tram")[0].style.backgroundColor="green";
ta0=false;
}   
else {
document.getElementsByClassName("hidden")[12].style.display="block"
document.getElementsByClassName("tram")[0].style.backgroundColor="olive"
ta0=true; 
}
}
function Ta1() {
if (ta1) {
document.getElementsByClassName("hidden")[13].style.display="none"
document.getElementsByClassName("tram")[1].style.backgroundColor="green";
ta1=false;
}   
else {
document.getElementsByClassName("hidden")[13].style.display="block"
document.getElementsByClassName("tram")[1].style.backgroundColor="olive"
ta1=true; 
}
}
function Ta2() {
if (ta2) {
document.getElementsByClassName("hidden")[14].style.display="none"
document.getElementsByClassName("tram")[2].style.backgroundColor="green";
ta2=false;
}   
else {
document.getElementsByClassName("hidden")[14].style.display="block"
document.getElementsByClassName("tram")[2].style.backgroundColor="olive"
ta2=true; 
}
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
    window.open("mVehicles.html","_self");   
    }