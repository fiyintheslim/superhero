import gsap from "gsap"
import { MutableRefObject } from "react"

export const searchBarShow = (el:HTMLDivElement)=>{
    gsap.to(el, {
        x:0,
        ease:"elastic.out(1, 0.4)"
    })
}