// interfaceとclass

// // interfaceは今までと同様、（クラスの）構造を示す
// // クラスに対して、明示的に「特定の条件を満たすことを強制させる」意味合いもある（やっぱ型かなぁ）
// // interfaceをベースに、関数も作れる（下の例ではsayHi関数）
// interface UserInterface{
//   name:string
//   age:number
//   sayHi():string
// }
// // interfaceからのクラスの作成には「implements」を使う
// class User implements UserInterface{
//   name:string
//   age:number
//   constructor(name:string, age:number){
//     this.name = name
//     this.age = age
//   }
//   sayHi(): string {
//     return 'こんにちは'
//   }
// }

// const user = new User('yamada',32)
// console.log(user)
// console.log(user.sayHi())



// // interfaceの拡張！！！
// // UserInterface インターフェースを拡張して、SuperUserInterface インターフェースを作る（ややこし）
// interface UserInterface{
//   name:string
//   age:number
//   sayHi():string
// }
// interface SuperUserInterface extends UserInterface{
//   deleteUser():void
// }

// // SuperUserInterfaceからSuperUserオブジェクトを作っちゃうよ。implements使うよ
// class SuperUser implements SuperUserInterface{
//   name:string
//   age:number
//   constructor(name:string, age:number){
//     this.name = name
//     this.age = age
//   }
//   sayHi(): string {
//     return 'こんにちは'
//   }
//   deleteUser(): void {
//     console.log('ユーザーを削除しました')
//   }
// }

// const user = new SuperUser('yamada',32)
// console.log(user)
// console.log(user.deleteUser())
