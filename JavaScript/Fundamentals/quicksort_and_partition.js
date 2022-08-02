
const swap = (arr, i, j)=>{
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const partition = (arr, left, right) =>{
    var i = left 
    var j = right
    var part = Math.floor((left+right)/2)

    while (i != j){

        while (arr[i] < arr[part] && i < part){
            i++
        }
        while (arr[j] > arr[part] && j > part){
            j--
        }
        swap(arr, i, j)
        //Swap the partition index if the partition is moved ## This is why it was broken
        if (i == part || j == part){
            if (i != part){
                part = i
            }
            else if (j != part){
                part = j
            }
        }
    }
    
    i++
    // For some reason returning j did not work but returning i did
    return i

}

function quicksort(arr, left, right){
    left = left || 0
    right = right || arr.length -1

    if (arr.length == 1){
        return
    }

    var split = partition(arr, left, right)
    //console.log(arr)
    if (left < split-1){
        quicksort(arr, left, split-1)
    }
    if (right > split){
        quicksort(arr, split, right)
    }

    return arr
        
    
}

const {performance} = require("perf_hooks")
let start = performance.now()
var x = [1, 14, 4, 2, 7, 6, 8, 16, 20, 9, 3, 12, 15, 0, -5, 10, 30, 11, 13]
quicksort(x)
console.log("X is:", x)
console.log(`It took ${performance.now() - start} milliseconds`)

