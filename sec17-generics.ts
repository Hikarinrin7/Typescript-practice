// Genericsについて
// 型引数を使用して、実際に利用されるまで型が確定しない関数やクラスを実現
// 型のプレースホルダーを実現するようなイメージ


// // 例として、引数で与えられたものをそのまま返す関数を定義
// // 普通にany型で定義しちゃうと、戻り値がなんであろうとany型になっちゃう
// function echoValue(arg:any){
//   return arg
// }
// let val = echoValue('1')


// // 戻り値によって、その戻り値に応じた型情報をつけたい！！（え、すご）
// // Genericsの出番
// // 型引数,型引数名Tとする　<T>
// // これで、引数で渡された値の型を返り値に補填できる！
// // 型にとらわれずに動作し、型情報も失わない関数をGenericという
// function echoValue<T>(arg:T):T{
//   return arg
// }
// let val = echoValue(true)



// // classも扱ってみる
// // 型変数を持つtestクラスを作る
// // 型変数で受け取った型をvalプロパティに渡す
// // 型にとらわれないクラスが作れた
// class test<T>{
//   val:T
// }
// let test1 = new test<number>()
// test1.val=100 //OK
// let test2 = new test<string>()
// test2.val=100 //NG












