/*
 * @Author: QiuShui
 * @Date: 2022-04-05 17:25:00
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-05 21:43:58
 * @FilePath: /Algorithm & DataStructure/Algorithm/搜索/二分搜索.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import { defaultCompare } from "../../utils/utils.js"
import quickSort from "../排序/快速排序.js"
const DOES_NOT_EXIST = -1

function binarySearch(arr, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(arr)
  let low = 0
  let high = arr.length - 1
  while (high >= low) {
    let middle = Math.floor((low + high) / 2)
    if (arr[middle] > value) {
      high = middle - 1
    } else if (arr[middle] < value) {
      low = middle + 1
    } else {
      return middle
    }
  }
  return DOES_NOT_EXIST
}

console.log(binarySearch([5,4,3,2,1],4))