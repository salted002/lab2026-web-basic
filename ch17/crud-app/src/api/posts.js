/*
 * posts API 요청 함수 모음
 */

// 연습용 SUPABASE 서버
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const headers = (extra = {}) => {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    ...extra, // 필요한 헤더 정보 추가
  }
}

// 읽기(Read): GET /posts - 글 목록 받아오는 함수
export const getPosts = async () => {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
    headers: headers(),
  })
  if (!res.ok) throw new Error(`글 목록을 불러오지 못했습니다.`)
  return res.json()
  // data = await res.json() 먼저 하고 data 리턴하는건 뭐가 다르지?
}

// 쓰기(Create): POST /posts - 새 글을 보내는 함수
export const createPost = async (post) => {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
    method: 'POST',
    headers: headers({
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    }),
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      user_id: 14,
    }),
  })
  if (!res.ok) throw new Error(`글을 저장하지 못했습니다.`)
  return res.json()
}

// 고치기(Update): PUT /posts/:id - 해당 글을 통째로 바꾸는 함수
export const updatePost = async (id, post) => {
  // fetch URL은 SUPABASE 문법
  const res = await fetch(`${SUPABASE_URL}/rest/v1/posts?id=eq.${id}`, {
    method: 'PUT',
    headers: headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ title: post.title, body: post.body }),
  })
  if (!res.ok) throw new Error(`글을 수정하지 못했습니다.`)
  return res.json()
}

// 지우기(Delete): DELETE /posts/:id - 삭제하는 함수(보낼 내용 없음)
export const deletePost = async (id) => {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/posts?id=eq.${id}`, {
    method: 'DELETE',
    headers: headers(),
  })
  if (!res.ok) throw new Error('글을 삭제하지 못했습니다.')
  return true
}
