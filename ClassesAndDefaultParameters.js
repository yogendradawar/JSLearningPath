// #9

//Class

    // class is like a box . where we get only two things , properties and functionality

    // class Human{
    //     properties

    //     age ; //public
    //     #wt = 59;   //private
    //     ht = 5.3;

    //     constructor(newAge, newHeight, newWeight){
    //         this.age = newAge;
    //         this.ht = newHeight;
    //         this.#wt = newWeight;
    //     }

    //     behaviour

    //     #walking(){      //private;
    //         console.log("I am walking" , this.#wt); // this.use for that class variable accessing
    //     }

    //     running(){
    //         console.log("I am running");
    //     }
        
    //      Getter Function  semantics clarity, incapsulation , data proctection 

    //     get fetchWeight(){
    //         return this.#wt;
    //     }

    //      Setter Function
    
    //     set modifyWeight(val){
    //         this.#wt = val;
    //     }

    // }

    // let obj = new Human(20,5.2,50);
    // console.log(obj.ht);
    // console.log(obj.age);
    // console.log(obj.fetchWeight);
    // obj.walking();


//Default Parameters 

     //allow to use of function with default values;

    //Default Parameter

        // function sayName(myName = "priy"){ //Default parameter of myname
        //     console.log("My name i :" , myName);
        // }
        // sayName();



    //Default Parameter Use

        // function sayName(fName = "era" , lName = "vestila"){
        //     console.log("My Name is: ",fName ," ", lName);
        // }
        // sayName('weaeaw');

    
    //Default Use Case Of First Value
        
        // function sayName(fName = "neil" , lName = fName.toUpperCase()){
        //     console.log("My Name is: ",fName ," ", lName);
        // }
        // sayName("Dev");

    // Default Parameter Objects Passed

        // function solve (value = {age:23, wt :24, ht : 4 }){
        //     console.log("Hello JII ", value);
        // }
        // solve();

    // Default Arrays passed

        // function solve (value = ["Hera","Veera","Shera"]){
        //     console.log("Hello JII ", value);
        // }
        // solve();


    // NUll and Undefined

        // function solve (value = "Hera"){
        //     console.log("Hello JII ", value);
        // }
        // solve(undefined); // if null is send then it will print null SECONDLY , in undefined it will send the default if given;


//FUNCTION IN PARAMETERS

        // function getAge(){
        //     return 365;
        // }

        // function utility(name = "Pyaar" , age = getAge()){
        //     console.log(name , "" , age);
        // }

        // utility();

    
    


    
    

