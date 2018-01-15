// import common from '../../_common/js/Simple'
// common()

TweenLite.defaultEase = Power2.easeInOut

function start(){
    const tl = new TimelineMax()
    tl.set('.frame1', {opacity:1})
    tl.from('.line.left', .7, {clip:`rect(0px,0px,133px,0px)`, ease:Power2.easeOut})
    tl.from('.t1', .3, {opacity:0})
    tl.to('.t1', .3, {opacity:0}, '+=3')

    tl.from('.t2', .3, {opacity:0})
    tl.to('.t2', .3, {opacity:0}, '+=2')
    if(document.querySelector('.t3')){       
        tl.from('.t3', .3, {opacity:0})
        tl.to('.t3', .3, {opacity:0}, '+=2')
    }

    tl.to('.line', .3, {opacity:0})

    // tl.to(['.t3'], .3, {opacity:0})
    tl.set('.frame2', {opacity:1})
    tl.from(['.cta'], .3, {opacity:0}, '+=.2')
    tl.from(['.arrow'], .3, {opacity:0}, '+=.2')


    
}

export default start