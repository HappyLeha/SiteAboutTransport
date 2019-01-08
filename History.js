var w;
function F() {

w=window.innerWidth;
if (w<900) {
w=900;
document.getElementsByTagName("html")[0].style.overflowX="visible";
document.getElementById("block").style.fontSize="small";
document.getElementsByTagName("span")[0].style.fontSize="large";
document.getElementsByTagName("span")[1].style.fontSize="large";
document.getElementsByTagName("span")[2].style.fontSize="large";
document.getElementsByTagName("span")[3].style.fontSize="large";
document.getElementsByTagName("span")[4].style.fontSize="large";


}
else {
document.getElementsByTagName("html")[0].style.overflowX="hidden";
document.getElementById("block").style.fontSize="medium";
document.getElementsByTagName("span")[0].style.fontSize="x-large";
document.getElementsByTagName("span")[1].style.fontSize="x-large";
document.getElementsByTagName("span")[2].style.fontSize="x-large";
document.getElementsByTagName("span")[3].style.fontSize="x-large";
document.getElementsByTagName("span")[4].style.fontSize="x-large";   
}
document.getElementById("head1").style.marginLeft=-w*0.02;
document.getElementById("head1").style.width=w*1.01;
document.getElementById("head1").style.height=w*0.15;
document.getElementById("head1").style.marginTop=-w*0.02;
document.getElementById("head2").style.marginLeft=-w*0.02;
document.getElementById("head2").style.width=w*1.01;
document.getElementById("head2").style.height=w*0.15;
document.getElementById("head2").style.marginTop=-w*0.02;
document.getElementById("head3").style.marginLeft=-w*0.02;
document.getElementById("head3").style.width=w*1.01;
document.getElementById("head3").style.height=w*0.15;
document.getElementById("head3").style.marginTop=-w*0.02;
document.getElementById("head4").style.marginLeft=-w*0.02;
document.getElementById("head4").style.width=w*1.01;
document.getElementById("head4").style.height=w*0.15;
document.getElementById("head4").style.marginTop=-w*0.02;
document.getElementById("head5").style.marginLeft=-w*0.02;
document.getElementById("head5").style.width=w*1.01;
document.getElementById("head5").style.height=w*0.15;
document.getElementById("head5").style.marginTop=-w*0.02;
document.getElementById("head6").style.marginLeft=-w*0.02;
document.getElementById("head6").style.width=w*1.01;
document.getElementById("head6").style.height=w*0.15;
document.getElementById("head6").style.marginTop=-w*0.02;
document.getElementsByClassName("button")[0].style.marginTop=w*0.13;
document.getElementsByClassName("button")[0].style.marginLeft=-w*0.01;
document.getElementsByClassName("button")[0].style.height=w*0.03;
document.getElementsByClassName("button")[0].style.width=w*0.2;
document.getElementsByClassName("button")[1].style.marginTop=w*0.13;
document.getElementsByClassName("button")[1].style.marginLeft=w*0.194;
document.getElementsByClassName("button")[1].style.height=w*0.03;
document.getElementsByClassName("button")[1].style.width=w*0.2;
document.getElementsByClassName("button")[2].style.marginTop=w*0.13;
document.getElementsByClassName("button")[2].style.marginLeft=w*0.398;
document.getElementsByClassName("button")[2].style.height=w*0.03;
document.getElementsByClassName("button")[2].style.width=w*0.2;
document.getElementsByClassName("button")[3].style.marginTop=w*0.13;
document.getElementsByClassName("button")[3].style.marginLeft=w*0.602;
document.getElementsByClassName("button")[3].style.height=w*0.03;
document.getElementsByClassName("button")[3].style.width=w*0.2;
document.getElementsByClassName("button")[4].style.marginTop=w*0.13;
document.getElementsByClassName("button")[4].style.marginLeft=w*0.806;
document.getElementsByClassName("button")[4].style.height=w*0.03;
document.getElementsByClassName("button")[4].style.width=w*0.172;
document.getElementById("back").style.marginTop=w*0.165;
document.getElementById("back").style.marginLeft=w*0.165;
document.getElementById("back").style.width=w*0.6626;
document.getElementById("back").style.height=w*8.5;
document.getElementById("block").style.marginTop=w*0.165;
document.getElementById("block").style.marginLeft=w*0.165;
document.getElementById("block").style.height=w*8.4385;
document.getElementById("block").style.width=w*0.6;
document.getElementById("block").style.padding=w*0.03;
document.getElementById("history").style.height=w*0.5;
document.getElementById("history").style.width=w*0.5;
document.getElementById("history").style.marginLeft=w*0.04;
document.getElementById("rail").style.height=w*0.3;
document.getElementById("rail").style.width=w*0.5;
document.getElementById("rail").style.marginLeft=w*0.06;
document.getElementById("text").style.marginTop=w*0.165;
document.getElementById("text").style.marginLeft=w*0.165;
document.getElementById("text").style.height=w*8.5;
document.getElementById("text").style.width=w*0.6626;
document.getElementsByTagName("footer")[0].style.marginTop=w*8.5;
document.getElementsByTagName("footer")[0].style.height=w*0.25;
document.getElementById("minsk").style.marginTop=w*0.2;
document.getElementById("minsk").style.marginLeft=w*0.02;
document.getElementById("mobile").style.marginTop=w*0.2;
document.getElementById("mobile").style.marginLeft=w*0.89;
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
window.open("mHistory.html","_self");   
}