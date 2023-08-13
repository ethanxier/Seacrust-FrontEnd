import navList from '../../data/profileNavList.json'
import { Link, useLocation } from 'react-router-dom';

const NavbarProfile = () => {
    let loc = useLocation();

    return (
      <div className="flex z-40 font-medium justify-left items-center top-0 bg-white shadow-sm sm:shadow-md sm:rounded-t-2xl">
        <ul className="flex text-xs sm:text-sm font-bold text-gray-700">
          {navList.map((list, index) => {
            return (
              <Link
                key={index}
                to={list.path}
                className={`${
                  loc.pathname === list.path && "text-palleteBlue border-b-2 border-b-palleteBlue"
                } box-border hover:text-palleteBlue transition-all duration-200 py-2 sm:py-3 bg-none px-4 sm:px-8 `}
              >
                <li>{list.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    )
}

export default NavbarProfile