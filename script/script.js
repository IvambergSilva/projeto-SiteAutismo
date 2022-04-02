function openNav(){
    let menuList = document.querySelector("#myMenu")
    let menuOpen = document.querySelector('.btnOpen')
    let menuClose = document.querySelector('.btnClose')

    menuList.style.width = '40%'

    menuOpen.style.display = "none"
    menuClose.style.display = "block"
    menuClose.classList.add('fadeAnimation')
}

function closeNav(){
    let menuList = document.querySelector("#myMenu")
    let menuOpen = document.querySelector('.btnOpen')
    let menuClose = document.querySelector('.btnClose')

    menuList.style.width = '0%'

    menuOpen.style.display = "block"
    menuOpen.classList.add('fadeAnimation')
    menuClose.style.display = "none"
}

function close(){
    document.querySelector("#myMenu").style.width = '0%'
}

//Modo Dark

const chk = document.querySelector ("#checkbox")

chk.addEventListener('change', function () {

    document.querySelector('.seloCS').classList.toggle('bNone')

    document.querySelector('.seloBR').classList.toggle('bBlock')

    document.querySelector('.header').classList.toggle('dark')

    document.querySelector('.frase').classList.toggle('dark')

    document.querySelector('.firstBlock').classList.toggle('dark')

    document.querySelector('.secondBlock').classList.toggle('dark')

    document.querySelector('.thirdBlock').classList.toggle('dark')

    document.querySelector('.imagemLateral').classList.toggle('dark')

    document.querySelector('.fourthBlock').classList.toggle('dark')

    document.querySelector('.headFotos').classList.toggle('dark')

    document.querySelector('.legendaDasFotos').classList.toggle('dark')

    document.querySelector('.footer').classList.toggle('dark')

    document.body.classList.toggle('dark')
})

