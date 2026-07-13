import PostItem from './PostItem'

export default function PostList({ posts, loading, error, onEdit, onDelete }) {
  if (loading) {
    return <p className="status loading">불러오는 중입니다...</p>
  }

  if (error) {
    return <p className="status error">{error}</p>
  }

  if (posts.length === 0) {
    return <p className="hint">아직 글이 없습니다. 새 글을 작성해보세요.</p>
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
