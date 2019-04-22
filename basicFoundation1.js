// 1
function returnArr() {
    var arr = [];
    for(var i = 1; i <= 255; i++){
        arr.push(i);
    }
    console.log(arr);
}
returnArr();

//2
function getEven() {
    var sum = 0;
    for(var i = 1; i <= 1000; i++){
        if(i % 2 === 0){
            sum += i;
        }
    }
    console.log(sum);
}
getEven();

//3
function sumOdd() {
    var sum = 0;
    for(var i = 1; i <= 5000; i++){
        if(i % 2 !== 0){
            sum += i;
        }
    }
    console.log(sum);
}
sumOdd();

//4
function iterateArray(x){
    var sum = 0;
    for(var i = 0; i < x.length; i++){
        sum += x[i];
    }
    console.log(sum);
}
iterateArray([4,5,6]);

// 5
function findMax(x) {
    var max = 0;
    for(var i = 0; i < x.length; i++){
        if(max < x[i]){
            max = x[i];
        }
    }
    console.log(max);
}
findMax([1,3,7,5,2]);

// 6
function findAvg(x){
    var sum = 0;
    for(var i = 0; i < x.length; i++){
        sum += x[i];
    }
    var avg = sum / x.length;
    console.log(avg);
}
findAvg([1,2,3]);

// 7
function arrOdd(){
    var arr = [];
    for(var i = 0; i < 50; i++){
        if(i % 2 !== 0){
            arr.push(i);
        }
    }
    console.log(arr);
}
arrOdd();

// 8
function greaterThanY(x,Y){
    var count = 0;
    for(var i = 0; i < x.length; i++){
        if(x[i] > Y){
            count++;
        }
    }
    console.log(count);
}
greaterThanY([1,2,5,7,8,9], 6);

// 9
function squares(x){
    for(var i = 0; i < x.length; i++){
        x[i] *= x[i];
    }
    console.log(x);
}
squares([5,4,3,4]);

// 10
function replaceNegs(x){
    for(var i = 0; i < x.length; i++){
        if(x[i] < 0) {
            x[i] = 0;
        }
    }
    console.log(x);
}
replaceNegs([1,4,-4,-1,5,0,-9]);

//11
function maxMinAvg(x){
    var min = x[0];
    var max = x[0];
    var sum = 0;
    for(var i = 1; i < x.length; i++){
        if(x[i] > max){
            max = x[i];
        }
        else if(x[i] < min){
            min = x[i];
        }
        sum += x[i];
    }
    console.log([max, min, sum / x.length]);
}
maxMinAvg([1,2,3,4,5,6,7,8]);

//12
function swapValues(x){
    var temp = x[0];
    x[0] = x[x.length - 1];
    x[x.length - 1] = temp;
    console.log(x);

}
swapValues([4,2,1,3]);

// 13
function numToString(x){
    for(var i = 0; i < x.length; i++){
        if(x[i] < 0){
            x[i] = 'Dojo';
        }
    }
    console.log(x);
}
numToString([1,4,-5,3,-1,0]);