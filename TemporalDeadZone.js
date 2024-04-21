// #8

// Variable Scoping

    //-> Global
    //-> Function
    //-> Block


    // var / let / const

// Global Scope
    
    // var age = 15;

    // console.log(age);

    // {
    //     console.log(age);
    // }

    // if(true){
    //     console.log(age);
    // }

    // for(let i = 0 ; i < 2 ; i++){
    //     console.log(age);
    // }

    // function sayHello(){
    //     console.log("hello",age);
    // }

    // sayHello();


// Function Scope

    // function sayHello(){
    //     var fullName = "Earth";
    //     console.log("Hello Duniya", name);
    // }

    // console.log(fullName);
    // sayHello();


// Block Scope

    // {
    //     var height = 180;
    // }

    // console.log(height);


// ------------------------------------------------------~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Temproal Dead Zone

    // console.log(marks);                          ! //Temproal Dead Zone(From line 62 to 65)
    // console.log("Can i excess these");           !
    // console.log("Pyarr");                        !
    // const marks = 100;
    // console.log(marks);

