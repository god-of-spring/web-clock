"use strict";

setInterval(function() {
    
    let time = new Date();
    
    let h = document.querySelector(".clock__item");
    let m = document.querySelectorAll(".clock__item")[1];
    let s = document.querySelectorAll(".clock__item")[2];
    
    h.textContent = time.getHours();
    m.textContent = time.getMinutes();
    s.textContent = time.getSeconds();
    
    function addZero(elem) {
        if (elem.textContent.length != 2) {
            elem.prepend("0");
        }    
    }
    
    addZero(m);
    addZero(s);
    
}, 1000);