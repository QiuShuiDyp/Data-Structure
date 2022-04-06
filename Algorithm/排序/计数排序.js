/*
 * @Author: QiuShui
 * @Date: 2022-04-05 15:51:26
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-05 16:12:40
 * @FilePath: /Algorithm & DataStructure/Algorithm/排序/计数排序.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
// 计数排序是基于非负数整数数组的排序
function countingSort(arr) {
  // 长度小于2不必排序，直接返回
  if (arr.length < 2) {
    return array
  }
  const maxVal = findMaxValue(arr)
  // 创建一个计数数组，计数数组的长度要是最大值+1，否则访问count[maxVal]会报错
  const counts = new Array(maxVal + 1).fill(0)
  arr.forEach((item, index) => {
    // count数组每一项初始化为0
    counts[item]++
  })
  // arr的索引
  let sortIndex = 0
  counts.forEach((count, i) => {
    while (count > 0) {
      arr[sortIndex++] = i
      count--
    }
  })
  return arr
}

// 获取数组中的最大值
function findMaxValue(arr) {
  let max = arr[0]
  arr.forEach((item) => {
    max = item > max ? item : max
  })
  return max
}

console.log(countingSort([5,4,3,2,1]))