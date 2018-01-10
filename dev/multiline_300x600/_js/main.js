
TweenLite.defaultEase = Power2.easeInOut


function start(){
    const lineWidth = 154
    const lineHeight = 137
    const tl = new TimelineMax()
    tl.set('.frame1', {opacity:1})
    

    tl.add('lines', '+=.0')
    tl.from('.line.right', .6, {opacity:0, x:`+=${lineWidth}`, y:`+=${lineHeight}`}, 'lines')
    tl.from('.line.left', .6, {opacity:0, x:`-=${lineWidth}`, y:`-=${lineHeight}`}, 'lines')

    
    tl.from('.house', .6, {opacity:0, scale:0, ease:Back.easeInOut}, 'lines+=.5')
    tl.from('.car', .6, {opacity:0, scale:0, ease:Back.easeInOut}, 'lines+=.8')
    tl.from('.car', .6, {x:'-=30'})


    tl.add('f2', '+=2.5')
    tl.to('.t1', .3, {opacity:0}, 'f2')
    tl.to('.line.right', .6, {opacity:0, x:`+=${lineWidth}`, y:`+=${lineHeight}`}, 'f2')
    tl.to('.line.left', .6, {opacity:0, x:`-=${lineWidth}`, y:`-=${lineHeight}`}, 'f2')


    tl.set('.frame2', {opacity:1})
    tl.from('.t2', .3, {opacity:0})
    tl.from('.cta', .3, {opacity:0}, '+=.3')
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