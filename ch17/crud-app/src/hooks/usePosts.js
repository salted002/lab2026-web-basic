import { useState, useEffect } from 'react'
import { createPost, deletePost, getPosts, updatePost } from '../api/posts'

export const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)

        const data = await getPosts()
        setPosts(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    } // end of load()
    load()
  }, [])

  // 글 추가하는 함수 (api의 createPosts() 사용)
  const add = async (post) => {
    setError(null)
    const created = await createPost(post)
    setPosts((prev) => [...prev, created])
  }

  // 글 수정하는 함수 (api의 updatePost() 사용 — id 일치하는 글을 새 값으로 변경)
  const edit = async (id, post) => {
    setError(null)
    await updatePost(id, post)
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, ...post } : p)))
  }

  // 글 삭제하는 함수 (api의 deletePost() 사용 — 해당 id의 글만 제외한 배열을 만든다.)
  const remove = async (id) => {
    setError(null)
    await deletePost(id)
    setPosts((prev) => prev.filter((p) => p.id !== id))
  }

  return { posts, loading, error, add, edit, remove }
}
