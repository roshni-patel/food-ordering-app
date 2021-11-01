import { data } from '../data/Data';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';
const Menu = () => {
    return(
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                    {data.map((menuItem, key) => {
                        return(
                            <MenuItem 
                                key={key}
                                image={menuItem.image}
                                name={menuItem.name}
                                price={menuItem.price}>
                            </MenuItem>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu;