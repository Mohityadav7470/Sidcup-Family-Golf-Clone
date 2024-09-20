var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+25 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
    
})

gsap.to(".nav",{
    backgroundColor: "#000",
    duration: 2,
    height: "100px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -25%",
        scrub: 1,
    }
})

gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -20%",
        end: "top -70%",
        scrub: 2,
    }
})

//----------- FOR ALL CUSOR POINTER ------

function getCursorPointerDomArray()
{
    let ar=[];
    let dom=document;
    function iterateDomNode(dom)
    {
        let c,noIterate=false;
        try{   
            c=getComputedStyle(dom);
            if(c.getPropertyValue('cursor')=='pointer')
            {
                ar.push(dom);         
                noIterate=true;
            }
        }catch(e)
        {

        }
        if(dom.hasChildNodes() && noIterate==false)
        {
            for(let i=0;i<dom.childNodes.length;i++)
            {
                iterateDomNode(dom.childNodes[i]);
            }
        }        
    }   
    iterateDomNode(dom) 
    return ar;
}

let pointerAll = getCursorPointerDomArray();
pointerAll.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      crsr.style.scale = 3;
      crsr.style.border = "1px solid #fff";
      crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
      crsr.style.scale = 1;
      crsr.style.border = "0px solid #95C11E";
      crsr.style.backgroundColor = "#95C11E";
    });
});
  
gsap.from(".about-us img,.about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});


gsap.from("#quate-1",{
    y: -70,
    x: -50,
    scrollTrigger: {
        trigger: "#quate-1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});
gsap.from("#quate-2",{
    y: 70,
    x: 50,
    scrollTrigger: {
        trigger: "#quate-1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

gsap.from(".box-contain h1",{
    y: 50,
    scrollTrigger: {
        trigger: ".box-contain h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 4,
    },
})


let txt1 = document.querySelector("#text");
txt1.addEventListener("mousemove",function(dets){
    txt.style.left = dets.x+25 + "px";
    txt.style.top = dets.y+50 + "px";
})


//------------ Tilt js -----------
VanillaTilt.init(document.querySelector(".cards"), {
    max: 25,
    speed: 400
});
//---------------------


