// // classについて、Typescriptバージョン
// // 型定義していないプロパティへのアクセスはエラーになる
// // 型定義しまくる
// class User {
//   name: string
//   age: number
//   constructor(name: string,age: number){
//     this.name=name
//     this.age=age
//   }
//   getName(): string{
//     return this.name
//   }
// }
// // インスタンス作って、
// const user = new User('yamada',42)
// // 表示できる
// console.log(user) //User{name:'yamada',age:42}
// console.log(user.getName()) //'yamada'

// // 直接読み込んだり書き換えたりもできちゃう
// console.log(user.name) //yamada
// user.name = 'saito'
// console.log(user.name) //saito



// Typescriptのクラスには、こういう直接アクセスをを防ぐために、
// 「アクセス修飾子」がある
// private,public,protectedがある
// デフォルトはpublic
// 今回はgetNameメソッドからのみnameの参照が行えるように、privateにする
// privateは、「同じクラスからのみアクセスが可能」
// この場合、クラス定義の中にあるメンバー変数（？）の定義のところに
// 修飾子つける

// class User {
//   private name: string
//   age: number
//   constructor(name: string,age: number){
//     this.name=name
//     this.age=age
//   }
//   getName(): string{
//     return this.name
//   }
// }



// // 上のコードは、省略型で書ける！
// // メンバー変数の定義と、コンストラクター内でのメンバー変数への代入を削除！
// // コンストラクターの引数に直接アクセス修飾子（private）をつける
// // めちゃ短くなった
// class User {
//   constructor(private name: string,private age: number){}
//   getName(): string{
//     return this.name
//   }
// }
// // あとは一緒。インスタンス作って、
// const user = new User('yamada',42)
// // 表示できる
// console.log(user) //User{name:'yamada',age:42}
// console.log(user.getName()) //'yamada'