// 유틸리티는 이미 정한 타입을 재료로 새 타입을 만드는 도구라고 할 수 있다.
// 유틸리티 타입은 사실 무지하게 많다. 일단 몇 가지만 골라서 알아두자.

interface Product {
  id: string
  name: string
  price: number
  category: string
}

// 1. Pick<Type,Keys>
// Type: 어느 타입에서 골라올지 타입 이름
// Keys: 해당 타입에서 골라올 프로퍼티들의 집합(니온 문자열로 나열)
// ! 주의: 원본 타입 Product와 연결됨 -> Product의 name 프로퍼티가 다른 타입으로 바뀐다면, ProductPick의 name 프로퍼티도 따라서 바뀐다.

type ProductPickOne = Pick<Product, 'id'>
type ProductPick = Pick<Product, 'id' | 'name'>

const tv: ProductPick = {
  id: '123',
  name: '테레비',
}

// 연습
type ProductPriceInfo = Pick<Product, 'id' | 'price' | 'category'>
const monitor: ProductPriceInfo = {
  id: '234',
  price: 23000,
  category: '삼성전자',
}

// 2. Omit<Type, Keys>
// Type: 원본 타입
// Keys: 제거하고 싶은 타입

type ProductWithoutPrice = Omit<Product, 'price'>

const computer: ProductWithoutPrice = {
  id: '234',
  name: '컴퓨터',
  category: '전자기기',
}

// 3. Partial<Type>
// 원본 Type의 모든 프로퍼티를 optional(선택값)로 바꾼다.
const updateProduct = (id: string, patch: Partial<Product>): void => {
  console.log(`${id} 수정:`, patch)
}

updateProduct('123', { name: '커피머신' })

// 4. Record<Keys, Type>
// '객체 타입'을 만드는 유틸리티.
// 객체의 key는 Keys 타입이고, value가 Type 타입인 객체를 만든다.
// 자바스크립트 객체의 키 타입은 string, number, symbol 3가지만 가능하다.

type CatName = 'miffy' | 'boris' | 'mordred'

interface CatInfo {
  age: number
  breed: string
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 12, breed: 'cheese' },
  boris: { age: 3, breed: 'fish' },
  mordred: { age: 2, breed: 'snow' },
}
