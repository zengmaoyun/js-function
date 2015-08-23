1、将数组 arr 中的元素作为调用函数 fn 的参数
function argsAsArray(fn, arr) {
	return fn.apply(this,arr);
}


Function.apply(obj,args)方法能接收两个参数  
obj：这个对象将代替Function类里this对象  
args：这个是数组，它将作为参数传给Function（args-->arguments）  


Function.call(obj,[param1[,param2[,…[,paramN]]]])  
obj：这个对象将代替Function类里this对象  
params：这个是一个参数列表  


2、将函数 fn 的对象改为 obj 
function speak(fn, obj) {
	return fn.apply(obj,obj);
}


3、函数 functionFunction，调用之后满足如下条件：
	1）、返回值为一个函数 f
	2）、调用返回的函数 f，返回值为按照调用顺序的参数拼接，
		拼接字符为英文逗号
	3）、所有函数的参数数量为 1，且均为 String 类型 
输入例子:
functionFunction('Hello')('world')

输出例子:
Hello, world

function functionFunction(str) {
        function f(strr){
            return str + "," + strr;	//函数的操作	
        }
        return f;	//返回函数
    }

4、使用闭包，实现返回函数数组
	如果在函数func内部声明函数inner，
	然后在函数外部调用inner，这个过程即产生了一个闭包。
	闭包允许你引用存在于外部函数中的变量。
	1）
	function makeClosures(arr, fn) {
	    var f = [];
	    arr.forEach(function(item,index){
	        f[index] = function(){	//方法
	            return fn(item);	//item是外部函数中的变量
	        }
	    });
	    return f;
	}

	2）
	function makeClosures(arr, fn) {
	  var result = [];
	     arr.forEach(function(e){
	         result.push(function(num){
	             return function(){
	                 return fn(num);
	             };
	         }(e));
	     });
	     return result;
	 }


5、	二次封装函数
	输入例子：
		var sayIt = function(greeting, name, punctuation) { 
 		 return greeting + ', ' + name + (punctuation || '!'); 
			}; 
 		partial(sayIt, 'Hello', 'Ellie')('!!!');
 	输出例子:
		Hello, Ellie!!


	function partial(fn, str1, str2) {
	    return function(str3){
	        return fn.call(this,str1,str2,str3);
	    }	
	}


6、使用arguments
	arguments能获得函数对象传入的参数组，类似与一个数组，
	但是它不能使用forEach等方法

	输入例子:
	useArguments(1, 2, 3, 4)，想加

	输出例子:
	10

	1）一般方法
	 function useArguments() {
	    var sum = 0;
	   for(var i = 0; i < arguments.length; i++){
	      sum += arguments[i];
	  	}
	    return sum;
	}

	2）用eval
	function useArguments() {
		return eval([].slice.call(arguments).join("+"));
	}

	3)用reduce方法
	对数组中的所有元素调用指定的回调函数。 该回调函数的返回值为累积结果，
	并且此返回值在下一次调用该回调函数时作为参数提供。
	function useArguments() {
	    return Array.prototype.reduce.call(arguments,function(a,b){
	        return a + b;
	    });
	}

7、函数 callIt，调用之后满足如下条件
	1）、返回的结果为调用 fn 之后的结果
	2）、fn 的调用参数为 callIt 的第一个参数之后的全部参数 

	1、使用slice将arguments转化为数组后，截取第一个元素之后的所有元素
	function callIt(fn) 
    	return fn.apply(this,[].slice.call(arguments,1)) ;
	} 
或者
	function callIt(fn) {
	    //将arguments转化为数组后，截取第一个元素之后的所有元素
	    var args = Array.prototype.slice.call(arguments,1);
	    //调用fn
	    var result = fn.apply(null,args);
	    return result;
	}

8、找出对象 obj 不在原型链上的属性，用hasOwnProperty()方法
	找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
	1）、返回数组，格式为 key: value
	2）、结果数组不要求顺序 
输入例子:
	var C = function() {
		this.foo = 'bar'; 
		this.baz = 'bim';
	}; 
	C.prototype.bop = 'bip'; 
	iterate(new C());

输出例子:
	["foo: bar", "baz: bim"]
函数
	 function iterate(obj) {
	    var result = [];
	    for(var item in obj){
	        obj.hasOwnProperty(item) ? result.push(item + ': ' + obj[item]):0;
	    }
	    return result;
	}
