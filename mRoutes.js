var b=true;
var f=true;
var x=window.innerWidth*0.35;
var w=window.innerWidth;
var foo=w*4;
var r;
document.getElementsByTagName("html")[0].style.overflowX="hidden"; 
function F() {

w=window.innerWidth;
if (w>=900) {
    w=900;
    r=(window.innerWidth-900)/2;
    
    
    document.getElementsByTagName("table")[0].style.fontSize="medium";
    document.getElementsByTagName("table")[1].style.fontSize="medium";
    document.getElementsByTagName("table")[2].style.fontSize="medium";
    document.getElementsByTagName("span")[0].style.fontSize="large";
    document.getElementsByTagName("span")[1].style.fontSize="large";
    document.getElementsByTagName("span")[2].style.fontSize="large";
    document.getElementsByTagName("span")[3].style.fontSize="large";
    document.getElementsByTagName("span")[4].style.fontSize="large";
    
    }
if (w>600&&w<900) {
    document.getElementsByClassName("bus")[0].style.fontSize="small";
    document.getElementsByClassName("trol")[0].style.fontSize="small";
    document.getElementsByClassName("tram")[0].style.fontSize="small";
    document.getElementsByTagName("table")[0].style.fontSize="small";
    document.getElementsByTagName("table")[1].style.fontSize="small";
    document.getElementsByTagName("table")[2].style.fontSize="small";
    document.getElementsByTagName("span")[0].style.fontSize="small";
    document.getElementsByTagName("span")[1].style.fontSize="small";
    document.getElementsByTagName("span")[2].style.fontSize="small";
    document.getElementsByTagName("span")[3].style.fontSize="small";
    document.getElementsByTagName("span")[4].style.fontSize="small";

}
if (w<=600) {
    document.getElementsByClassName("bus")[0].style.fontSize="x-small";
    document.getElementsByClassName("trol")[0].style.fontSize="x-small";
    document.getElementsByClassName("tram")[0].style.fontSize="x-small";
    document.getElementsByTagName("table")[0].style.fontSize="x-small";
    document.getElementsByTagName("table")[1].style.fontSize="x-small";
    document.getElementsByTagName("table")[2].style.fontSize="x-small";
    document.getElementsByTagName("span")[0].style.fontSize="xx-small";
    document.getElementsByTagName("span")[1].style.fontSize="xx-small";
    document.getElementsByTagName("span")[2].style.fontSize="xx-small";
    document.getElementsByTagName("span")[3].style.fontSize="xx-small";
    document.getElementsByTagName("span")[4].style.fontSize="xx-small";

    
    }

x=window.innerWidth*0.35;
document.getElementById("head").style.marginTop=-w*0.01;
document.getElementById("head").style.marginLeft=-w*0.01+r;
document.getElementById("head").style.width=w*1.004;
document.getElementById("head").style.height=w*0.142;
document.getElementsByTagName("svg")[0].style.width=w*0.235;
document.getElementsByTagName("svg")[0].style.height=w*0.09;
document.getElementsByTagName("svg")[0].style.marginTop=w*0.009;
document.getElementsByTagName("svg")[0].style.marginLeft=w*0.35+r;
document.getElementsByTagName("svg")[1].style.marginLeft=w*0.8+r;
document.getElementsByTagName("svg")[1].style.marginTop=w*0.005;
document.getElementsByTagName("svg")[1].style.height=w*0.025;
document.getElementsByTagName("svg")[1].style.width=w*0.008;
document.getElementsByTagName("svg")[2].style.width=w*1.003;
document.getElementsByTagName("svg")[2].style.marginTop=w*0.01;
document.getElementsByTagName("svg")[2].style.height=w*0.001;
document.getElementsByTagName("svg")[2].style.marginLeft=-w*0.01+r;
document.getElementsByClassName("button")[0].style.marginTop=w*0.1;
document.getElementsByClassName("button")[0].style.marginLeft=-w*0.01+r;
document.getElementsByClassName("button")[0].style.height=w*0.03;
document.getElementsByClassName("button")[0].style.width=w*0.2;
document.getElementsByClassName("button")[1].style.marginTop=w*0.1;
document.getElementsByClassName("button")[1].style.marginLeft=w*0.194+r;
document.getElementsByClassName("button")[1].style.height=w*0.03;
document.getElementsByClassName("button")[1].style.width=w*0.2;
document.getElementsByClassName("button")[2].style.marginTop=w*0.1;
document.getElementsByClassName("button")[2].style.marginLeft=w*0.398+r;
document.getElementsByClassName("button")[2].style.height=w*0.03;
document.getElementsByClassName("button")[2].style.width=w*0.2;
document.getElementsByClassName("button")[3].style.marginTop=w*0.1;
document.getElementsByClassName("button")[3].style.marginLeft=w*0.602+r;
document.getElementsByClassName("button")[3].style.height=w*0.03;
document.getElementsByClassName("button")[3].style.width=w*0.2;
document.getElementsByClassName("button")[4].style.marginTop=w*0.1;
document.getElementsByClassName("button")[4].style.marginLeft=w*0.806+r;
document.getElementsByClassName("button")[4].style.height=w*0.03;
document.getElementsByClassName("button")[4].style.width=w*0.1835;

document.getElementsByClassName("bus")[0].style.marginTop=w*0.134;
document.getElementsByClassName("bus")[0].style.marginLeft=-w*0.01+r;
document.getElementsByClassName("bus")[0].style.width=w*0.35;
document.getElementsByClassName("bus")[0].style.height=w*0.02;
document.getElementsByClassName("trol")[0].style.marginTop=w*0.134;
document.getElementsByClassName("trol")[0].style.marginLeft=w*0.32+r;
document.getElementsByClassName("trol")[0].style.width=w*0.33;
document.getElementsByClassName("trol")[0].style.height=w*0.02;
document.getElementsByClassName("tram")[0].style.marginTop=w*0.134;
document.getElementsByClassName("tram")[0].style.marginLeft=w*0.65+r;
document.getElementsByClassName("tram")[0].style.width=w*0.345;
document.getElementsByClassName("tram")[0].style.height=w*0.02;
document.getElementsByTagName("table")[0].style.marginTop=w*0.154;
document.getElementsByTagName("table")[0].style.marginLeft=-w*0.01+r;
document.getElementsByTagName("table")[0].style.width=w*1.01;
document.getElementsByTagName("table")[1].style.marginTop=w*0.154;
document.getElementsByTagName("table")[1].style.marginLeft=-w*0.01+r;
document.getElementsByTagName("table")[1].style.width=w*1.01;
document.getElementsByTagName("table")[2].style.marginTop=w*0.154;
document.getElementsByTagName("table")[2].style.marginLeft=-w*0.01+r;
document.getElementsByTagName("table")[2].style.width=w*1.01;
document.getElementsByTagName("footer")[0].style.marginTop=foo;
document.getElementsByTagName("footer")[0].style.marginLeft=-w*0.02+r;
document.getElementsByTagName("footer")[0].style.height=w*0.05;
document.getElementsByTagName("footer")[0].style.width=w*1.03;
document.getElementById("minsk").style.marginLeft=w*0.02;
document.getElementById("minsk").style.marginTop=w*0.01;
document.getElementById("mobile").style.marginLeft=w*0.89;
document.getElementById("mobile").style.marginTop=w*0.01;
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
        window.open("Routes.html","_self");   
        }