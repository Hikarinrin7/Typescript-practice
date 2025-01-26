// インターフェース（構造的部分型の一つ？）について
// オブジェクトの構造を表す。
// TypeScriptの代表的な基本原則の一つ

// // とりあえず、interface インターフェース名~~ でオブジェクトの構造のみを定義
// interface User{
//   name: string
//   age: number
// }
// // このインターフェースを使ってオブジェクトに型を追加
// const user: User={
//   name:'yamada',
//   age:32
// }



// // オブジェクトに関数を含めてみる！
// interface User{
//   name: string
//   age: number
//   sayHi():string
// }
// // このインターフェースを使ってオブジェクトに型を追加
// const user: User={
//   name:'yamada',
//   age:32,
//   sayHi(){
//     return'こんちくわ'
//   }
// }
// console.log(user.sayHi()) //'こんちくわ'



// // 任意のプロパティの宣言にしてみる！
// // interfaceにはageプロパティあるのに、
// // このinterfaceを使って作ったオブジェクトにageプロパティがない！エラー！　を防ぎ、
// // ageプロパティはあってもなくてもいいよ、にする手法

// // interfaceの定義部分のageに?をつけるだけ
// interface User{
//   name: string
//   age?: number
//   sayHi():string
// }
// // このインターフェースを使ってオブジェクトに型を追加
// const user: User={
//   name:'yamada',
//   // age: 32
//   sayHi(){
//     return'こんちくわ'
//   }
// }



// // 読み込み専用のプロパティにしてみる！
// // 基本、作ったオブジェクトのプロパティは書き換えが可能
// interface User{
//   name: string
//   age: number
//   sayHi():string
// }
// // オブジェクト作る
// const user: User={
//   name:'yamada',
//   age:32,
//   sayHi(){
//     return'こんちくわ'
//   }
// }
// // nameの書き換え
// console.log(user.name) //'yamada'
// user.name = 'saito'
// console.log(user.name) //'saito'

// // 読み込み専用にするには、上の例でのnameの定義を
// // 「readonly name:string」にするだけで、
// // 書き換えでエラーが出る
// // こうやって、interfaceの中でプロパティにオプションを加えられる