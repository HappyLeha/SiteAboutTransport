var b=true;
var f=true;
var x=window.innerWidth*0.35;
var w=window.innerWidth;
var foo=w*4;
function F() {

w=window.innerWidth;

if (w<=900) {
document.getElementsByTagName("table")[0].style.fontSize="small";
document.getElementsByTagName("span")[0].style.fontSize="large";
document.getElementsByTagName("span")[1].style.fontSize="large";
document.getElementsByTagName("span")[2].style.fontSize="large";
document.getElementsByTagName("span")[3].style.fontSize="large";
document.getElementsByTagName("span")[4].style.fontSize="large";
document.getElementsByTagName("html")[0].style.overflowX="visible";
w=900;

}
else {
document.getElementsByTagName("table")[0].style.fontSize="medium";
document.getElementsByTagName("span")[0].style.fontSize="x-large";
document.getElementsByTagName("span")[1].style.fontSize="x-large";
document.getElementsByTagName("span")[2].style.fontSize="x-large";
document.getElementsByTagName("span")[3].style.fontSize="x-large";
document.getElementsByTagName("span")[4].style.fontSize="x-large";
document.getElementsByTagName("html")[0].style.overflowX="hidden";    
}
x=window.innerWidth*0.35;
document.getElementById("head").style.marginTop=-w*0.01;
document.getElementById("head").style.marginLeft=-w*0.01;
document.getElementById("head").style.width=w*1.004;
document.getElementById("head").style.height=w*0.142;
document.getElementsByTagName("svg")[0].style.width=w*0.235;
document.getElementsByTagName("svg")[0].style.height=w*0.09;
document.getElementsByTagName("svg")[0].style.marginTop=w*0.009;
document.getElementsByTagName("svg")[0].style.marginLeft=w*0.35;
document.getElementsByTagName("svg")[1].style.marginLeft=w*0.8;
document.getElementsByTagName("svg")[1].style.marginTop=w*0.005;
document.getElementsByTagName("svg")[1].style.height=w*0.025;
document.getElementsByTagName("svg")[1].style.width=w*0.008;
document.getElementsByTagName("svg")[2].style.width=w*1.003;
document.getElementsByTagName("svg")[2].style.marginTop=w*0.01;
document.getElementsByTagName("svg")[2].style.height=w*0.001;
document.getElementsByTagName("svg")[2].style.marginLeft=-w*0.01;
document.getElementsByClassName("button")[0].style.marginTop=w*0.1;
document.getElementsByClassName("button")[0].style.marginLeft=-w*0.01;
document.getElementsByClassName("button")[0].style.height=w*0.03;
document.getElementsByClassName("button")[0].style.width=w*0.2;
document.getElementsByClassName("button")[1].style.marginTop=w*0.1;
document.getElementsByClassName("button")[1].style.marginLeft=w*0.194;
document.getElementsByClassName("button")[1].style.height=w*0.03;
document.getElementsByClassName("button")[1].style.width=w*0.2;
document.getElementsByClassName("button")[2].style.marginTop=w*0.1;
document.getElementsByClassName("button")[2].style.marginLeft=w*0.398;
document.getElementsByClassName("button")[2].style.height=w*0.03;
document.getElementsByClassName("button")[2].style.width=w*0.2;
document.getElementsByClassName("button")[3].style.marginTop=w*0.1;
document.getElementsByClassName("button")[3].style.marginLeft=w*0.602;
document.getElementsByClassName("button")[3].style.height=w*0.03;
document.getElementsByClassName("button")[3].style.width=w*0.2;
document.getElementsByClassName("button")[4].style.marginTop=w*0.1;
document.getElementsByClassName("button")[4].style.marginLeft=w*0.806;
document.getElementsByClassName("button")[4].style.height=w*0.03;
document.getElementsByClassName("button")[4].style.width=w*0.1835;

document.getElementsByClassName("bus")[0].style.marginTop=w*0.134;
document.getElementsByClassName("bus")[0].style.marginLeft=w*0.182;
document.getElementsByClassName("bus")[0].style.width=w*0.2;
document.getElementsByClassName("bus")[0].style.height=w*0.02;
document.getElementsByClassName("trol")[0].style.marginTop=w*0.134;
document.getElementsByClassName("trol")[0].style.marginLeft=w*0.382;
document.getElementsByClassName("trol")[0].style.width=w*0.2;
document.getElementsByClassName("trol")[0].style.height=w*0.02;
document.getElementsByClassName("tram")[0].style.marginTop=w*0.134;
document.getElementsByClassName("tram")[0].style.marginLeft=w*0.582;
document.getElementsByClassName("tram")[0].style.width=w*0.2;
document.getElementsByClassName("tram")[0].style.height=w*0.02;
document.getElementsByTagName("table")[0].style.marginTop=w*0.154;
document.getElementsByTagName("table")[0].style.marginLeft=w*0.182;
document.getElementsByTagName("table")[0].style.width=w*0.6;
document.getElementsByTagName("table")[1].style.marginTop=w*0.154;
document.getElementsByTagName("table")[1].style.marginLeft=w*0.182;
document.getElementsByTagName("table")[1].style.width=w*0.6;
document.getElementsByTagName("table")[2].style.marginTop=w*0.154;
document.getElementsByTagName("table")[2].style.marginLeft=w*0.182;
document.getElementsByTagName("table")[2].style.width=w*0.6;
document.getElementsByTagName("footer")[0].style.marginTop=foo;
document.getElementsByTagName("footer")[0].style.marginLeft=-w*0.02;
document.getElementsByTagName("footer")[0].style.height=w*0.05;
document.getElementsByTagName("footer")[0].style.width=w*1.03;
document.getElementById("minsk").style.marginLeft=w*0.02;
document.getElementById("minsk").style.marginTop=w*0.01;
document.getElementById("mobile").style.marginLeft=w*0.89;
document.getElementById("mobile").style.marginTop=w*0.01;
}

