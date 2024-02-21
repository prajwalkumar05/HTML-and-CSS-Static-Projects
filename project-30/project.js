'use strict';

const header=document.querySelector('.header');
const nav=document.querySelector('.nav')

const sticknav=function(ent,obs){
    const [entry]=ent;
    // console.log(entry)

    if(!entry.isIntersecting)
    {
        nav.classList.add('sticky')
    }
    else{
        nav.classList.remove('sticky')
    }
}

const obs=new IntersectionObserver(sticknav,{
    root:null,
    threshold:0,
})

obs.observe(header)

//animation
const img=document.querySelector('.img')

const animation=function(e,obs){
    const [entry]=e
    // console.log(entry)

    if(entry.isIntersecting){
        img.classList.remove('section--hidden')
    }
}

const aniimg=new IntersectionObserver(animation,{
    root:null,
    threshold:0.45,
})

aniimg.observe(img)

//slider

const servicebox=document.querySelectorAll('.servicebox')

const rigbtn=document.querySelector('.btnright');
const lefbtn=document.querySelector('.btnleft');

servicebox.forEach((s,i)=>(s.style.transform=`translateX(${100 * i}%)`))
let curslide=0;
let maxslide=servicebox.length;

rigbtn.addEventListener('click',function(){
    if(curslide === maxslide - 1){
        curslide=0;
    }
    else{
        curslide++;
    }
    
    servicebox.forEach((s,i)=>(s.style.transform=`translateX(${100 * (i-curslide)}%)`))
})

lefbtn.addEventListener('click',function(){
    if(curslide === 0){
        curslide=maxslide-1;
    }
    else{
        curslide--;
        
    }
    servicebox.forEach((s,i)=>console.log(i-curslide))
    servicebox.forEach((s,i)=>(s.style.transform=`translateX(${100 * (i-curslide)}%)`))
})

