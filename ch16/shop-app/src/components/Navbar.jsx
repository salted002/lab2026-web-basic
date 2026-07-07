import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* end가 있어야 주소가 정확히 '/'일 때만 홈 메뉴에 active가 붙는다. */}
      <NavLink to="/" className="brand-link">
        <span className="brand">Dev*Shop</span>
      </NavLink>

      <NavLink to="/about">소개</NavLink>
      <NavLink to="/products">상품</NavLink>
    </nav>
  )
}
