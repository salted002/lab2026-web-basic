// 연습용 가짜 서버. 응답을 흉내내고 실제로 저장하지는 않는다.
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

/* 서버와의 모든 대화(CRUD)를 각각 함수 하나로 만들어, fetch()로 요청을 보낸다.
   모든 함수는 응답이 정상인지를 (res.ok)로 먼저 확인하고, 아닐 경우 메시지와 함께 오류를 던진다.
   모든 서버와 관련된 작업은 이 파일 안에 있으므로, 서버가 바뀌면 이 파일만 고치면 된다.
*/

// 1. 읽기(Read): GET /posts — 글 목록을 받아온다.
export const getPost = async () => {
  const res = await fetch(`${BASE_URL}?_limit=5`)
  if (!res.ok) throw new Error('글 목록을 불러오지 못했습니다.')
  return res.json()
}

// 2. 쓰기(Create): POST /posts — 새 글을 보낸다.
export const createPost = async (post) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // JSON을 보낸다.
    body: JSON.stringify(post), // JSON.stringify()를 통해 객체를 문자열 형태로 변환한다.
  })
  if (!res.ok) throw new Error('글을 저장하지 못했습니다.')
  return res.json()
}

// 3. 고치기(Update): PUT /posts/:id — 글을 통째로 바꾼다.
export const updatePost = async (id, post) => {
  const res = await fetch(`{BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })
  if (!res.ok) throw new Error('글을 수정하지 못했습니다.')
  return res.json()
}

// 4. 지우기(Delete): DELETE /posts/:id — 보낼 내용은 없음
export const deletePost = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('글을 삭제하지 못했습니다.')
  return true
}
