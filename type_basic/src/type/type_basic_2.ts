/*
    1. TypeScript
        문법이 아니라 설계 도구
        에러가 없게 만드는 것
        = 목적
           컴파일 단계에서 오류 발견
        = int / double => js 숫자를 모두 number기반
          const num1:number=10
          const num2:number=10.5
          ** number (int , double)
          ** string (char , string) => '' , ""
        = 타입 추론
          : 코드를 보고 알아서 타입을 추출 기능
          const num=10 ** 값이 없는 경우에 문제 발생
          const num="aaa"
           => const num:string="aaa"
          명시적 타입 선언 => 줄여서 사용하는 것이 좋다
 */
let age=10;
console.log(age)
// 자동으로 데이터형 인식 => 데이터형이 다르면 오류 발생
// 실무에서는 소스를 줄이기 위해서 타입 추론에 맡는다
// js(X) ts,tsx
// parameter는 반드시 사용한다 => 타입 지정

function add(a:number,b:number) {
    return a + b;
}

// 타입을 최대한 알아서 추론 (자동 인식)
// 애매한 데이터 => 개발자 책임
// 초기값 기준에서 타입 추론

/*
    Optional Chain : null/undefined를 방지
    data?.
 */

// union type => |
let cc:number|string="aaa"
console.log(cc)
cc=100
console.log(cc)
/*
    제네릭
    => React / Vue
    useState<number>
    useState<FoodVO>
    타입 재사용 / 유연성

    function test<T>(value:T):T
                 --- 임시데이터형 (Type)
    => any : 남발(X) 실무에서는 사용 빈도가 없다
    => react => 초기값 => axios에서 얻는 값 = 화면 출력
                -----    -----
                  |        |
                  ----------
                       |
                     data?.name
                     ---------- > props => interface
 */