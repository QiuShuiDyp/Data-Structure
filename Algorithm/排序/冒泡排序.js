/*
 * @Author: QiuShui
 * @Date: 2022-03-31 16:25:01
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-31 17:15:29
 * @FilePath: /Algorithm & DataStructure/Algorithm/排序/冒泡排序.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
// 冒泡排序,假设数组长度为n，时间复杂度为：n*(n-1)
import { defaultCompare, Compare, swap } from "../../utils/utils.js"
function bubbleSort(arr, compareFn = defaultCompare) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // 临近两项进行判断，如果arr[j] < arr[j+1]
      if (compareFn(arr[j], arr[j + 1]) === Compare.LESS_THAN) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

function bubbleSortV2(arr, compareFn = defaultCompare) {
  const length = arr.length
  let count = 0
  for (let i = 0; i < length - 1; i++) {
    // 已经有i个数是都已经遍历过了的，因此后面的length - 1 - i后面的就不用比较了
    for (let j = 0; j < length - 1 - i; j++) {
      // 临近两项进行判断，如果arr[j] < arr[j+1]
      if (compareFn(arr[j], arr[j + 1]) === Compare.LESS_THAN) {
        count++
        swap(arr, j, j + 1)
      }
    }
  }
  console.log(count)
  return arr
}

console.log(bubbleSortV2([1, 0, 0, 0, 0, 1]))
