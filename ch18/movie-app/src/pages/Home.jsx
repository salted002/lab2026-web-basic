import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import { useMovieSearch } from "../hooks/useMovieSearch";

export default function Home() {
  const { query, setQuery, results, loading, error, searched, search } = useMovieSearch()

  const renderResults = () => {
    if(loading) return <div>영화를 찾는 중입니다...</div>
    if(error) return <div>오류가 발생했습니다. 정확한 제목으로 다시 검색해보세요.</div>
    if(!searched){
      return <p className="muted center">검색어를 입력해 영화를 찾아보세요.</p>
    }
    return (
      <MovieGrid movies={results} emptyText="검색 결과가 없습니다. 다른 제목으로 찾아보세요." />
    )
  }

  return (
    <div className="container">
      <h1>영화 검색</h1>
      <SearchBar value={query} onChange={setQuery} onSearch={search} />
      {renderResults()}
    </div>
  )
}