const API_KEY = import.meta.env.VITE_OMDB_KEY
const BASE_URL = 'https://www.omdbapi.com/'

export const searchMovies = async (query) => {
  const keyword = query.trim() // 검색어에서 trim()으로 빈 문자열이나 앞뒤 공백 걸러내기

  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(keyword)}`
  const res = await fetch(url)
  
  if (!res.ok) {
    throw new Error('네트워크 응답이 올바르지 않습니다.')
  }
  const data = await res.json()

  // '결과 없음'은 오류가 아니라 빈 목록으로 처리한다.
  if (data.Response === 'False') {
    return []
  }
  return data.Search
}

export const getMovieDetail = async (id) => {
  // plot=full은 상세 정보 전체보기 (api규칙)
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${encodeURIComponent(id)}&plot=full`
  const res = await fetch(url)
  
  if(!res.ok){
    throw new Error('네트워크 응답이 올바르지 않습니다.')
  }
  const data = await res.json()

  if(data.Response === 'False'){
    return []
  }
  return data
}