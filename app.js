
var buttons = document.getElementsByClassName('button');
for (var i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener('click' , changeColor) ; 
 }

 function changeColor(e){
    var id=e.target.id;
    const el=document.getElementById(id)
    const style = getComputedStyle(el)
    changeBodyBg(style.background)
    
}
function changeBodyBg(color){
    document. body. style. background = color;
    }