/*运用的函数：
            * Math.floor(x):返回小于等于x的最大整数
            * Array.splice():删除元素，并向数组添加新元素，返回值是删除内容
            * Array.concat():连接两个或更多的数组*/
var array_C = [15,19,76,99,43,32,28,7,12,10];
function Quicksort (arr){
    if (arr.length<=1){
        return arr;
    }
    var middle;
    var vip;
    var left=[];
    var right=[];
    middle = Math.floor(arr.length/2);
    vip = arr.splice(middle,1)[0];
    for (var i=0;i<arr.length;i++){
        if(arr[i]<=vip){
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return Quicksort(left).concat([vip],Quicksort(right));
}
console.log(Quicksort(array_C));
