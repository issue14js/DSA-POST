// Bubble Sort
// Description
// You are given an array of integers. Your task is to sort the elements of the array in ascending order using the Bubble Sort algorithm.

function bubbleSort(arr) {
    // Write your logic here
    let n = arr.length
    for(let i =0;i<n;i++){
        for(let j = i+1;j<n;j++){
            if(arr[i]>arr[j]){
                let temp = arr[j]
                arr[j]=arr[i]
                arr[i]=temp
            }
        }
    }
    return arr
    
    
}

module.exports = { bubbleSort };