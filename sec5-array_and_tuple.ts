// arrayとtupleについて

// ただの配列
// let list = [1,2,3]

// 配列の型定義の方法1
// let list: number[] = [1,2,3]

// 配列の型定義の方法2:ジェネリック型
// 先に配列であることを宣言し、型を書く。型定義をパラメータにできる（？）
// let list: Array<number> = [1,2,3]

//　色々な型が混ざった配列は、|で繋ぐことで複数の型を定義できる
// let list: Array<number | string> = [1,"hello",2]

// any型：どんな型が来るかわからない場合
// let list: Array<any> = [1,"hello",2, true]


//　tuple型：要素の個数と型が決まっている配列の場合
//　まず、型定義済の配列を宣言
let tuple: [string, number]
tuple = ['hello',10] //OK
tuple = ['j',1] //OK
// tuple = [12,'iii'] これはNG