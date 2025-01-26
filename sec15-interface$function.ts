// interfaceとfunctionについて

// // interfaceでは関数の型も扱える
// interface AddFunc{
//   (a:number, b:number): number
// }
// // interfaceから関数を作る
// // ここでの型定義は不要（あってもいいけど）
// let add: AddFunc
// add = (a,b) =>  {
//   return a+b
// }
// console.log(add(1,3)) //4



// // bを任意プロパティにする!
// // bがあるときにはa+bを、ないときにはaだけを返す、はこう書くらしい（むず）
// interface AddFunc{
//   (a:number, b?:number): number
// }
// // interfaceから関数を作る
// let add: AddFunc
// add = (a,b) =>  {
//   return b? a+b : a
// }
// console.log(add(1,3)) //4