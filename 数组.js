
数组方法：

1、删除数组元素：
	1）delete arr[i]  : 删除数组长度不变，arr[i]变为undefined
	2）arr.splice(i,1) : 删除之后数组长度变，索引变


2、向数组添加元素
	1）普通方法遍历数组
		function append(arr, item) {
		    var rarr = [];
		    for(i=0;i<arr.length;i++){
		        rarr.push(arr[i]);
		    }
		    rarr.push(item);
		    return rarr;
		}
	2）直接调用concat
		 function append(arr,item[,...]){
	      return arr.concat([item,[...]]);
	    }

	3) 用slice复制数组
		function append(arr,item){
		     //复制数组
		     //slice() 方法可从已有的数组中返回选定的元素。
		     //arrayObject.slice(start,end)索引开始和结尾。
		     var a = arr.slice(0);
		     //添加元素
		     a.push(item);
		     return a;
		  }

3、复制数组
		1）直接赋值，两个数组会操作同一个数组对象
			var newArr = new Array();
      		newArr = arr;

4、添加元素
		1）插入元素到开头
			function truncate(arr,item) {
		        var result;
		        result = arr.slice(0);
		        //1.unshift方法直接插入开头，可以插入多个
		      	result.unshift(item);
		      	//2.splice(index,num,content),索引，删除原数组个数，插入内容
		   	    //result.splice(0,0,item);
		        return result;   
	    	}

5、数组中相同元素有多少个
		1）for循环遍历
			function count(arr, item) {
			    var num = 0;
			    for(var i=0;i<arr.length;i++){
			        if(arr[i] == item){
			            num++;
			        }
			    }
  			  return num;
			}

		2）用forEach来实现
			 function count(arr, item) {
	            var count = 0;
	            arr.forEach(function(num){  //num是数组的中的数
	                num == item ? count++ : 0;
	            });
	            return count;
        	 }

6、提取数组中重复的元素
		1）将传入的数组arr中的每一个数组元素作为另外一个新数组b的索引，
			·遍历arr时，判断b[num]是否存在，不存在赋值为1，存在就加1；
			·遍历b,数组值>1的就是重复的，提取索引值。
		function duplicates(arr) {
	        var str = [],result = [];
	        arr.forEach(function(num){
	            !str[num] ? str[num] = 1 : str[num]++;
	        });;
	        for(var i=0;i<str.length;i++){
	            str[i] > 1 ? result.push(i) :0;
	        }
	        return result;
  		  }

  		 2）先排序，然后比较前后是否重复
  		 function duplicates(arr) {
	        arr.sort();
	         var result = [];
	         for(var i=0;i<arr.length;i++){
	         	//判断重复和略过左右都重复的
	            if(arr[i] == arr[i+1]&&arr[i] != arr[i-1]){
	                result.push(arr[i]);
	            }
	         }
	        return result;
   		 }


7、获取数组中和item值相同的元素的索引
		1）用forEach方法
		 function findAllOccurrences(arr, target) {
	         var b=[];
	          arr.forEach(function (item,index){
	                item == target ? b.push(index) :0;
	            });
	         return b;    
   		 }
   		2）for循环遍历

8、返回一个对象方法
	return {
		obj:function(){
			...
		}
	}

