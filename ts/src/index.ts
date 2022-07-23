// 基本类型
let a: string = "hello world"

// 元组
const tuple1: [number, string, boolean] = [1, '2', false]
const tuple2: [string, number][] = [['1', 111], ['hi', 2]]

// 枚举
enum StatusCode {
    SUCCESS = 0,
    FAIL = -1
}

// 联合类型 union
let union1: number | string
union1 = 1
union1 = '1'

// 自定义类型 type
type MyType = number | string | boolean | null | undefined
type User = {
    name: string,
    age: number
}

// type User = {  // 不能扩充（重复声明）
//     address:string
// }

// 自定义类型 interface
interface Book {
    id: number | string;
    auth?: string
}
interface Book {
    price: number | string
}
let book: Book = {
    id: 1,
    price: '99999'
}

// function
function add(a: number, b?: string): number {
    return Number(a + (b || '0'))
}

// 断言 unknown
interface Data {
    userId: number;
    id: number,
    title: string,
    completed: boolean
}
async function getData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await res.json() as Data
}
getData()


// class
class Live{
    private id:string
    constructor(id:string){
        this.id = id
    }
}

// 泛型
function print<T>(data:T){
    console.log(data);
}
print<number>(123)
print<string|boolean>('123')
print<string|boolean>(false)

// 工具 

// 1.Record（指定kv对类型）
const cats: Record<number,{name:string,sex:number}> = {
    1:{
        name:'jack',
        sex:0
    },
    2:{
        name:'lucy',
        sex:1
    }
}
// 2.Pick(从已定类型中挑出几个属性组成新类型)
interface All {
    id:number,
    hash:'string',
    required:boolean,
    content:string
}

type part = Pick<All,"id" | "content">

// 3.Omit（从已定属性中剔除属性)

type objWithoutId = Omit<All,"id"> // 没有id