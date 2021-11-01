type MenuItemProps = {
    name: string,
    price: number,
    image: string
}
const MenuItem: React.FC<MenuItemProps> = ( {image, name, price}: MenuItemProps) => {
    return(
        <div className="menuItem">
            <div style={{backgroundImage: `url(${image})`}}></div>
                <h1>{name}</h1>
                <p>${price}</p>
        </div>
    );
}

export default MenuItem; 