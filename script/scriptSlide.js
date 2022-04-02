    let text1 = document.querySelector('#text1')
    let text2 = document.querySelector('#text2')
    let text3 = document.querySelector('#text3')
    let text4 = document.querySelector('#text4')
    let text5 = document.querySelector('#text5')

    document.querySelector('#slide1').addEventListener('click', function(){
        text1.style.display = 'block'
        text2.style.display = 'none'
        text3.style.display = 'none'
        text4.style.display = 'none'
        text5.style.display = 'none'
    })

    document.querySelector('#slide2').addEventListener('click', function(){
        text1.style.display = 'none'
        text2.style.display = 'block'
        text3.style.display = 'none'
        text4.style.display = 'none'
        text5.style.display = 'none'
    })

    document.querySelector('#slide3').addEventListener('click', function(){
        text1.style.display = 'none'
        text2.style.display = 'none'
        text3.style.display = 'block'
        text4.style.display = 'none'
        text5.style.display = 'none'
    })
    
    document.querySelector('#slide4').addEventListener('click', function(){
        text1.style.display = 'none'
        text2.style.display = 'none'
        text3.style.display = 'none'
        text4.style.display = 'block'
        text5.style.display = 'none'
    })
    
    document.querySelector('#slide5').addEventListener('click', function(){
        text1.style.display = 'none'
        text2.style.display = 'none'
        text3.style.display = 'none'
        text4.style.display = 'none'
        text5.style.display = 'block'
    })