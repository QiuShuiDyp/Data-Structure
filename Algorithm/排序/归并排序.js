/*
 * @Author: QiuShui
 * @Date: 2022-03-31 18:51:01
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-01 09:47:03
 * @FilePath: /Algorithm & DataStructure/Algorithm/排序/归并排序.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import { defaultCompare, Compare, swap } from "../../utils/utils.js"

function mergeSort(arr, compareFn = defaultCompare) {
  // 递归的终止条件
  if (arr.length > 1) {
    const length = arr.length
    // 将数组从中间拆分，递归拆分到仅当数组长度为1的时候就不用排序
    const middle = Math.floor(length / 2)
    const left = mergeSort(arr.slice(0, middle), compareFn)
    const right = mergeSort(arr.slice(middle), compareFn)
    return merge(left, right, compareFn)
  }
  return arr
}

function merge(leftArr, rightArr, compareFn) {
  const arr = []
  let l = 0
  let r = 0
  //比较left和right数组，小的插入arr，知道某一方已经遍历结束
  while (l < leftArr.length && r < rightArr.length) {
    arr.push(
      compareFn(leftArr[l], rightArr[r]) === Compare.BIGGER_THAN
        ? leftArr[l++]
        : rightArr[r++]
    )
  }
  return arr.concat(l < leftArr.length ? leftArr.slice(l) : rightArr.slice(r))
}

console.log(mergeSort([5, 4, 3, 2, 1], defaultCompare))
