import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserList from './components/UserList'
import PostList from './components/PostList'
import MyPostList from './components/MyPostList'

export default function App() {
  return (
    <div className="app">
      <h1>React로 만든 게시판</h1>
      <p className="lead">서버에서 데이터를 받아와서 보여줍시다.</p>

      <section className="section">
        <h2>사용자 목록</h2>
        <UserList />
      </section>
      <section className="section">
        <h2>게시글 목록</h2>
        <PostList />
      </section>
      <section className="section">
        <h2>뭐냐이건</h2>
        <p className="hint">
          새로고침 없이, 버튼으로 사용자가 직접 불러올 수 있도록 합니다.
        </p>

        <MyPostList />
      </section>
    </div>
  )
}
