import { useState, useEffect } from 'react';
import { getPosts,createPost, updatePost, deletePost } from '../api/posts'

export function usePosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const load = async () => {
        try{
            setLoading(true)
            setError(null)
            const data = await getPosts()
            setPosts(data);
        }catch(e){
            setError(e.message)            
        }finally{ // try, catch 무조건 호출 
            setLoading(false)
        }
    }

    useEffect(()=>{
        load();
    }, []);

    // 추가 함수
    async function add(post) {
        setError(null)
        const created = await createPost(post);
        // created : {title:'..', body:'..'}
        setPosts((prev)=> [created, ...prev])
    }

    async function edit(id, post) {
        setError(null)
        const data = await updatePost(id, post)
        setPosts((prev) => prev.map(
            (p) => (p.id === id ? {...p,...post}: p)
            ) // end of map 
        ) // end of setPosts

    }

    async function remove(id) {
        setError(null)
        await deletePost(id)
        setPosts((prev) => prev.filter((p) => p.id !== id))
    }


    return {posts, loading, error, add, edit, remove}
}