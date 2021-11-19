import React from "react";
import { HomeStyled } from "../../styled";
import Menu from "../Menu/Menu";
import Forms from "./Forms";
import banner from "../Banner/banner-alimento.png"
import Footer from "../Footer/Footer";

export default function Doacao() {
    return (
        <>
            <Menu />
            <HomeStyled>
                <img src={banner} alt="Banner Alimentos"/>
                <div className="Text">
                    <h3>TRANSFORME UMA VIDA</h3>
                    <p1>Nosso site é feito para você achar um lugar para fazer doações de alimentos onde possa controlar o tanto de doações 
                    que fez, além de saber onde as doações estão no momento. 
                    Abaixo colocando seu nome e CPF você consegue ver o tanto de pontos que ja fez doando e o status da sua doação!</p1>
                </div>
                <div className='Box'>
                    <Forms />
                </div>
            </HomeStyled>
            <Footer/>
        </>
    )
}