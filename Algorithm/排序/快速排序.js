/*
 * @Author: QiuShui
 * @Date: 2022-04-01 10:34:43
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-05 17:25:52
 * @FilePath: /Algorithm & DataStructure/Algorithm/排序/快速排序.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import { defaultCompare, Compare, swap } from "../../utils/utils.js"

function quickSort(arr, compareFn = defaultCompare) {
  return quick(arr, 0, arr.length - 1, compareFn)
}

function quick(arr, left, right, compareFn) {
  let index
  // 递归终止条件
  if (arr.length > 1) {
    // 数组大小排序
    index = partition(arr, left, right, compareFn)
    // index左边的递归排序
    if (left < index - 1) {

      quick(arr, left, index - 1, compareFn)
    }
    // index右边的递归排序
    if (index < right) {
      quick(arr, index, right, compareFn)
    }
  }
  return arr
}

// 排序
function partition(arr, left, right, compareFn) {
  const middle = arr[Math.floor((left + right) / 2)]
  let l = left
  let r = right
  while (l <= r) {
    // 左侧的值小于中间值则j++，继续查找，直到找到左侧值大于中间值的
    while (compareFn(arr[l], middle) === Compare.LESS_THAN) {
      l++
    }
    // 右侧的值大于中间的值则r--，继续查找，直到找到右侧值大于中间值的
    while (compareFn(arr[r], middle) === Compare.BIGGER_THAN) {
      r--
    }
    if (l <= r) {
      swap(arr, l, r)
      l++
      r--
    }
  }
  return l
}

console.log(quickSort([3, 5, 1, 6, 4, 7, 2], defaultCompare))

export default quickSort