moveThings();
function moveThings(){
let down = false;
  let moveX = 0;
  let moveL = 0;
let boxr = 550;
let boxl = 0;
 let bus = document.getElementById('bus-png');
document.addEventListener('mouseenter',function(event){
    down = true;
})

document.addEventListener('mouseleave',function(event){
    down = false;
})
let inc = 1;
function updatePos() {
   moveX = moveX;
    if (down === true) {
        moveX += inc;
        bus.style.marginLeft = moveX+'px';
      if (parseInt(moveX) > parseInt(boxr)){
        inc = -inc;
      }
      if(parseInt(moveX) < parseInt(boxl)){
        inc = -inc;
      }
    }
}

function anim(){
    requestAnimationFrame(anim);
  updatePos()
}
anim();
}

    const background = document.getElementsByTagName('img')[0];
  background.addEventListener("mousedown", function(e) {
        background.src === background.src ? background.src = 'img/night.jpg':background.src = 'img/sand-bus.png';
    });


    let button = document.createElement('button');
    const cont = document.querySelector('.nav-container')
let btn = function(){
  button.style.width = '100px',button.style.height = '80px',button.style.background = 'green',button.style.position ='absoulte',
  button.style.zIndex = '10'
cont.appendChild(button);

}
btn();

let night = 'img/night.jpg';
let ocean = 'img/ocean.jpg';
let arr = []
button.addEventListener('click', event => {
  console.log("dumbass")
  document.body.setAttribute("style", "background:url('img/night.jpg')");
cont.style.background ='black';
cont.style.color = 'white'
 document.documentElement.style.setProperty('color', 'white');

  });








  //   document.body.addEventListener("mouseup", function(e) {
  //   keys[e.keyCode] = false;
  // });
