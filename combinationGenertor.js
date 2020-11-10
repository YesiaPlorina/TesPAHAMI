"use strict"

let Kategory = {
    Hewan: ["anjing", "kucing", "burung", "ular", "ikan"],
    Buah: ["apel", "jeruk", "anggur", "semangka", "nanas", "pepaya", "pisang"],
    Warna: ["hitam", "putih", "merah", "biru", "kuning", "hijau"]
}

function getData(input){
    let result = []
    let countHewan = 0
    let countBuah = 0
    let countWarna = 0
    for(let j = 0; j < input.length; j++){
        if(input[j] === "Hewan"){
            countHewan ++
        }
        if(input[j] === "Buah"){
            countBuah ++
        }
        if(input[j] === "Warna"){
            countWarna ++
        }
    }

    if(countHewan > Kategory.Hewan.length){
        return "Invalid Input"
    }else if(countBuah > Kategory.Buah.length){
        return "Invalid Input"
    }else if(countWarna > Kategory.Warna.length){
        return "Invalid Input"
    }else{
        for(let i = 0; i < input.length; i++){
            if(input[i] === "Hewan"){
                let nilaiRan = Math.floor(Math.random()* Kategory.Hewan.length)
                result.push(Kategory.Hewan[nilaiRan])
                Kategory.Hewan.splice(nilaiRan,1)
            }else if(input[i] === "Buah"){
                let nilaiRan = Math.floor(Math.random()* Kategory.Buah.length)
                result.push(Kategory.Buah[nilaiRan])
                Kategory.Buah.splice(nilaiRan,1)
            }else if(input[i] === "Warna"){
                let nilaiRan = Math.floor(Math.random()* Kategory.Warna.length)
                result.push(Kategory.Warna[nilaiRan])
                Kategory.Warna.splice(nilaiRan, 1)
            }
        }
        return result
    }

   
}

// console.log(getData(["Hewan", "Buah", "Warna"]))
// console.log(getData(["Hewan", "Buah", "Warna", "Hewan"]))
// console.log(getData(["Hewan", "Hewan", "Hewan", "Hewan", "Hewan"]))
console.log(getData(["Hewan", "Hewan", "Hewan", "Hewan", "Hewan", "Hewan", "Hewan"]))

