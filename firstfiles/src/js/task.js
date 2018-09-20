var scrollDiv = document.getElementsByClassName('scroll_div')[0];
var i = 1;
document.getElementById('slide_item'+i).className = 'slide_dot_current';
// 定义初始值
var left =0;
// 定义一个定时器 走一步
function move(){
  var timer = setInterval(function(){
    left --;
    if (left <= -270) {
      /*document.getElementById('slide_item' + i).className = 'slide_dot';
      i++;
      document.getElementById('slide_item' + i).className = 'slide_dot_current';*/
      left = 0;
      i = 0;
    }
    if (left % -54 == 0) {
      clearInterval(timer);
      timer = null;
      i=left/(-54);
      if (i==0){
        document.getElementById('slide_item5').className = 'slide_dot';
        document.getElementById('slide_item1').className = 'slide_dot_current';
      }else {
        document.getElementById('slide_item' + i).className = 'slide_dot';
        document.getElementById('slide_item' + (i+1)).className = 'slide_dot_current';
      }
    }
    scrollDiv.style.marginLeft = left*10 + 'px';
  },5);
}
// 定义一个定时器 每隔固定时间 走一张
setInterval(function(){
  move();
},3000);
document.getElementById('firstpage').style.visibility= 'visible';
document.getElementById('searchpage').style.visibility= 'hidden';
function searchevent() {
  document.getElementById('firstpage').style.visibility= 'hidden';
  document.getElementById('searchpage').style.visibility= 'visible';
}
function backevent() {
  document.getElementById('firstpage').style.visibility= 'visible';
  document.getElementById('searchpage').style.visibility= 'hidden';
}
