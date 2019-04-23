//1
function biggieSize(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] = 'big';
        }
    }
    console.log(x);
}
biggieSize([-1, 2, -3, 4, 5]);

//2
function pLowRHigh(x) {
    var min = x[0];
    var max = x[0];
    for (var i = 1; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        } else if (x[i] < min) {
            min = x[i];
        }
    }
    console.log(min);
    return max;
}
pLowRHigh([1, 3, 5, 9, 0, 1]);

//3
function printOneRA(x) {
    var odds = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 !== 0) {
            odds.push(x[i]);
        }
    }
    console.log(x[x.length - 2]);
    return odds[0];
}
printOneRA([2, 4, 5, 6, 6, 7, 8, 9, 10, 11]);

//4
function doubleVision(x) {
    for (var i = 0; i < x.length; i++) {
        x[i] += x[i];
    }
    return x;
}
doubleVision([2, 4, 6]);

//5
function countPos(x) {
    var count = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            count++;
        }
    }
    x[x.length - 1] = count;
    console.log(x);
}
countPos([-1, 1, 1, 1]);

// 6
function evensAndOdds(x) {
    var even = 0;
    var odd = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            even++;
        }
        if (even === 3) {
            console.log('Even more so!');
            even = 0;
        }
        if (x[i] % 2 !== 0) {
            odd++;
        }
        if (odd === 3) {
            console.log("That's odd!");
            odd = 0;
        }
    }
}
evensAndOdds([2, 4, 6, 9, 11, 13]);

// 7
function incrTheSecs(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 !== 0) {
            x[i] = x[i] + 1;
        }
    }
    console.log(x);
}
incrTheSecs([0, 1, 2, 3, 4, 5, 6])

// 8
function prevLengths(x) {
    for (var i = x.length - 1; i > 0; i--) {
        x[i] = x[i - 1].length;
    }
    console.log(x);
}
prevLengths(["hello", "dojo", "awesome"])

// 9
function addSeven(x) {
    var arr = [];
    for (var i = 0; i < x.length; i++) {
        arr.push(x[i] + 7);
    }
    console.log(arr);
}
addSeven([1, 2, 3]);

// 10
function reverseArr() {
    var y = x.length - 1;
    for (var i = 0; i < x.length / 2; i++) {
        var temp = i[x];
        x[i] = x[y];
        x[y] = temp;
        y--;
        console.log(x);
        if (arr[i] === arr[y]) {
            break;
        }
    }
    return x;
}

// 11
function outNegs(x) {
    var arr = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            arr.push(x[i]);
        } else if (x[i] > 0) {
            arr.push(x[i] * -1);
        }
    }
    console.log(arr);
}
outNegs([1, -3, 5]);

// 12
function swapToCenter(i) {
    let y = i.length - 1
    for (let i = 0; i < i.length / 2; i = i + 2) {
        temp = x[i]
        x[i] = x[y];
        x[y] = temp;
        y = y - 2;
    }
    return x;
}

// 13
function scaleArr(x, num){
    for(var i = 0; i < x.length; i++){
        x[i] *= num;
    }
    console.log(x);
}
scaleArr([1,2,3,4], 3);