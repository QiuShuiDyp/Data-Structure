/*
 * @Author: QiuShui
 * @Date: 2022-03-31 17:20:45
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-31 17:41:26
 * @FilePath: /Algorithm & DataStructure/Algorithm/排序/选择排序.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import { defaultCompare, Compare, swap } from "../../utils/utils.js"
function selectionSort(arr, compareFn = defaultCompare) {
  const length = arr.length
  for (let i = 0; i < length - 1; i++) {
    // 注意minIndex的是从i的位置开始
    let minIndex = i
    for (let j = i + 1; j < length; j++) {
      if (compareFn(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex)
    }
  }
  return arr
}

console.log(selectionSort([5,4,3,2,1]))

// function selectionSort(arr, compareFn = defaultCompare) {
//   const length = arr.length
//   for (let i = 0; i < length; i++) {

//   }
//   return arr
// }
