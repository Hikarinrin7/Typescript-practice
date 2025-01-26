// function型（関数）について

// 面積を返す関数（nfnですぐ出せる！！！！！！！）
// 最初はこう
// const area = (height,width) => {
//   return height*width
// }
// console.log(area(110,20))

// 型定義していく。戻り値にも型を設定することを忘れずに
// const area = (height: number,width: number):number => {
//   return height*width
// }
// console.log(area(110,20))

// 例えば単位を追加するなら、戻り値の型はstringにしなきゃだよね
const area = (height: number,width: number,unit: string):string => {
  return height*width+unit
}
console.log(area(110,20,'cm'))



// voidについて。返り値がない場合。
// nullでもundefinedでもエラーにはならない
const sum = (num1:number,num2:number):void => {
  console.log(num1+num2)
}
sum(6,7)



// Neverについて。常に例外（エラーとか）をthrowする関数でよく使われる。
// 一切値を返せない、らしい
// (エラーのthrowは返り値じゃないんや...throwをよく知らない)
const showError = (msg:string):never => {
  throw new Error(msg)
}
// showError('エラーが発生しました。')



// functionについて。
// TypeScriptにはFunctionという型がある！！！
// 関数のみを受け入れる型定義！！！
// let func: Function
// func = showError
// func('errorを呼び出しました')

// さらに、関数は関数でも「この型を持った関数のみ受け入れる」にするには
let func: (msg:string)=>never
func = showError
func('errorを呼び出しました')