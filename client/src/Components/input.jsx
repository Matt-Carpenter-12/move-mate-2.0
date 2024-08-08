export default function Input({ value, name, title}) {
  return (
    <div>
        <label className="sidebar-label-container">
            <input type="radio" value={value} name={name} id={name}/>
            <span className="checkmark"></span>{title}
        </label>
    </div>
  )
}
