// 型のエイリアス（タイプエイリアス）
// numやstrなどのプリミティブ型や、複雑な型を持つunion型などのデータ型に
// 名前をつけられる
// メリット：型名を見るだけで意味を推測しやすく、複雑な型でも簡潔に記述できる

// Nameという型を作る！
type Name = string
let firstName: Name ='太郎'
let lastName: Name ='山田'

// この型定義も...
// let password: string|number = 'jdhtvinuh123'
// こうできる！
type Password = string|number
let password: Password = 'jdhtvinuh123'

// もちろん、オブジェクトでもできる
type User = {id: number, name: string}
const user: User = {id: 1, name:'yamada'}