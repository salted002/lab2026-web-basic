<<<<<<< HEAD
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
=======
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

function headers(extra={}) {
    return {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        ...extra // 만약 필요한 헤더정보추가 
    }
}
// 이 파일에는 서버에서 데이터를 가지고오고나, 서버에 데이터를 저장하는 역할만 모두 모았어요
// 글 목록을 받아온다. 서버에서 글 목록을 가지고 오는 함수를 만들었어요
export async function getPosts() {
    const response = await fetch(
        `${SUPABASE_URL}/rest/v1/posts`,
        {headers: headers()}
    )
    if(!response.ok) throw new Error(`글 목록을 불러오지 못했어요`)
    const data = await response.json()
    return data;
}

export async function createPost(post){
    const res = await fetch(
        `${SUPABASE_URL}/rest/v1/posts`,
        {
            method: "POST",
            headers: headers({
                'Content-Type': 'application/json',
                Prefer: 'return=representation',
            }),
            body: JSON.stringify( // java 객체를 -> JSON
                {title: post.title, body:post.body, user_id: 10}
            )
        }
    );
    if(!res.ok) throw new Error('글을 저장하지 못했습니다.')
    const data = await res.json();
    return data[0]; // data = [{}] data[0] = {}
}

export async function updatePost(id, post) {
    // `${SUPABASE_URL}/rest/v1/posts/:id`,
    const res = await fetch(
        `${SUPABASE_URL}/rest/v1/posts?id=eq.${id}`,
        {
            method: 'PATCH',
            headers: headers({
                'Content-Type': 'application/json',
                Prefer: 'return=representation',
            }),
            body: JSON.stringify( // obj -> json
                {title: post.title, body:post.body}
            )
        }
    );
    if(!res.ok) throw new Error('글을 수정하지 못했어요')
    const data = await res.json();
    return data;
}

export async function deletePost(id) {
    const res = await fetch(
        `${SUPABASE_URL}/rest/v1/posts?id=eq.${id}`,
        {
            method: "DELETE",
            headers: headers(),
        }
    );
    if(!res.ok) throw new Error(`글을 삭제하지 못했어요 ${id}`) 
    return true;
}
>>>>>>> 15560e8eecf11d162e917aafa04a9b32a48b97dc
