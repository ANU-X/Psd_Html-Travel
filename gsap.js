gsap.from('.navLink li', {
    y: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})

gsap.from('.hero-text', {
    y: 200,
    duration: 2,
    scrollTrigger: {
        trigger: '.hero-text',
        start: 'top bottom',
        end: 'top top',
        toggleActions: 'play reverse play reverse',
    }
})

// ---------------------------
gsap.from('#event_gsap', {
    x: -500,
    duration: 1,
    scrollTrigger: {
        trigger: '#simple',
        start: 'top 70%',
        end: 'top -80%',
        toggleActions: 'play reverse play reverse',
    }
})

gsap.from('#upcomin_gsap', {
    x: 500,
    duration: 1,
    scrollTrigger: {
        trigger: '#simple',
        start: 'top 70%',
        end: 'top -80%',
        toggleActions: 'play reverse play reverse'
    }
})

// ---------------------------------

gsap.from('#dis_gsap_one',{
    y: -300,
    duration: 1,
    scrollTrigger:{
        trigger: '.col-two',
        start: 'top 80%',
        end: 'top -40%',
        toggleActions: 'play reverse play reverse',

    }    
})

gsap.from('#dis_gsap_two',{
    x: 300,
    duration: 1,
    scrollTrigger:{
        trigger: '.col-two',
        start: 'top 80%',
        end: 'top -40%',
        toggleActions: 'play reverse play reverse',
    }    
   
})

gsap.from('#dis_gsap_thre',{
    y: 300,
    duration: 1,
    scrollTrigger:{
        trigger: '.col-two',
        start: 'top 80%',
        end: 'top -40%',
        toggleActions: 'play reverse play reverse',
    }    
})

gsap.from('#dis_gsap_four',{
    x: 300,
    duration: 1,
    scrollTrigger:{
        trigger: '.col-two',
        start: 'top 80%',
        end: 'top -40%',
        toggleActions: 'play reverse play reverse',
    }    
})
