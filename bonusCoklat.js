"use strict"

function coklat(nilai){
    let pembagi = nilai/5
    let hasil = nilai + pembagi
    if(pembagi >= 5){
        let tambahanCoklat = pembagi/5
        return Math.floor(hasil + tambahanCoklat)
    }
    return hasil
}

console.log(coklat(100))