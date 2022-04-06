/*
 * @Author: QiuShui
 * @Date: 2022-04-05 16:18:42
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-05 17:00:07
 * @FilePath: /Algorithm & DataStructure/Algorithm/排序/桶排序.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
// 桶排序：支持传入单个桶可容纳的数量：bucketSize，一般存放5个较为合适，如果元素分散的较为广，则单个桶可以存放更多，否则存放更少较为合适
import insertionSort from "./插入排序.js"

function bucketSort(arr, bucketSize = 5) {
  if (arr.length < 2) {
    return arr
  }
  const buckets = createBuckets(arr, bucketSize)
  return sortBuckets(buckets)
}

// 创建桶数组，并将arr中的元素分布到对应桶中
function createBuckets(arr, bucketSize) {
  let minVal = arr[0]
  let maxVal = arr[0]
  arr.forEach((item) => {
    if (item > maxVal) {
      maxVal = item
    } else if (item < minVal) {
      minVal = item
    }
  })
  // 计算出需要多少个桶合适
  let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1
  const buckets = new Array(bucketCount).fill([])
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minVal) / bucketSize)
    buckets[bucketIndex].push(arr[i])
  }
  return buckets
}

function sortBuckets(buckets) {
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] !== null) {
      insertionSort(buckets[i])
      sortedArray.push(...buckets[i])
    }
  }
  return sortedArray
}

bucketSort([5,4,3,2,1],3)