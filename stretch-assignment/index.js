
let down = false;
let go;
let newX;
let red = document.querySelector('.block--red');
let blue = document.querySelector('.block--blue');
let green = document.querySelector('.block--green');
let pink = document.querySelector('.block--pink');
let gray = document.querySelector('.block--gray');
let boxes = document.querySelectorAll('.blocks');
let arr = [red,blue,green,pink,gray];
for(let j in arr){
for(let i =0;i<1;i++){
  arr[j].addEventListener('mousedown',function(event){

    down = true;
    moveThings(this,this.style.left);
  })

}
}

boxes.forEach(function(b){
  b.addEventListener('mouseup', function(event) {
    console.log('out')
    down = false;
cancelAnimationFrame(go);
b.style.left = b.style.left;
  })
})

function moveThings(box) {
  let moveX = 0;
  let moveL = 0;
  let boxr = 550;
  let boxl = 0;

  let inc = 1;
  function updatePos(box) {
    if(down === false){
      cancelAnimationFrame(go);
    }
    if (down === true) {
      moveX += inc;
      box.style.position = 'relative';
    return box.style.left = moveX + 'px';


    }
  }

  function anim() {
  go = requestAnimationFrame(anim);
    console.log('i')
    updatePos(box)

  }
  anim();
}
