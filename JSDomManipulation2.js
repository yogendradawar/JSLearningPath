// #14

    // Changing CSs --> external , inline , internal

    // .style --> get,set

        // In these case only applied on one style 

        let paraElement = document.getElementById('spara');
        console.log(paraElement.style);              //get
        
        paraElement.style.backgroundColor = 'blue';  //set
        paraElement.style.color = 'white';

        // One more property is there to access multiple CSS  ----> .style.cssText

        let secondElement = document.getElementById('sdiv');
        secondElement.style.cssText;                //get
        secondElement.style.cssText = "background-color: black ; color : white ; padding : 0.5rem";


        // adding the class , id , style  .setAttribut();

        let firstElement = document.querySelector('#fdiv');
        firstElement  // checking the class, id , style is present or not if it is there it will overwrite the exciting element
        firstElement.setAttribute('class','secondDivClass');
        firstElement.setAttribute('style',"padding : 0.1 rem")  // if it is exiting the it will replace it to current style

        // Class Name get ---> .className

        let fpara = $0;
        fpara  //get
        fpara.className = "Gohan Goku" //set the class

        // .classList --> get,add,remove,toogle,contains

            let fpara = document.querySelector('#fpara');
            fpara.classList   //get in array format 
            fpara.classList.add('thirdClass');  //add new class
            fpara.classList.remove('firstClass') //remove class
            fpara.classList.toggle('secondClass') // add or remove
            fpara.classList.contains('firstClass') //check the Class
            


