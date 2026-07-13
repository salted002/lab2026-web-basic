<<<<<<< HEAD
import { useEffect, useState } from 'react'

export default function PostForm({ editingPost, onSubmit, onCancel }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // 수정 중인 글이 들어오면 입력칸에 글 값을 채우고, 아니면 빈칸
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title)
      setBody(editingPost.body)
    } else {
      setTitle('')
      setBody('')
    }
  }, [editingPost])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim() === '') {
      alert('제목을 입력하세요.')
      return
    }
    const post = { title: title.trim(), body: body.trim() }
    onSubmit(post)
    setTitle('')
    setBody('')
  }

  const isEditing = Boolean(editingPost)

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <h2>{isEditing ? '글 수정하기' : '새 글 작성하기'}</h2>

      <input
        type="text"
        placeholder="제목을 입력하세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <div className="button-row">
        <button type="submit">{isEditing ? '수정 저장' : '추가'}</button>
        {isEditing && (
          <button type="button" className="secondary" onClick={onCancel}>
            취소
          </button>
        )}
      </div>
    </form>
  )
}
=======
import { useState, useEffect} from 'react'
// onSubmit : handleSubmit({title, body}) post = {title, body} 
// async function handleSubmit(data) : App.jsx 
function PostForm({ editingPost, onSubmit, onCancel }) {
    const [title, setTitle] = useState("") // 게시글 제목
    const [body, setBody] = useState("")   // 게시글 내용

    useEffect(()=>{
        if(editingPost) {
            setTitle(editingPost.title);
            setBody(editingPost.body);
        }else{
            setTitle('')
            setBody('')
        }
    }, [editingPost]);
 
    function handleSubmit(e) { // call from <submit>
        e.preventDefault(); // form 제출되어도 화면 깜밖이지 않게
        const post = {title: title, body:body}
        onSubmit(post);
        setTitle(''); setBody('')
    }
    const isEditing = Boolean(editingPost); // 객체가 있으면 true, 없으면 false

    return (
        <form className='form card' onSubmit={handleSubmit}>
            <h2>{isEditing ? '글수정' : '새글 작성'}</h2>
            <input
                type="text"
                placeholder='제목'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder='내용'
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            />  
            <div className='button-row'>
                <button type="submit">{isEditing ? '수정' :'추가'}</button>
            </div>
        </form>
    )
}

export default PostForm;
>>>>>>> 15560e8eecf11d162e917aafa04a9b32a48b97dc
