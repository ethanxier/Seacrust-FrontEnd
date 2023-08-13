/* eslint-disable no-unused-vars */
import gambar1 from "/src/assets/menu/menu1.svg"
import gambar2 from "/src/assets/menu/menu2.svg"
import gambar3 from "/src/assets/menu/menu3.svg"
import gambar4 from "/src/assets/menu/menu4.svg"
import { Base } from '../../api/api';
import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../../data/categories.json"

const Menu = () => {
    const token = window.localStorage.getItem('token')

    return (
        <div className="flex px-3 sm:px-10 pt-16 md:pt-24 justify-center items-center gap-62 self-stretch bg-palleteBlue shadow-inner w-full">
            {data.map((list, index) => {
                const path = list.name.toLowerCase()

            return (
                <div className="squareMenu" key={index}>
                    <Link to={`/product/${path}`}><div className="gambar">
                        <img className="hover:mb-5 duration-300 hover:drop-shadow-xl" src={eval(`gambar${index + 1}`)} />
                    </div></Link>
                    <div className="text-white mt-1 font-semibold sm:mt-3 text-center text-xxs md:text-lg w-full">{list.name}</div>
                </div>
            );
          })}
        </div>
    )
}

export default Menu