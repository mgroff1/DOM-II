
let ps = document.getElementsByTagName('p');
let text = ps[3];
///////////////////////////////////////////////////////
///////////////////Bus MoveMent///////////////////////
//////////////////////////////////////////////////////
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
        bus.style.transition = "transform 1.5s ease-in-out"
        bus.style.transform = 'rotateY(180deg)';
      }
      if(parseInt(moveX) < parseInt(boxl)){
        inc = -inc;
        bus.style.transition = "transform 1.5s ease-in-out"
        bus.style.transform = 'rotateY(0deg)';
      }
    }
}

function anim(){
    requestAnimationFrame(anim);
  updatePos()
}
anim();
}
///////////////////////////////////////////////////////
////////////////EndOfBus/////////////////////////
///////////////////////////////////////////////////
////////////////StartOfBusBackGroundClick/////////////////
//////////////////////////////////////////////////////////
    const background = document.getElementsByTagName('img')[0];
  background.addEventListener("mousedown", function(e) {
        background.src === background.src ? background.src = 'img/night.jpg':background.src = 'img/sand-bus.png';
    });
    ///////////////////////////////////////////////////////
    ////////////////EndOfBusBackGroundClick/////////////////////////
    ///////////////////////////////////////////////////
    ////////////////StartOfButtonCreateAndEvent/////////////////
    //////////////////////////////////////////////////////////

    let button = document.createElement('button');
    const cont = document.querySelector('.nav-container')
let btn = function(){
  button.style.width = '100px',button.style.height = '80px',button.style.background = 'green',button.style.position ='absoulte',
  button.style.zIndex ='10',button.textContent ='Press'
cont.appendChild(button);
}
btn();
let night = 'img/night.jpg';
let ocean = 'img/ocean.jpg';
let arr = []
button.addEventListener('click', event => {
  document.body.setAttribute("style", "background:url('img/woods.jpg')");
cont.style.background ='black';
cont.style.color = 'white'
 document.documentElement.style.setProperty('color', 'white');

  });
///////////////////////////////////////////////////////
////////////////EndOfButtonCreateAndEven/////////////////////////
///////////////////////////////////////////////////
////////////////StartOfDivCreateWithInstruction/////////////////
//////////////////////////////////////////////////////////
let pz = document.createElement('p');
pz.style.color='white',pz.style.fontSize='25px';
let sect = document.querySelector('.content-section');
let div = document.createElement('p');
div.style.width='55vw',div.style.height='55vh',div.style.position='absolute',div.style.background='black',div.style.border='2px ridge yellow',div.style.borderRadius='12px',div.style.marginBottom='20vh',div.style.color='white',div.style.fontSize='25px';
div.textContent = " Click any number on your keyboard number pad </br> By doing this font sizes of random paragraphs will change";
let timeo = setTimeout(function(){
  sect.appendChild(div)
},5000);

let opa = .99;
let inc = .0005;
  document.addEventListener('mouseenter',opac);

  function opac(){
    document.documentElement.style.setProperty('opacity',opa);
    opa -= inc;
    if(opa < .5 || opa > 1){
      inc = -inc
    }
    setTimeout(opac,20);
  }
  ///////////////////////////////////////////////////////
  ////////////////EndOfDivCreate/////////////////////////
  ///////////////////////////////////////////////////
  ////////////////StartOfKeyBoardBindingEvents/////////////////
  //////////////////////////////////////////////////////////

var keys = [];

var nums =[" ","1","2","3","4","5","6","7","8","9","0"];
document.addEventListener("keyup", function(e) {
  keys[e.code] = false;
  keyDown = false;
});


document.addEventListener("keydown", function(e) {
  keys[e.code] = true;
    for(let i in ps){
        if(keys["Numpad"+nums[i]]){
          let j = random(0,ps.length);
          console.log(j)
              ps[j].style.fontSize = i*10+'px';
              console.log(ps[i].style.fontSize)
              e.stopPropagation();
          }}

});

function random(min,max,decOrNot) {
this.decOrNot=decOrNot;
this.decOrNot === 'y' ? this.decOrNot = true:this.decOrNot = false;
    var num = Math.floor(Math.random()*(max-min)) + min;
    this.decOrNot === true ? num = num +(num/max):num=num;
      if(min < 0){posOrNeg(num)};

        function posOrNeg(x){
          let arr = [-1,1];
          let posNeg = random(0,1);
          return arr[posNeg]*x;
        }
        return num;
        }
/////////////////////////////////////////////////////////////
///////////////////THE END////////////////////////////////
//////////////////////////////////////////////////////////////
