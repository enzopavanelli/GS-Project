import React from "react";
import { RankingStyled } from "../../styled";
import banner2 from "../Banner/banner-ranking.jpg"
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";


export default function Ranking() {
    return (
        <>
            <Menu />
            <RankingStyled>
                <img src={banner2} alt="Banner ranking"/>
                <div className='Box'>
                    <h3>Dados e Rank</h3>
                    <ul>
                        <li>Nome:</li>
                        <li>CPF:</li>
                        <li>Pontuação:</li>
                    </ul>
                </div>
            </RankingStyled>
            <Footer/>
        </>
    )
}