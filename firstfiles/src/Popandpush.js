/*几个常用的函数 array.toString:把数组变成字符串，去除【】，内容用逗号链接
*                array.push():在数组的最末尾添加元素
*                array.pop():不需要参数，在数组的最末尾删除一项*/
/*思路：         利用队列A和队列B，先将元素push进A队列，然后利用pop踢出n-1个
                  元素到B队列中，然后将A队列中最后一个元素Pop出，作为出队，再
*                 将B队列中的元素重新push到A队列，在Push和pop的过程中，用point来记录他们的值*/
var array_a = [];
var array_b = [];
var queue  = new Queue();
function Queue() {
  this.in = function (x) {
    array_a.push(x);
    console.log('array A: '+array_a.toString());
    console.log('The length of array A is:'+array_a.length);
  };
  this.out = function () {
    var i;
    var len_a;
    var len_b;
    var point;
    var moved;
    len_a = array_a.length;
    for(i=0;i<(len_a-1);i++){
      point = array_a.pop();
      array_b.push(point);
    }
    moved = array_a.pop();
    console.log(moved+' '+'has been moved.');
    len_b = array_b.length;
    for(i=0;i<len_b;i++){
      point = array_b.pop();
      array_a.push(point);
    }
    console.log('After moving...' +
      'array A: '+array_a.toString());
    console.log('The length of array A is:'+array_a.length);
  };
}
queue.in(10);
queue.in(20);
queue.in(30);
queue.out();
queue.out();
