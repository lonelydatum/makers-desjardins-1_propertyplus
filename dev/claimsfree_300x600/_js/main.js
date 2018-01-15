TweenLite.defaultEase = Power2.easeInOut

function start(f2Delay=3){
    const line = {
        dom: document.getElementById('line1')
    }

    line.w = line.dom.offsetWidth
    line.h = line.dom.offsetHeight
        
    const tl = new TimelineMax()
    tl.set('.frame1', {opacity:1})    
    tl.from(['.logo'], .3, {opacity:0})
    
 
    tl.add('lines', '+=.3')    
    tl.from('.line.right', .5, {clip:`rect(0px,${line.w}px,137px,${line.w}px)`, ease:Power2.easeOut}, 'lines')
    tl.from('.house', .3, {opacity:0, ease:Sine.easeInOut}, '-=.2')
    // tl.from('.car', .3, {opacity:0, scale:.6, ease:Sine.easeInOut})
    // tl.from('.car', .6, {x:'-=30'})
    tl.from('.line.left', .5, {clip:`rect(0px,${0}px,137px,${0}px)`, ease:Power2.easeOut}, '-=.1')
    tl.from('.t1', .3, {opacity:0}, '+=0')
    
    
    


    tl.add('f2', `+=${f2Delay}`)
    
    tl.to('.line.right', .4, {clip:`rect(0px,${line.w}px,137px,${line.w}px)`}, 'f2')
    tl.to('.line.left', .4, {clip:`rect(0px,${0}px,137px,${0}px)`}, 'f2')
    tl.to('.t1', .3, {opacity:0}, 'f2+=.2')


    tl.set('.frame2', {opacity:1})
    tl.from('.t2', .3, {opacity:0})
    tl.from('.cta', .3, {opacity:0}, '+=.5')
}


const bannerbtn = document.getElementById('bannerbtn')
const cta = document.getElementById('cta')

bannerbtn.addEventListener('mouseover', ()=>{
    cta.style.backgroundColor = '#009657'
})

bannerbtn.addEventListener('mouseout', ()=>{
    cta.style.backgroundColor = '#383838'
})

start()