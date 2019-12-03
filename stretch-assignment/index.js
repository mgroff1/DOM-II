let down = false;
let moveX = 0;
 let blocks = document.querySelectorAll('.block');
document.addEventListener('mousedown',function(event){
    down = true;

      blocks.forEach(function(b){
          b.style.position = "relative"
    })
   anim();
})

document.addEventListener('mouseleave',function(event){
    down = false;

})
function updatePos() {
    if (down === true) {
        moveX -= .3;
              blocks.forEach(function(b){
        b.style.right = moveX + 'px';
        console.log(b.style.right);
                      })
    }
}

function anim(){
    requestAnimationFrame(anim);
  updatePos()
    console.log(moveX);
}
