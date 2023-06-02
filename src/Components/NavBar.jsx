import {Link} from 'react-router-dom';
const Nav=()=>{
    return(
        <div className="nav">
         <ul className="Menu">
            <li className="menu-Item">
                <Link to="/">صفحه اصلی</Link>
            </li>
            <li className="menu-Item">
            <Link to="/product">محصولات</Link>
            </li>
            <li className="menu-Item">
            <Link to="/about">درباره ما</Link>
            </li>
            <li className="menu-Item">
            <Link to="/content">ارتباط با ما</Link>
            </li>
         </ul>
        </div>
    )
}
export default Nav;