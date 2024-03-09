// Funcion para el Rollover de la Botonera 
function mOvr(src,clrOver) {
if (!src.contains(event.fromElement)) {
src.style.cursor = 'hand';
src.bgColor = clrOver;
}
}
function mOut(src,clrIn) {
if (!src.contains(event.toElement)) {
src.style.cursor = 'default';
src.bgColor = clrIn;
}
}
function mClk(src) {
if(event.srcElement.tagName=='TD'){
src.children.tags('A')[0].click();
}
}
/*
<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->
*/
Begin
function setVariables() {
if (navigator.appName == "Netscape") {
v=".top=";
dS="document.";
sD="";
y="window.pageYOffset";
}
else {
v=".pixelTop=";
dS="";
sD=".style";
y="document.body.scrollTop";
   }
}
function checkLocation() {
object="object1";
yy=eval(y);
eval(dS+object+sD+v+yy);
setTimeout("checkLocation()",10);
}
//  End -->


//Drag and drop engine for static content
//� Dynamic Drive (www.dynamicdrive.com)

var dragapproved=false
var zcor,xcor,ycor

function ietruebody(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function movescontentmain(){
if (event.button==1&&dragapproved){
zcor.style.pixelLeft=tempvar1+event.clientX-xcor
zcor.style.pixelTop=tempvar2+event.clientY-ycor
leftpos=document.all.scontentmain.style.pixelLeft-ietruebody().scrollLeft
toppos=document.all.scontentmain.style.pixelTop-ietruebody().scrollTop
return false
}
}
function dragscontentmain(){
if (!document.all)
return
if (event.srcElement.id=="scontentbar"){
dragapproved=true
zcor=scontentmain
tempvar1=zcor.style.pixelLeft
tempvar2=zcor.style.pixelTop
xcor=event.clientX
ycor=event.clientY
document.onmousemove=movescontentmain
}
}
document.onmousedown=dragscontentmain
document.onmouseup=new Function("dragapproved=false")


function handleIntersection(entries, observer) {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           // Si la sección es visible, mostrar las imágenes dentro de esa sección
           entry.target.querySelectorAll('.imagen').forEach(img => {
               img.classList.add('animar'); // Agregar clase para animar la opacidad
           });
       } else {
           // Si la sección no es visible, ocultar las imágenes dentro de esa sección
           entry.target.querySelectorAll('.imagen').forEach(img => {
               img.classList.remove('animar'); // Quitar clase para animar la opacidad
           });
       }
   });
}

