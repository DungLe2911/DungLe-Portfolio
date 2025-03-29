import { Link } from "react-router-dom";
import { navBarList } from "../Asset/Data.js";
import "../Style/NavBar.css"
import { useEffect, useState } from "react";
export default function NavBar(){
    const [current, setCurrent] = useState(0);
    useEffect(()=>{
        const arr = document.querySelectorAll(".navBarLink");

        const path = window.location.pathname;
        const slug = path.split('/').filter(segment => segment !== '').pop();
        if(slug === "contact"){
            setCurrent(3);
            arr[3].classList.add("active");
        }else if( slug === "project"){
            setCurrent(2);
            arr[2].classList.add("active");
        }else if(slug === "resume"){
            setCurrent(1);
            arr[1].classList.add("active");
        }else{
            setCurrent(0);
            arr[0].classList.add("active");
        }
    },[]);

    const handleClickItem = (index) =>{
        const arr = document.querySelectorAll(".navBarLink");
        arr[current].classList.remove("active");
        arr[index].classList.add("active");
        setCurrent(index);
    }
    return(
        <div className="navBarContainer">
            <ul className="navBarList">
                {navBarList.map((item, index) =>{
                    return(
                        <li key={index}>
                            <Link to={item.link}> 
                                <button className="navBarLink" onClick={()=>{handleClickItem(index)}}>{item.title}</button>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}