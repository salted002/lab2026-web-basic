export default function ProfileCard({ name, role, hobbies }) {
  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="label">취미</p>
      <ul className="hobby-list">
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}
