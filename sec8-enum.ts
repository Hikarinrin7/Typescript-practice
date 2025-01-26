// 列挙型
// 関連する値の集合を編成する方法。
// 複数の定数を一つにまとめておける


// これだと、typeが何を意味してるのかぱっと見でわからん
// const userA = {
//   id:0,
//   name:'Yamada',
//   type:0
// }
// const userB = {
//   id:1,
//   name:'Saito',
//   type:1
// }



// typeを数字で扱いつつ、可読性をあげよう
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

// const userA = {
//   id:0,
//   name:'Yamada',
//   type:ADMIN
// }
// const userB = {
//   id:1,
//   name:'Saito',
//   type:AUTHOR
// }

// console.log(userA.type);
// console.log(userB.type);



// これと同じことをもうちょっと簡単に汎用性高くできるのが列挙型
// Role　は　型名
// 何も定義しなければ、上から順に0,1,2...が割り当てられる
// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

// const userA = {
//   id:0,
//   name:'Yamada',
//   type:Role.ADMIN
// }
// const userB = {
//   id:1,
//   name:'Saito',
//   type:Role.AUTHOR
// }

// console.log(userA.type); //'0'
// console.log(userB.type); //'1'



// 0,1,2...以外を割り当てるには
// enum Role {
//   ADMIN=1,
//   READ_ONLY,
//   AUTHOR,
// }
// （以下略）
// これで1,2,3...になる



// 文字も割り当てられるよ
enum Role {
  ADMIN=1,
  READ_ONLY='読み取り専用',
  AUTHOR='書き込み可',
}

const userA = {
  id:0,
  name:'Yamada',
  type:Role.ADMIN
}
const userB = {
  id:1,
  name:'Saito',
  type:Role.AUTHOR
}

console.log(userA.type); //'1'
console.log(userB.type); //'書き込み可';


// 逆の呼び出しもできる（数字に限り？？）
// 列挙型の値を与えることで"メンバー名"を取得できる（？）
console.log(Role[1])
console.log(Role[userA.type]) //どちらも'ADMIN'
// Role.ADMINは1だし、Role[1]はADMINってこと！！



// 列挙型に関数を追加する方法
// enumと同じ名前の「namespace」を用意し関数を定義する、らしい
// namespaceなんて使わんって記事ばっか出てくる、大丈夫か？
namespace Role{
  export function toMessageKey(role:Role){
    switch(role){
      case Role.ADMIN:
        return '管理者ユーザーです。'
      case Role.AUTHOR:
        return '書き込み専用ユーザーです。'
    }
  }
}
console.log(Role.toMessageKey(userA.type)) //'管理者ユーザーです。'