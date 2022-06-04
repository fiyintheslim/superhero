import gsap from "gsap"
import { MutableRefObject } from "react"

export const searchBarShow = (el:HTMLDivElement)=>{
    gsap.to(el, {
        duration: 0.5,
        transform:"translateX(0vh)",
        ease:"elastic.out(1, 0.4)"
    })
}
export const searchBarHide = (el:HTMLDivElement) => {
    gsap.to(el, {
        duration: 0.3,
        transform:"translateX(100vh)",
    })
}