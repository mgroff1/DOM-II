//
let down = false;
let go;
let newX;
let red = {
  color: "red",
  ele: document.querySelector('.block--red')
};
let blue = {
  color: "blue",
  ele: document.querySelector('.block--blue')
};
let green = {
  color: "green",
  ele: document.querySelector('.block--green')
};
let pink = {
  color: "pink",
  ele: document.querySelector('.block--pink')
};
let gray = {
  color: "gray",
  ele: document.querySelector('.block--gray')
};

let boxes = document.querySelectorAll('.blocks');
let arr = [red, blue, green, pink, gray];
let arrc = ['red','blue','green','pink','gray'];
for(let i=0;i<arr.length;i++){
  arr[i].ele.addEventListener('mousedown', function(event) {
    down = true;
    let co = arr[i].color;
    // arr[i].ele.setAttribute('style','order:0');
    arr[0].ele.setAttribute('style','background-color:'+co);
    arr[i].ele.setAttribute('style','background-color:'+arr[0].ele.style.backgroundColor)
    console.log(this)
    moveThings(this, this.style.left);
  })
}
    // arr.forEach(function(ele){
    //   ele.ele.addEventListener('mousedown', function(event) {
    //     down = true;
    //     this.style.order = 0;
    //     moveThings(this, this.style.left);
    //   })
    // })


boxes.forEach(function(b) {
  b.addEventListener('mouseup', function(event) {
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
    if (down === false) {
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
