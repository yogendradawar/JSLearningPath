// #12

// What  is an Error 

    //Error is just a event which impact or distrub the normal flow of execution

        // Type of Error 

            // 1.Compiled time Error 
            
                //compile time error can be called during parsing of the js code before the execution of the program

                //syntax error
                // console.log(sd;

            // 2.Run time Error 

                //While the code is exectiing

                //Reference error
                // console.log(x);

// Error Handling

    // try - catch - finally block

        // try {
        //     console.log("Try block starts here")
        //     console.log(x);
        //     console.log("try block ends here");

        //     //a

        //     //b

        //     //c
        // }
        // catch(err){

        //     //define krte h, error k sath aap kya krna chahte h
        //     //retry logic
        //     //fallback mechanisum
        //     //logging
        //     //custom error
        //     console.log("I am inside catch block")
        //     console.log("your error is here: ", err);
        // }

        // finally{
        //     console.log("I will run everytime");
        // }


// lets create custom errors

    // create Your own customs Errors

        // try{
        //     //Reference Error
        //     console.log(x);
        // }
        // catch(err){
        //     throw new Error("Bhai pehle declar karo, fer print karna");
        // }

        // let errorCode = 100;
        // if(errorCode == 100){
        //     throw new Error("Invalid JSON");
        // }