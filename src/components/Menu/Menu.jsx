import React from "react";
import { Link } from "react-router-dom";
import { MenuStyled  } from "../../styled";

export default function Menu() {
    return(
    <MenuStyled>
            <nav>
                <ul>
                    <li><Link to ='/Doacao'>Doação</Link></li>
                    <li><Link to='/Ranking'>Ranking</Link></li> 
                    <li><Link to ='/SobreNos'>Sobre nós</Link></li> 
                </ul>
            </nav> 
    </MenuStyled>
    )
}