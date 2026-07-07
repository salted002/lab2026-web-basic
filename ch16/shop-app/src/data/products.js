// 나중에는 백엔드로 대체하게 될 데이터

export const products = [
  {
    id: 1,
    name: '키크론 기계식 블루투스 키보드',
    price: 219000,
    category: '입력장치',
    desc: '알루미늄 CNC 바디, 핫스왑 지원, 게이트론 프로 축, 유무선(블루투스/2.4GHz/유선) 겸용',
  },
  {
    id: 2,
    name: 'LG 울트라와이드 모니터',
    price: 549000,
    category: '디스플레이/확장',
    desc: '34인치 커브드, 21:9 비율, QHD(3440x1440), USB-C 65W PD',
  },
  {
    id: 3,
    name: '시디즈 인체공학 의자',
    price: 429000,
    category: '가구/데스크 셋업',
    desc: '메쉬 등받이, 헤드레스트 포함, 요추 지지대 조절, 팔걸이 4D',
  },
  {
    id: 4,
    name: '노트북 스탠드',
    price: 79000,
    category: '디스플레이/확장',
    desc: '알루미늄 재질, 방열 설계, 높이 15cm 고정형',
  },
  {
    id: 5,
    name: '로지텍 MX 무선 마우스',
    price: 139000,
    category: '입력장치',
    desc: '8000 DPI, 조용한 클릭, 멀티 디바이스 페어링(3대), USB-C 충전',
  },
  {
    id: 6,
    name: '소니 블루투스 이어폰',
    price: 359000,
    category: '오디오/영상',
    desc: '액티브 노이즈캔슬링, 8시간 재생(케이스 포함 24시간), 멀티포인트 연결',
  },
  {
    id: 7,
    name: 'USB 허브/도킹스테이션',
    price: 219000,
    category: '디스플레이/확장',
    desc: '알루미늄 CNC 바디, 핫스왑 지원, 게이트론 프로 축, 유무선(블루투스/2.4GHz/유선) 겸용',
  },
  {
    id: 8,
    name: '그리드잇 대형 가죽 데스크 매트',
    price: 49000,
    category: '가구/데스크 셋업',
    desc: '90x40cm, 방수 PU 가죽, 양면 사용(색상 2가지)',
  },
  {
    id: 9,
    name: '네스프레소 버츄오 넥스트 캡슐 커피머신',
    price: 199000,
    category: '라이프스타일',
    desc: '5가지 컵 사이즈 자동 인식, 원터치 추출, 컴팩트 사이즈',
  },
  {
    id: 10,
    name: '로지텍 브리오 505 웹캠',
    price: 129000,
    category: '오디오/영상',
    desc: '1080p 60fps, 자동 조명 보정, 프라이버시 셔터',
  },
]

// id값으로 상품을 찾아주는 함수: 주소창에서 읽어올 id는 문자열이기 때문에 Number()로 바꿔준다.
export const findProductById = (id) => {
  return products.find((p) => p.id === Number(id))
}
