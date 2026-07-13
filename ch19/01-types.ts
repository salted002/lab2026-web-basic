// 타입 선언하기
const sku: string = 'sku-001'
const ski: String = 'hey'

const discount: number = 123
const total: Number = 355
const totald: boolean = false

// 객체의 각 필드가 어떤 타입을 가져야 하는지 정의
// id: string; 과 같은 문법인데 ;를 생략한 것 같은..?
// interface Product {
//   id: string
//   name: string
//   price: number
//   inStock: boolean
// }

// 객체 문법 똑같이 , 써줘야 함.
// const newProduct: Product = {
//   id: '302',
//   name: '헤이',
//   price: 3000,
//   inStock: true,
// }

const freeShipping = false // => 타입스크립트에서 타입 써주지 않아도 값을 보고 타입을 추론.

// literal union 리터럴 유니온: 값이 몇 가지로 정해졌을 때, '|'를 사용해 나타냄.
type Category = 'electronics' | 'fashion' | 'book'
// 카테고리라는 타입은 위 세 가지 값을 갖는다고 정의

const c1: Category = 'fashion'
const c2: Category = 'book'
console.log(c1)

// 값이 여러 종류여도 가능하다.
function priceText(price: number | null): string {
  // price라는 파라미터(매개변수)는 number 혹은 null값만 될 수 있다.
  // 함수 priceText의 리턴값은 string이다.

  if (price === null) return '가격 미정'
  // if문으로 number와 null 중 한쪽을 걸러내는 것을 narrowing이라고 한다.
  // narrowing 후에는 price가 number라고 생각하고 코드를 짤 수 있다.
  return `${price.toLocaleString()}원`
  // number에만 부를 수 있는 toLocaleString()을 null로 인한 에러 없이 부를 수 있다.
}

function describe(category: Category): string {
  // 매개변수 category의 타입은 Category이다. (위에서 선언한 타입)
  // 함수 describe()의 리턴값 타입은 string이다.
  // 여기서 타입 Category는 유니온의 각 값을 가짐 -> switch로 각각을 처리
  // -> 이때 값 빼먹으면 오류남!!
  switch (category) {
    case 'electronics':
      return '전자기기'
    case 'fashion':
      return '패션'
    case 'book':
      return '서적'
  }
}

// 함수의 매개변수와 반환값 타입 정해주기
function formatPrice(won: number): string {
  // 매개변수 won은 number타입이 와야 한다. (아니면 에러 남)
  // 반환값은 string이어야 한다. (아니면 에러 남)
  return ''
}
// formatPrice('hey') < 가령 이렇게 부르면 에러가 난다.

type Category2 = 'electronics' | 'fashion' | 123 | string

function discounted(price: number, rate: number = 0.1): number {
  // 매개변수 price는 number타입, rate는 number타입 => rate는 생략할 경우 기본값이 0.1로 쓰인다.
  return 3
}

type ShipmentStatus = 'preparing' | 'shipping' | 'delivered'
function statusLabel(status: ShipmentStatus): string {
  switch (status) {
    case 'preparing':
      return '상품준비중'
    case 'shipping':
      return '배송중'
    case 'delivered':
      return '배송완료'
  }
}

// 선택적 매개변수: 아래 choice는 넣어도 되고 넣지 않아도 된다.
function testing(param: number, choice?: string) {
  if (choice) {
    console.log(choice)
  } else {
    console.log(param)
  }
}

// 화살표 함수에서 타입 달기
const arrowFunction = (price: number): number => {
  return price * 3
}

// 여기서 주의.
// npx tsx로 파일을 실행할 때는 타입을 검사하지 않고, 타입 부분을 제외한 코드만 그대로 실행한다. 타입 검사는 에디터에서 하는 것이다.

// 파일(1개) 실행할 때도 타입 검사를 하려면
// npx tsc --strict --noEmit 파일명
// 위와 같이 실행한다.

// 앱 단위로 검사할 때는, tsconfig.json에 설정을 모아두고 npm run build를 하면 된다.

const stockLabel = (inStock: boolean): string => {
  if (inStock) {
    return '재고있음'
  } else {
    return '재고없음'
  }
}
// const stockLabel = (inStock: boolean): string => inStock ? '재고있음' : '재고없음'

interface User {
  id: string
  nickname?: string
}

const showNickname = (user: User | undefined): string => {
  return user?.nickname ?? '익명'
  // ?.을 썼으므로, user가 없을 때 undefined or user.nickname이 없을 때 undefined => '익명'
}
