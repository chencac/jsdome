const carousel = document.querySelector(".carousel")
const slides = carousel.querySelectorAll(".slide")
const track = carousel.querySelector(".slide-track")
const nextBtn = carousel.querySelector(".next-btn")
const prevBtn = carousel.querySelector(".prev-btn")
const navigator = carousel.querySelector(".navigator")
const indicators= navigator.querySelectorAll(".indicator")
let currentIndex = 0

function setpSlides(){
    const w = track.clientWidth

    slides.forEach((slide,i) => {
        slide.style.left = `${i * w}px`
    })
    upNavigatorButtons(currentIndex)
}
function movesSlide(index){
    const w = track.clientWidth
    track.style.transform = `translateX(-${index * w}px)`
    upNavigatorButtons(index)
    uqdateIndicator(index)
}
function  upNavigatorButtons(index){
    if(index === 0){
        prevBtn.classList.add("haid")
        nextBtn.classList.remove("haid")
    }else if(index === slides.length -1){
        prevBtn.classList.remove("haid")
        nextBtn.classList.add("haid")
    }else {
        prevBtn.classList.remove("haid")
        nextBtn.classList.remove("haid")
    }
}
function uqdateIndicator(index){
    indicators.forEach((indicator) => {
        if(Number(indicator.dataset.index) === index){
            indicator.classList.add("active")
        }else{
            indicator.classList.remove("active")
        }
    })
}
nextBtn.addEventListener("click",() => {
    currentIndex++
    movesSlide(currentIndex)
})
prevBtn.addEventListener("click",() => {
    currentIndex--
    movesSlide(currentIndex)
})
navigator.addEventListener("click",(e)=>{
    if(e.target.matches("button")){
        const dot =e.target
        const dotIndex = Number(dot.dataset.index)
        movesSlide(dotIndex)
    }
})
setpSlides()
// export default 不需使用大括號 名稱不用正確 只會擁有一個
// 取用別的有使用 export的函數 import {xxx,xxx,xxxx} from "./位置"  名稱需要正確
//  表示這個可以被調用 export function xxxx(n,m)
// type = "module"
// import {xxx as xxx } from "./位置"加一個as將import 改為另一名字
// cap deploy 
// traefik ssL 
// nginx
// fly.io
// $ cap deploy production
