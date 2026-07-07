export default function CartSummary({
  items,
  onRemove,
  onChangeQuantity,
  onClear,
}) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      {items.length === 0 ? (
        <p className="empty">아직 담은 상품이 없습니다.</p>
      ) : (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((item) => (
            <li className="cart-row" key={item.id}>
              <span className="name">
                {item.name} × {item.quantity}
              </span>
              <span className="subtotal">
                {(item.price * item.quantity).toLocaleString()}원
              </span>
              <button onClick={() => onChangeQuantity(item.id, -1)}>-</button>
              <button onClick={() => onChangeQuantity(item.id, 1)}>+</button>
              <button className="danger" onClick={() => onRemove(item.id)}>
                빼기
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="total">
        <span>합계</span>
        <span>{total.toLocaleString()}원</span>
      </div>

      {items.length > 0 && (
        <button
          className="ghost"
          style={{ marginTop: '12px' }}
          onClick={onClear}
        >
          장바구니 비우기
        </button>
      )}
    </div>
  )
}
