/*运用的函数：
            * Array.shift():删除并返回数组的第一个元素
            * Array.slice(start,end)从某个已有的数组返回选定的元素*/
/*算法：
       *  先将数组从中间middle分成left和right两部分，然后分别递归调用继续分，
        *  分至每个数组只含一个元素比较后小的放在前面存入arr中，然后left和right
        *  为0结束，然后再都合并到arr中，最后生成排序后的*/
var Array_D=[1,2,5,3,6,7,5,8,5,34,3,23]
function　merge(left, right){
    var　arr=[];
    while(left.length>0 && right.length>0){
        if(left[0]<right[0]){
            arr.push(left.shift());
        }else{
            arr.push(right.shift());
        }
    }
    return　arr.concat(left).concat(right);
}
function　mergeSort(items){
    if(items.length == 1){
        return　items;
    }
    var　middle = Math.floor(items.length/2),
        left = items.slice(0, middle),
        right = items.slice(middle);
    return　merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort(Array_D));