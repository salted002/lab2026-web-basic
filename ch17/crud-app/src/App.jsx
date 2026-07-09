import { useState } from 'react'
import './App.css'
import { usePosts }  from './hooks/usePosts'
import PostList  from './components/PostList'
import PostForm from './components/PostForm'

function App() {
  // posts : 게시글 배열, loading : 로딩여부, error : 에러여부 
  // add,  edit, remove
  const {posts, loading, error, add, edit, remove } = usePosts();
  const [editingPost, setEditingPost] = useState(null); // post 객체 
  // 글추가, 글수정 
  async function handleSubmit(data) { //data 변경된 데이터 객체, 신규객체 
    try{
      if(editingPost) {
        await edit(editingPost.id, data)
        setEditingPost(null)
      }else{
        await add(data)
      }
    }catch(e){
      alert(e.message);
    }
  }

  async function handleDelete(id) {
    if(!window.confirm("정말 삭제할까요?")) return;
    try{
      await remove(id);
    }catch(e){
      alert(e.message)
    }
  }
  
  return (
    <div>
      <h1>미니 게시판 (CURD) 연습 </h1>

      <PostForm
        editingPost={editingPost}
        onSubmit={handleSubmit}
        onCancel={()=>setEditingPost(null)}
      />

      <PostList
        posts={posts}
        loading={loading}
        error={error}
        onEdit={setEditingPost}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App