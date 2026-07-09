// 글 하나를 그린다. 직접 지우지거나 수정하지 않고 부모가 준 함수에 값만 넘긴다.
function PostItem({post, onEdit, onDelete}){
    return (
        <li className="card">
            <p className="post-title">{post.title}</p>
            <p className="post-body">{post.body}</p>

            <div className="post-actions">
                <button className="secondary" onClick={()=>onEdit(post)}> 
                    수정 
                </button>
                <button className="danger" onClick={()=>onDelete(post.id)}>
                    삭제
                </button>
            </div>
        </li>
    )
}
export default PostItem;