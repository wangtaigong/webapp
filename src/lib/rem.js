!function (w) {
    let d = w.document
    let e = d.documentElement
    let s = 320
    let em = 14
    let o="orientationchange"in w ?"orientationchange":"resize",
    a=function(){
        let n = e.clientWidth || s; n>720&&(n=720)
        e.style.fontSize= (n / s) * em+"px"
    }
    d.addEventListener && (w.addEventListener(o, a,!1), d.addEventListener("DOMContentLoaded", a,!1))
}(window)