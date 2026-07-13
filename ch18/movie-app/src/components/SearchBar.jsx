export default function SearchBar({ value, onChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault() 
    onSearch(value)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input type="text" placeholder="영화 제목을 입력하세요." value={value} onChange={(e) => onChange(e.target.value)} autoFocus />
      <button className="primary" type='submit'>
        검색
      </button>
    </form>
  )
}