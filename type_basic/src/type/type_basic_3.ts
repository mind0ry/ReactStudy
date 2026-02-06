let num1number=10 // int
let num2=10.5
let compony:string="SIST"
let isCheck:boolean=false
let x:any="Hello"

// 배열
let names:string[]=["a","b"]
let arr:any[]=[1,"aa","true"]

let info:[string,number,string]=["홍길동", 25, "010-1111-1111"]

enum Arrow {
    UP = 1,
    DOWN = 2,
    LEFT = 3,
    RIGHT = 4,
}
// 자동으로 순차적으로 번호가 부여 => 지정
console.log("이름:",info[0])
console.log("전화:",info[2])
console.log("UP",Arrow.UP)

// 설계
interface User {
    readonly id:number, // 읽기 전용
    name:string,
    age?:number
}

// => JPA
const user1: User = {
    id:1,
    name:'홍길동'
}
// 객체 생성
const user2: User = {
    id:2,
    name:"심청이",
    age:25
}

console.log(user1)
console.log(user2)
console.log(user1.age)

type Point={
    x:number,
    y:number,
}
const pt:Point = {x:10,y:20}
console.log("pt",pt)
console.log(pt.x)
console.log(pt.y)

/*
    readonly => 객체가 생성이 되면 수정이 불가능
    age? => 선택속성 => 값이 없어도 에러 없음


    ------------------------------------------
                   interface     type
    ------------------------------------------
    함수              가능          가능
    ------------------------------------------
    객체 확장          가능        불가능
    ------------------------------------------
    선언(병합)         가능        불가능
    ------------------------------------------
 */

interface Calc {
    (a:number, b:number):number
}

const add1:Calc = (x,y) => {
    return x+y;
}

console.log(add1(10,20))

// type => 객체 => 함수 + 변수

type AddFnType=(a:number,b:number)=>number
const add2:AddFnType=(x,y)=> x+y;


/*
    변수를 모아서 => interface
    함수를 모아서 => type
    실무 => 함수(type) , 변수(인터페이스)
 */
interface CalcEx extends Calc{
    // (a:number, b:number):number
    desc:string
}

// 객체 선언
const add3:CalcEx = ((x,y)=>x+y) as CalcEx
add3.desc="더하기"
console.log(add3.desc, add(100,200))


