import { useState } from 'react'

export default function Toggle() {
  const [liked, setLiked] = useState(false)

  const handleToggle = () => {
    setLiked(!liked)
  }

  return (
    <div className="demo">
      <div className="button-row">
        <button
          onClick={handleToggle}
          className={liked ? 'like-button on' : 'like-button'}
        >
          {liked ? '좋아요' : '좋아요 취소'}
        </button>
      </div>

      <p className="toggle-status">
        현재 상태 :{' '}
        {liked ? '좋아요를 누르셨습니다.' : '좋아요를 누르지 않았습니다.'}
      </p>

      {liked && (
        <div className="secret-box">감사합니다! state를 잘 익혀봅시다.</div>
      )}
    </div>
  )
}
