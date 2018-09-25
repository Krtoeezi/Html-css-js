/*几个常用的函数 array.toString:把数组变成字符串，去除【】，内容用逗号链接
*                array.push():在数组的最末尾添加元素
*                array.pop():不需要参数，在数组的最末尾删除一项*/
/*思路：         利用队列A和队列B，先将元素push进A队列，然后利用pop踢出到B
*                 队列，在Push和pop的过程中，用point来记录他们的值*/
var array_a = [];
var array_b = [];
var move_a = new Move_a();
var move_b = new Move_b();
var queue  = new Queue();
var point;
function Move_a() {
  this.push=function(x){
    array_a.push(x);
  };
  this.pop=function(){
    return array_a.pop();
  };
}
function Move_b() {
  this.push=function (x) {
    array_b.push(x);
  };
  this.pop=function () {
    return array_b.pop();
  };
}
function Queue() {
  this.in = function (x) {
    
  }
}
