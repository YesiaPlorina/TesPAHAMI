"use strict"

function polaBinatang(arr){
    if(arr[0][0] !== arr.length - 1){
        console.log('invalid Input')
    }else{
        for(let y = 1; y < arr.length; y++){

            if(arr[y][0] === 1){

                let ukuran = arr[y][1]
                for(let i = 0; i < ukuran; i++){
                    let result = ''
                    for(let j = 0; j < ukuran; j++){
                        if(i === 0){
                            result += '*'
                        }else if(i === ukuran - 1){
                            result += '*'
                        }else if(j === ukuran - 1){
                            result += '*'
                        }else if(j === 0){
                            result += '*'
                        }else {
                            result += ' '
                        }
                        
                    }
                   console.log(result)
                }
            }else if(arr[y][0] === 2){
                let ukuran = arr[y][1]

                for(let i = 0; i < ukuran ; i++){
                    let result = "";
                    for(let j = 1; j <= (ukuran - i); j++){
                        if(i == 0){
                            result += '*'
                        }else if(j == 1){
                            result += '*'
                        }else if(j == ukuran - i){
                            result += '*'
                        }else{
                            result += ' '
                        }
                    }
                    console.log(result)
                
                }
            }else if(arr[y][0] === 3){
                let ukuran = arr[y][1]

                for(let i = 0; i < ukuran ; i++){
                    let result = "";
                    for(let j = 1; j <= i; j++){
                      result += ' '
                    }
                    for(let k = 1; k <= ukuran-i; k++){
                        if(i == 0){
                            result += '*'
                        }else if(k == 1){
                            result += '*'
                        }else if(k == ukuran - i){
                            result += '*'
                        }else{
                            result += ' '
                        }
                    }
                    console.log(result)
                
                }
            }
        }
    }
}

polaBinatang([
    [3],
    [3,5],
    [1,5],
    [2,5]
])

