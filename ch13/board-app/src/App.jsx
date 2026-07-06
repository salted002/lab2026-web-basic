import { useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import PostList from './components/PostList'
import MyPostList from './components/MyPostList'

function App() {
  return (
    <div className="app">
      <h1>게시판</h1>
      <p className="lead">
        화면이 처음 뜰 때 서버에서 데이터를 받아 와 보여줍니다.
      </p>
      <section className="section">
        <h2>UserList 사용자 목록</h2>
        <UserList />
      </section>
      <section className="section">
        <h2>PostList 게시글 목록</h2>
        <PostList />
      </section>
      <section className="section">
        <h2>MyPostList 사용자가 불러오기</h2>
        <MyPostList />
      </section>
    </div>
  )
}

export default App