function Move() {
if (!b) return;
b=false;
var t=setInterval(move,5);
document.getElementById("yellow").style.fill="yellow";
function move() {
if (f) x=x+x*0.002;
else {if (x<w*0.32) x=x+(w*0.35-x)*0.002;

else x=x+w*0.00009;

}
document.getElementsByTagName("svg")[0].style.marginLeft=x;
if (x>=w*0.75) {
document.getElementById("red").style.fill="gray";
document.getElementById("yellow").style.fill="gray";
document.getElementById("green").style.fill="green";
}
if (x>=w*0.15&&!f) {
    document.getElementById("green").style.fill="gray";
    document.getElementById("yellow").style.fill="yellow";
}
if (x>=w*0.3&&!f) {
    document.getElementById("red").style.fill="red";
    document.getElementById("yellow").style.fill="gray";
}
if (x>=w*1.3) {x=-w*0.6;
                           f=false;
                          
}
if (x>=w*0.35&&!f) {
                                    f=true;
                                    
                                    document.getElementsByTagName("svg")[0].style.marginLeft=w*0.35;
                                    b=true;
                                    clearInterval(t);
                                   }


}
}
function buttonto() {

document.getElementsByClassName("trol")[0].style.backgroundColor="blue";
document.getElementsByClassName("bus")[0].style.backgroundColor="darkred";
document.getElementsByClassName("tram")[0].style.backgroundColor="darkgreen"
document.getElementsByTagName("table")[1].style.display="table";
document.getElementsByTagName("table")[0].style.display="none";
document.getElementsByTagName("table")[2].style.display="none";
foo=w*1.4;
F();
}
function buttona() {

document.getElementsByClassName("trol")[0].style.backgroundColor="darkblue";
document.getElementsByClassName("bus")[0].style.backgroundColor="red";
document.getElementsByClassName("tram")[0].style.backgroundColor="darkgreen"
document.getElementsByTagName("table")[1].style.display="none";

document.getElementsByTagName("table")[2].style.display="none";  
document.getElementsByTagName("table")[0].style.display="table"; 
foo=w*4; 
F();
}
function buttonta() {

    document.getElementsByClassName("trol")[0].style.backgroundColor="darkblue";
    document.getElementsByClassName("bus")[0].style.backgroundColor="darkred";
    document.getElementsByClassName("tram")[0].style.backgroundColor="green"
    document.getElementsByTagName("table")[1].style.display="none";
    document.getElementsByTagName("table")[0].style.display="none";
    document.getElementsByTagName("table")[2].style.display="table";   
    foo=w*0.4;
    F(); 
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
        window.open("mRoutes.html","_self");   
        }