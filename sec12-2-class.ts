// classについて、Typescriptバージョン
// 続き。クラスの継承してみる
// サブクラスに継承しても使いたい場合は、アクセス修飾子は「protected」

class User {
  constructor(protected name: string,private age: number){}
  getName(): string{
    return this.name
  }
}
// Userでインスタンス作る
const user = new User('yamada',42)

class SuperUser extends User{
  constructor(name:string,age:number){
    super(name,age)
  }
  changeName():void{
    this.name ='root'
  }
}
// SuperUserでインスタンス作る
const superUser = new SuperUser('saito',30)
// 表示
console.log(superUser) //SuperUser{name:'saito',age:30}
superUser.changeName()
console.log(superUser) //SuperUser{name:'root',age:30}



// abstractクラス（抽象クラス）
// 抽象クラスを継承する他のクラスのための基底クラス
// これ自身ではオブジェクトを作成できない
// メリット：ベースの機能だけ抽象クラスに持たせる、とかね
// 上の例だと、一番上を「abstract」 class User ~~にすることで、
// Userでインスタンス作ってるとこだけエラーになる