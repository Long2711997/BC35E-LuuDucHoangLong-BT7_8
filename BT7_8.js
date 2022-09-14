var arr = [];
var btnAdd = document.getElementById('btnAdd');
btnAdd.onclick = function() {
    var n = document.getElementById('n').value;

    arr.push(parseFloat(n));

    document.getElementById('init_arr').innerHTML = arr;
}

var btnSum = document.getElementById('sum').onclick = function() {
    var sum = 0;
    for ( i = 0 ; i < arr.length ; i ++) {
        if (arr[i] > 0 ) {
            sum += arr[i];
        }
    }
    document.getElementById('sum_result').innerHTML = 'Tổng các số dương: ' + sum;
}

var btnCount = document.getElementById('count').onclick = function() {
    var count = 0
    for ( i = 0 ; i < arr.length ; i ++) {
        if (arr[i] > 0 ) {
            count++
        }
    }
    document.getElementById('count_result').innerHTML = 'Số dương: ' + count;
}

var btnMin = document.getElementById('min').onclick = function() {
    var min = arr[0];
    for ( i = 1 ; i < arr.length ; i ++) {
        if (min > arr[i] ) {
            min = arr[i];
        }
    }
    document.getElementById('min_result').innerHTML = 'Số nhỏ nhất: ' + min;
}

var btnPosMin = document.getElementById('pos_min').onclick = function() {
    var pos_min = arr[0];

        for ( i = 1 ; i < arr.length ; i ++) {
            while ( arr[i] >= 0) {
                if (pos_min > arr[i] ) {
                pos_min = arr[i];
                }
            break;
            }   
        }

    document.getElementById('pos_min_result').innerHTML = 'Số dương nhỏ nhất: ' + pos_min;
}

var btnLastEven = document.getElementById('last_even').onclick = function() {
    var even = 0;
    for ( var i = arr.length-1 ; i >= 0 ; i --) {
        if ( arr[i] % 2 == 0 ) {
            even = arr[i];
            break
        } else {
        even = -1;
        }
    }
    document.getElementById('last_even_result').innerHTML = 'Số chẵn cuối cùng: ' + even;
}

var btnSwap = document.getElementById('swap').onclick = function() {
    var temp;
    var index1 = document.getElementById('index1').value*1;
    var index2 = document.getElementById('index2').value*1;

    for ( var i = 0 ; i < arr.length ; i ++) {
        temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    document.getElementById('swap_result').innerHTML = 'Mảng sau khi hoán đổi :' + arr;
}

var btnSort = document.getElementById('sort').onclick = function() {
    
    arr.sort()

    function compareFn(a, b){
    return a-b;
    }

    arr.sort(compareFn)

    document.getElementById('sort_result').innerHTML = 'Mảng sau khi sắp xếp :' + arr;
}

var btnPrime = document.getElementById('prime').onclick = function() {

    function checkPrime(n) {
        if (n < 2 ) {
            return false;
        } 
            for (var i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) {
                return false;
            }
        }
        return true;
}

arr.forEach(function() {
    for ( var i = 0 ; i < arr.length ; i ++) {
        var isPrime = checkPrime(arr[i]);
        if (isPrime) {
            document.getElementById('prime_result').innerHTML = 'Số nguyên tố đầu tiên là: ' + arr[i];
            break;
        } else {
            document.getElementById('prime_result').innerHTML = '-1';
        }
    }
});
}

var arrNew = [];
var btnAdd_new = document.getElementById('btnAddNew');
btnAdd_new.onclick = function() {
    var nNew = document.getElementById('nNew').value;

    arrNew.push(parseFloat(nNew));

    document.getElementById('newArr').innerHTML = arrNew;
}

var btnInteger = document.getElementById('integer').onclick = function() {
    var integerArr = [];
    for ( var i = 0 ; i < arrNew.length ; i ++) {
        if (Number.isInteger(arrNew[i])){
            integerArr.push(arrNew[i])
        }  
    }    
    document.getElementById('integer_result').innerHTML = 'Số nguyên: ' + integerArr;    
}

var btnCompare = document.getElementById('compare').onclick = function() {
    var pos = 0;
    var nev = 0;
    for ( var i = 0 ; i < arrNew.length ; i ++) {
        if ( arrNew[i] >= 0 ){
            pos ++
        } else {
            nev ++
        } 
    }    

    if ( pos > nev ) {
        document.getElementById('compare_result').innerHTML = 'Số lượng số dương nhiều hơn số âm';  
    } else if ( pos < nev ) {
        document.getElementById('compare_result').innerHTML = 'Số lượng số âm nhiều hơn số dương'; 
    } else {
        document.getElementById('compare_result').innerHTML = 'Số lượng số âm và số dương bằng nhau'; 
    }
}