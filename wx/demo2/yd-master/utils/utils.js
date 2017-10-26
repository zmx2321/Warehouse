export function copy(obj){
  if(typeof obj === 'object'){
    return JSON.parse(JSON.stringify(obj))
  }
}

export function handleTitle(title = []){
  if(Array.isArray(title)){
    return title.join('')
  }
  return ''
}

const LIKES_KEY = 'likes'

export function uniquePush(arr, ele){
  let ret = false;
  if(arr && Array.isArray(arr) && arr.indexOf(ele) === -1){
       arr.push(ele)
       ret = true
  }
  return ret
}

export function getLikesFromStorage(){
  let likes = wx.getStorageSync(LIKES_KEY)
  if(!likes || !Array.isArray(likes)){
      likes = []
  }
  return likes
}

export function setLikesToStorage(likes, cid){
  let ls = getLikesFromStorage()
  uniquePush(ls, cid)
  console.log(ls);
  console.log( ls.indexOf(cid) );
  wx.setStorageSync(LIKES_KEY, ls)
}

export function removeLikesFromStorate(){
  return wx.removeStorageSync(LIKES_KEY)
}

// export {copy,handleTitle,uniquePush,getLikesFromStorage,setLikesToStorage,removeLikesFromStorate}














// function a(){
//   console.log('I am function a')
// }
// function b(){
//   console.log('I am function b')
// }
// function c(){
//   console.log('I am function c and i am a default export 2')
// }
// export const PI = Math.PI;
// export var num = 1
// export let numberObject = new Number(num)
// export var str = 'liyanfeng'
// export let stringObject = new String(str)
// export let bool = true;
// export const booleanObject = new Boolean(bool);
// export var Null = null
// export let Undefined = void 0
// export let symbol = Symbol('liyanfeng')
// export const object = {name: '李彦峰',age: 26}
// var obj = {0:0,1:1,length:2}
// export var sayName = function(){
//   console.log('我是李彦峰')
// }
// export const arr = [1,2,3,obj]
// export { a, b }
// export default c
