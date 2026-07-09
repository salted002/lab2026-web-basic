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