/*
 * @Author: QiuShui
 * @Date: 2022-03-31 17:44:16
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-05 16:56:07
 * @FilePath: /Algorithm & DataStructure/Algorithm/排序/插入排序.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import { defaultCompare, Compare, swap } from "../../utils/utils.js"

function insertionSort(arr, compareFn = defaultCompare) {
  const length = arr.length
  let temp
  for (let i = 0; i < length; i++) {
    let j = i
    temp = arr[i]
    // j之前是已经排好序的内容，比较arr[j]和arr[j-1]的值，如果前者大，那就数组往后挪动一个位置，比较j-1和temp的大小，以此类推
    while (j > 0 && compareFn(arr[j - 1], temp) === Compare.BIGGER_THAN) {
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = temp
  }
  return arr
}

console.log(insertionSort([5,4,3,2,1]))

export default insertionSort