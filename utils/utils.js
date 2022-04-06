/*
 * @Author: QiuShui
 * @Date: 2022-03-14 16:26:10
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-05 21:59:37
 * @FilePath: /Algorithm & DataStructure/utils/utils.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

// 比较
export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
}

// 默认比较方法
export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

// 默认相等函数
export function defaultEquals(a, b) {
  return a === b
}

export function biggerEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

export function lesserEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

export function defaultDiff(a, b) {
  return Number(a) - Number(b);
}

export function defaultToString(item) {
  if (item === null) {
    return "NULL"
  } else if (item === undefined) {
    return "UNDEFINED"
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`
  }
  // item必须有原生的toString方法，否则会导致出现[Object Object]的结果，[Object Object]是对象Object.toString()的默认输出结果[Object type]
  return item.toString()
}

export function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}
