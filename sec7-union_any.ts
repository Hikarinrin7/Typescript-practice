// union型：stringとnumber両方を許容できる型定義

// これだとうまくいかんよね。
// let a:number
// a = 1
// a = "hello"

// union型は、こうする
// 入りうる型を全部定義しとく、って感じ
// let a: number|string|boolean
// a=1
// a="hello"
// a=true

//  any型（最終手段）
// もしくはjavascriptを変換するときに型定義を無視するために使う）
// let b:any
// b=1
// b="2"
// b=false



