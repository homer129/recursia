function sumTo(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

function sumTo(n) {
    return (n == 1) ? n : (n + sumTo(n-1))
}

function sumTo(n) {
    return (2 + (1 * (n - 1))) / 2 * n;
}

function factorial(n) {
    return (n == 1) ? n : (n * factorial(n-1));
}

function fib(n) {
    let arr = [1, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n-1];
}

function fib(n) {
    return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function printList(list) {
    alert(list.value);
    if (list.next) {
        printList(list.next);
    }
    
}

function printList(list) {
    let tmp = list;
    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }
}

function printList(list) {
    
    if (list.next) {
        printList(list.next);
    }
    alert(list.value);
}

function printList(list) {
    let tmp = list;
    let arr = [];
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}

function sum(a) {
    return function(b) {
        alert(a + b);
    };
}

function inBetween(a, b) {
    let arr1 = arr.slice(arr.indexOf(a), arr.indexOf(b) + 1);
    return [...arr1];
}

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <=b;
    }
}

function inArray(arr1) {
    return function(x) {
        return arr1.includes(x);
    };
}


function byField(arg){
    return (a, b) => a[arg] > b[arg] ? 1 : -1;
}

function makeArmy() {
    let shooters = [];
  
    for (let i = 0; i < 10; i++) {
      let shooter = function() {
          alert(i);
      };
      shooters.push(shooter);
    }
  
    return shooters;
}

function makeCounter() {
    let count = 0;
    function countr() {
        return count++; 
    };  
    
    countr.set = (value) => count = value;
    countr.decrease = () => count--;
      
    return countr;
}

function sum(a){
    let curretSum = a;

    function f(b){
        curretSum += b;
        return f;
    }

    f.toString = function(){
        return curretSum;
    }

    return f;

}

function printNumbers(from, to){
    let a = from;
    let timerId = setInterval(function (){
        alert(a);
        if (a == to) {
            clearInterval(timerId);
        }
        a++;            
    }, 1000);
}

function printNumbers(from, to){
    let a = from;
    let timerId = setTimeout(function f(){
        alert(a);
        if (a < to) {
            setTimeout(f, 1000);
        } 
        a++;
    }, 1000)

}

function spy(func) {
    function wrapper(...args){
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}

function delay(f, ms){
    return function(){
      setTimeout(() => f.apply(this,arguments), ms);
    };
}

function delay(f, ms){
    return function(...args){
      let saveThis = this;
      setTimeout(function(){
        f.apply(saveThis, args);
      }, ms);      
    };
}

function debounce(f, ms) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      f.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, ms);
    };
  
}

function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
}





