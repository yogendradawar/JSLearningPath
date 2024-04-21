// #7


//Function Hosting 
    
    // Function hosting is possible kese ishme puri function declaration upper move karegi jese ki console.log(err()) ke upper function automatically declare ho jayega

    // console.log(err())

    // function(){
    //     return "error";
    // }


// Variable Hosting IS POSSIBLE IN ONE CASE ONLY

    // console.log(age);

    // var age = 25;

    // ishme var ki declaration upper shift ho gyi ushme value nhi huyi vo UNEFINED HAI

    // OR yeh ONLY var mai possible const , let mai nhi hai 


// Using Function Exppression 


    // ish case mai yeh pura error show karega yeh possible nhi hai 

    // !!!!!!!!!!!!! Pr Jb var data type hoga tb ho jayegi but ushme vo UNEFINED bhejega

    // greet();

    // let greet = function(){
    //     console.log("Greeting for the day");
    // }


//Class hosting is not possible

    // Class is a Blue print
        // vo ek high leve entity hai jisme functionalites,properties,methods define krte hai 
            // class ke hi instance ko ush blue print ko execute kr ke ek actual thing banegi ushe OBJECT kehte hai 

            // var obj = new human();
            
            // class human{
        
            // }
            

// Function Call Stack (LIFO)



// Function First Class Citizen

    // ?? 

    // assign to variable , pass the function , return function , use in ds , properties

        //Function in Variable // Function expression

            // let greet = function(){
            //     console.log("Greeting for the day");
            // }

            // greet();
        
        
        //-Function with the parameters

            // function greetMe(greet , name){
            //     console.log("hello" , name);
            //     greet();
            // }
            
            // function greet(){
            //     console.log("Greeting for the day");
            // }
            
            // greetMe(greet,"yogi");
            
            
        // How the Functions Returns the value;

            // function solveNumber(number){
            //     return function(number){
            //         return number * number;
            //     }
            // }
            
            // let ans1 = solveNumber(0);
            
            // let ans2 = ans1(4);
            
            // console.log(ans2);
            
            
        // Function used in DataStructure

            // const arr = [
            //     function(a,b){
            //         return a+b;
            //     },
            //     function(a,b){
            //         return a*b;
            //     },
            //     function(a,b){
            //         return a-b;
            //     }
            // ];
            
            // let fun = arr[1];
            // console.log(fun(2,1));
            
            
        // Function in Objects

            // let obj = {
            //     age : 21,
            //     height : 5,
            //     weight : 40,
            //     greet:()=>{
            //     console.log("Hello")
            //     }
            // };
            
            // console.log(obj.age);
            // obj.greet();
            


        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // console.log(greet);
        // let greet = () => {
        //     console.log("Namaste");
        // }
        // ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
        // console.log(greet);
        // var greet = () => {
        //     console.log("Namaste");
        // }
