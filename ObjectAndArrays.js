// #6

// Reference type 

    // --Object
    // --Array ----> push,pop,shift,unshift,slice,splice,map,filter,reduce,sort,indexof,find
        // ForEach , ForIn , ForOf 
    // --Function 

    // stack --- Primitive data type -- reference create 
    // heap -- actual data is stored all non-primitive data stype stored


// Object 

    // collection of key , value pair 
    
    // let obj = {
    //     // "name" : "Yogi",
    //     // "full name" : "Yogendra Dawar",     *********************
    //     name : "yogi",
    //     age : 21,
    //     weight : 43,
    //     height : "5ft 9in",
    
    //     great: function (){
    //         console.log ("Hello how are you");
    //     }
    // };


    // =====================================================================

    // SHALLOW ----- > A shallow copy creates a new array, but it does not create new copies of the elements within the array. Instead, it points to the same elements as the original array. 
    
    // DEEP COPY -----> A deep copy, on the other hand, creates a completely independent copy of both the array and its data. It does not share any data with the original array

    // =====================================================================



//ARRAY

    // Collection of  items/elements 

    // Creation of Arrays

    // let arr = [1,3,4,5,6];          //Object
    // console.log(arr);

    // Array Constructor                          //Object
    // let brr = new Array('Pyaar',1,true);
    
    
    //Build in methods in Arrays

        // push,pop,shift,unshift,slice,splice,map,filter,reduce,sort,indexof,find
        
            // brr.push('hero'); --->Insert in last
            // brr.pop();           ---> Delete from last
            
            // brr.shift()        ---> Inset at first
            // brr.unshift('hera') -----> Delete from first

            // console.log(brr.slice(2,4)) ----> Include 2 , 3 

            // brr.splice(1,0, 'menna')    ----> content change, insert ,  change , remove 

                // const months = ['Jan', 'March', 'April', 'June'];
                // months.splice(1, 0, 'Feb');
                // // Inserts at index 1
                // console.log(months);
                // // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
                
                // months.splice(4, 1, 'May');
                // // Replaces 1 element at index 4
                // console.log(months);
                // // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
        

                //MAP

                    // let arr = [10,20,30]
                    // let ans = arr.map(function(number){
                    //     return number*number;
                    // })

                    // console.log(ans);


                //Filter

                    // True Ya False 

                    // let array = [1, 2,'pyaar','veer',null];

                    // let ans3 = array.filter((value)=>{
                    //     if(typeof(value) == 'number'){
                    //         return true;
                    //     }
                    //     else{
                    //         return false;
                    //     }
                    // });

                    // console.log(ans3);


                // Reduce

                    // set of value mai se ek single value lana chahte tb reduce use krte 
                    // acc -- accumulator
                    // curr -- current 
                    
                    
                    // let arr1 = [10,20,30,40];
                    
                    // let sum = arr1.reduce((acc,curr) =>{
                    //     return acc + curr;
                    // },0);
                        
                        //OUTPUT --- 100
                        
                        
                //Sort
                        
                    // let arr1 = [2,1,5,3];
                    // arr1.sort();
                    
                    // console.log(arr1);

                // REVERSE 

                    // arr1.sort().reverse();


                // IndexOf

                    // console.log(arr1.indexOf(2));

                // Find ???????????????????


                //For Each
                
                    // let arr1 = [2,4,5,6];
                
                    // arr1.forEach((value,index) => {
                    //     console.log(index,value);
                    // });
                
                //For In

                    // let obj = {
                    //     name : "yogi",
                    //     age : 21,
                    //     weight : 43,
                    //     height : "5ft 9in",
                    
                    //     great: function (){
                    //         console.log ("Hello how are you");
                    //     }
                    // };

                    // for(let key in obj) {
                    // console.log(key , " ",obj[key]) ;
                    // }

                // For of 

                    // let arrNum = [10,304,4,0];

                    // for(let val of arrNum){
                    //     console.log(val);
                    // }

                    // output - 
                            // 10
                            // 304
                            // 4
                            // 0


                    // let fullName = "yogi";
                    // for(let val of fullName){
                    //     console.log(val)
                    // }

                    // OUTPUT - 
                        // y 
                        // o
                        // g
                        // i 


//Arrays with Functions

    // let arr1 = [23,43,56,78,34,46];

    // let getSum = (arr1) =>{
    //     let len = arr1.length;
    //     let sum = 0;
    //     // for(let index = 0; index < len ; index++){
    //     //     sum = sum + arr[index];
    //     // }

    //     array.forEach(Value => {
    //         sum = sum + Value;
    //     });
    //     return sum ;
    // }

    // let totalSum = getSum(arr1);
    // console.log(totalSum);