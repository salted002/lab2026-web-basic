import { useState } from 'react'

export default function Toggle() {
  const [liked, setLiked] = useState(false)

  function handleToggle() {
    setLiked(!liked)
  }

  return (
    <div className="demo">
      <div className="button-row">
        <button
          className={liked ? 'like-button on' : 'like-button'}
          onClick={handleToggle}
        >
          {liked ? '좋아요 취소' : '좋아요'}
        </button>
      </div>
      <p className="toggle-status">
        현재 상태 : {liked ? '좋아요를 눌렀습니다' : '아직 안 눌렀어요'}
      </p>

      {liked && (
        <div className="secret-box">고맙습니다! state를 잘 익혀봅시다.</div>
      )}
    </div>
  )
}
