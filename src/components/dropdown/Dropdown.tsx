import { DropdownProp } from "../models/DropDownProp";
import './Dropdown.scss'

const list: string[] = [
  `Popular`,
  `Now Playing`,
  `Upcoming`,
  `Top Rating`
]

export function Dropdown(props: DropdownProp) {
  
  return (
    <div className="dropdown-nav">
      <div className="dropdown-title">{props.title}</div>
      <div className="dropdown-content">
        {list.map((dropItem, index) => {
          return <div key={index} className="dropdown-list-item">{dropItem}</div>
        })}
      </div>
    </div>
  );
}
