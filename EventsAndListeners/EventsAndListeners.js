// #15

    // Brower Events - 
        // --> event       
        // --> respond     
        // --> data stored
        // --> stop
        // --> lifecycle


    // Event  => click,doubleclick,scroll,keypress,mouseenter .. all that   
    
        // to see the event we use monitorEvents(document) to not to see we use unmonitorEvents(document)

        // Event-Target 

            // event -> 'click' , playButton -> 'event target' , video run/play -> Action/behaviour -> event-listener

            // Elements -> addEventListener() , removeEventListener().

            // syntax -> <event-target>.addEventListener(<event-type>,<function->action>).

            // function changeText(){
            //     let fpara = document.getElementById('fpara');
            //     fpara.textContent = "Yogendra"
            // }


            // let fpara = document.getElementById('fpara');

            // fpara.addEventListener('click' , changeText);
            // fpara.removeEventListener('click' , changeText);

        
        // Phase of Event

            // 1.Capturing phase ---> travel to the target 
            // 2. At-target      ---> At the target
            // 3. Bubbling Phase ---> back travel to root  
            
            //addEventListener --> by default --> Bubbling phase
            //capture phase    --> true 


        // default action

            // let anchorElement = document.getElementById('fanchor');

            // anchorElement.addEventListener('click', (event) => {
            //     event.preventDefault();
            //     anchorElement.textContent = "click done";
            //     console.log("running");
            // })


        // Avoiding to many listeners

        // let paras = document.querySelectorAll('p');

        function alertPara(event){
           if(event.target.nodeName === 'SPAN'){
            alert("you have clicked on para: " + event.target.textContent);
           }
        }

        // for(let i = 0 ; i < paras.length ; i++){
        //     let para= paras[i];
        //     para.addEventListener('click', alertPara);
        // }

        let mtdiv = document.getElementById('wrapper');

        document.addEventListener('click',alertPara);