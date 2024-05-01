// #16

//  Performance Improvement 
        // --> measure ?
        // --> efficient / good practice

//CODE 1

    // performance.now()  give u timestamp 

    const t1 = performance.now();

    for(let i = 0 ; i <= 100 ; i++){
        let para = document.createElement('p');
        para.textContent = "This is a Para" + i ;
        document.body.appendChild(para);
    }

    const t2 = performance.now();

    console.log("total time by code 1: " + (t2-t1));


//CODE 2

    const t3 = performance.now();

    let mydiv = document.createElement('div');

    for(let i = 0 ; i <= 100 ; i++){
        let para = document.createElement('p');
        para.textContent = "This is Para" + i;
        mydiv.appendChild(para);
    }

    document.body.appendChild(mydiv);

    const t4 = performance.now();

    console.log("total time by code 2: " + (t4-t3));


// There are two process 

    // REFLOW --> process of calculating position / dimension for particular element to render on page 
    // Slower

    // REPAINT --> process of displaying content / element pixel by pixel 
    // Faster

// BEST PRACTICE

    // A good coder do so

    // DocumentFragment --> light weight doc object it doesn't do any reflow and repaint
    // document.body.append --> will take reflow and repaint


let fragment = document.createDocumentFragment();

for(let i = 0 ; i <= 100 ; i++){
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    // NO reflow and no repaint
    fragment.appendChild(para);
}
    //below line taks 1 reflow and 1 repaint
document.body.appendChild(fragment);