// 分而治之算法思想
// 1.分解原问题成多个子问题
// 2.解决子问题，用返回解决子问题的方式的递归算法
// 3.组合子问题的解决方式，得到原问题的解


function binarySearchRecursive(array, value, low, high) {
  // 求中间索引
  const mid = Math.floor((high + low) / 2)
  if (low <= high) {
    // 拆分成小问题，解决限定区间范围内的值查找
    if (array[mid] > value) {
      return binarySearchRecursive(array, value, low, mid - 1)
    } else if (array[mid] < value) {
      return binarySearchRecursive(array, value, mid + 1, high)
    } else {
      return mid
    }
  }
  return -1
}

// 二分查找
export default function binarySearch(array, value) {
  array.sort((a, b) => a - b)
  const low = 0
  const high = array.length - 1
  return binarySearchRecursive(array, value, low, high)
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8))
