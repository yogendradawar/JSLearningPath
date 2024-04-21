// #11

    // Famous interview question Show the object Cloning

        // Dynamic Nature --------> of object 

        // --> Why we call Object Dynamic ??
            // ---> Because on runtime we can change the properties of object 


            // let obj = {
            //     age : 23,
            //     wt : 56,
            //     ht : 5.4,
            // };

            // console.log(obj);

            // obj.color = "white";

            // console.log(obj);


//Object Cloning 
        

        // There are 3 Methods. 


        // 1. Spread Operator  ... 
            
            // let src = {
            //     age:13,
            //     wt : 45,
            //     ht : 4.4,
            // };

            // let dest = {...src};  // spread operator cloning

            // src.age = 80;

            // console.log("src: ",src);
            // console.log("dest: ",dest);


        // 2. Assign      Object.assign({}, cloneName);

            // let src = {
            //     age:13,
            //     wt : 45,
            //     ht : 4.4,
            // };

            // let dest = Object.assign({} , src); //Assign clone

            // src.age = 4;

            // console.log("src: ",src);
            // console.log("dest: ",dest);

        
        //3. Iteration 

            // let src = {
            //     age:13,
            //     wt : 45,
            //     ht : 4.4,
            // };

            // let dest = {};

            // // Cloning using iteration 

            // for(let key in src){
            //     let newKey = key;
            //     let newValue = src[key];
                
            //     //insert newKey and value in dest and create a clone

            //     dest[newKey] = newValue;
            // }

            // src.age = 44;

            // console.log("src: ",src);
            // console.log("dest: ",dest);


//Garbage Collector --->

        // JavaScript -- > GC 

        // GC is a such memory mangement tools which primary focus is that such memory which are not in use it free that memory improve the performance and secure the memory leaks

        //The user has no control on GC. It always run in the background;