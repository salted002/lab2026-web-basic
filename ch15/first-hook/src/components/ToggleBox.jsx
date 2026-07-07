import { useToggle } from '../hooks/useToggle'

export default function ToggleBox() {
  const [isOpen, toggleOpen] = useToggle(false)

  return (
    <div className="demo">
      <div className="button-row">
        <button className="primary" onClick={toggleOpen}>
          {isOpen ? '설명 접기' : '설명 펼치기'}
        </button>
      </div>

      {isOpen && (
        <p className="hint">
          이 열림/닫힘 값은 useToggle 커스텀 훅이 가지고 있습니다. 같은 훅을
          메뉴, 모달, 알림창 어디서든 다시 가져다 쓸 수 있습니다.
        </p>
      )}
    </div>
  )
}
