/*
 * @Author: QiuShui
 * @Date: 2022-04-05 17:18:06
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-05 17:22:05
 * @FilePath: /Algorithm & DataStructure/Algorithm/搜索/顺序搜索.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
const DOES_NOT_EXIST = -1
import { defaultCompare } from "../../utils/utils.js"
function sequentialSearch(arr, value, equalsFn = defaultCompare) {
  for(let i=0;i<arr.length;i++){
    if(!defaultCompare(arr[i],value)){
      return i
    }
  }
  return DOES_NOT_EXIST
}

console.log(sequentialSearch([5,4,3,2,1],3))
