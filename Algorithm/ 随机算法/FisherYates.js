// 
import { swap } from '../../utils/utils.js'
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // 获取一个比i+1小的数值
        const randomIndex = Math.floor(Math.random() * (i + 1))
        swap(array, i, randomIndex)
    }
    return array
}

console.log(shuffle([1,2,3,4,5,6,7]))