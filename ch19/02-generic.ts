/*
  자바스크립트의 경우, 타입을 적지 않으면 any로 간주된다.
  strict는 이 암묵적 any를 막는다.
  any는 일종의 타입 도피처. & 검사하지 않는다. => 실행할 때 오류가 드러남.
  function first(items: any[]): any {
    return items[0]
  }

  이를 피하기 위해 타입마다 함수를 적어주는 방법도 있다.
  firstString(items: string[]): string
  firstNumber(items: number[]): number
  => 동작이 같은 함수를 타입 수만큼 복제하는 것은 비효율적이다.
  => 제네릭을 사용하자!
*/

// Generic 제네릭은 타입을 '인자'처럼 받아서, 여러 타입에 같은 코드를 쓸 수 있다.

function first<T>(items: T[]): T | undefined {
  /*
   T는 타입 매개변수(Type Parameter).
   => 아직 어떤 타입인지 정해지지 않음, 호출 시 넘기는 값에 따라 자동 결정된다.
   T는 관례적으로 쓰는 것! 이름은 사실 자유.

   items: T[]
   매개변수 items는 T타입의 배열이라는 뜻.
   T가 number면 number[], T가 string이면 string[]

   T | undefined
   반환값의 타입은 T이거나 undefined일 수 있다.
   (배열이 비어있을 경우 items[0]이 undefined로 나올 수 있기 때문)

   즉, 함수 내에 여러 값들의 타입이 연결되어 있게 해줄 수 있다.
  */

  return items[0]
}

const hey = first([219000, 79000])
console.log(hey)
// undefined를 먼저 걸러내주는 것이 좋겠다. => narrowing!
if (hey !== undefined) {
  console.log(hey)
}

function box<T>(value: T): { value: T } {
  // T 타입의 값이 매개변수 value로 들어온다.
  // 반환 타입은 { value: T } 이다. (value라는 키가 T타입의 값을 갖는 프로퍼티 하나로 이루어진 객체)
  return { value } // { value }는 { value: value }의 축약형. 
}
