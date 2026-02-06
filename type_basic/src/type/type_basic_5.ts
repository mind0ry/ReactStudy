/*
        함수 : 기능을 수행
               typescript => 컴파일 => javascript 변환
                                      => 데이터형 설정
        --------------------------
            리턴형      매개변수
        --------------------------
             o            o
          function func(a+b) {
            return a+b
          }

          function func(a:number+b:number):number {
            return a+b
          }
        --------------------------
             0            x
           function func():number {
            return 숫자
           }
        --------------------------
             x            o
           function func():void {

           }
        --------------------------

        const func=(a:number, b:number):number=> a+b
        // 이벤트
        const func=function(a:number, b:number){return a+b}
 */
function addNum(x:number, y:number):number {
    return x+y;
}
console.log(addNum(1,2))

function log(msg:string,userid?:string) {
    console.log(userid)
    console.log(msg)
}

log("Hello TypeScript", "admin")
log("Hello TypeScript")

// @ts-ignore
function padding(x:number):void; // 타입 추론
function padding(x:number,y:number):void;
function padding(x:number,y:number):void {
    console.log(x);
    console.log(y);
}
padding(10)
padding(10,20)