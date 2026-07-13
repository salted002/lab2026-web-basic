// 검색에 필요한 값인 (검색어, 결과, 로딩, 에러)를 한 덩어리로 묶은 커스텀 훅.
import { useState } from "react"
import { searchMovies } from "../api/movies"

export const useMovieSearch = () => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)
  
  const search = async (keyword) => {
    const trimmed = keyword.trim()
    if (!trimmed) {
      // 빈 입력이면 초기 상태로 되돌린다.
      setResults([])
      setError('')
      setSearched(false)
      return
    }
    
    setLoading(true)
    setError('')
    setSearched(true)
    try {
      const data = await searchMovies(trimmed)
      setResults(data)
    } catch (error) {
      setResults([])
      setError(error.message || '검색 중 문제가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  } 
  return { query, setQuery, results, loading, error, searched, search }
}