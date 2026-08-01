// 1. Insertion Sort

// Problem Statement:
// You are given an array of integers. Your task is to sort the elements of the array in ascending order using the Insertion Sort algorithm.

// Input:

// An integer N representing the number of elements.
// An array of N integers.
// Output:

// Print the sorted array in ascending order.


function insertionSort(arr) {
    // Write your logic here
    let n = arr.length

    for(let i =0;i<n-1;i++){
    let short = i 
        for(let j =i+1;j<n;j++){
            if(arr[short]>arr[j]){
                short=j
            }
        }
      if(short !== i){
         let temp = arr[short]
         arr[short]=arr[i]
         arr[i]=temp
      }
    }
    return arr
}
module.exports = { insertionSort };




// 2. Selection Sort

// Problem Statement:
// You are given an array of integers. Your task is to sort the elements of the array in ascending order using the Selection Sort algorithm.

// Input:

// An integer N representing the number of elements.
// An array of N integers.
// Output:

// Print the sorted array in ascending order.

function insertionSort(arr) {
    // Write your logic here
    let n = arr.length

    for(let i =0;i<n-1;i++){
    let short = i 
        for(let j =i+1;j<n;j++){
            if(arr[short]>arr[j]){
                short=j
            }
        }
      if(short !== i){
         let temp = arr[short]
         arr[short]=arr[i]
         arr[i]=temp
      }
    }
    return arr
}
module.exports = { insertionSort };