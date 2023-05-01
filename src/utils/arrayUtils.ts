/*
Task 1: Write a function that takes an array as a parameter that may contain one or more other
arrays and returns the sum of all numbers in all inner arrays. Inner arrays can also contain other
arrays.
*/



export function sumNestedArrays(arr: any[]): number {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += sumNestedArrays(arr[i])
    } else {
      sum += arr[i]
    }
  }
  return sum
}




/*
  Task 2: Write a function that takes two parameters 1. an array 2. subarray size and returns a
new array containing subarrays of the original size. If the array is empty or the subarray size is
not a positive integer, an empty array should be returned.
  */




export function chunkArray(arr: any[], size: number): any[] {
  if (size <= 0 || !Array.isArray(arr)) {
    return []
  }
  let result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
