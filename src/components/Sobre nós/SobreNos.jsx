import React from "react";
import { SobreNosStyled } from "../../styled";
import banner3 from "../Banner/banner-sobre.jpg"
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";


export default function SobreNos() {
    return (
        <>
            <Menu />
            <SobreNosStyled>
                <img src={banner3} alt="Banner Sobre nós"/>
                <div className='Text'>
                    <h3>Sobre Nós</h3>
                    <p>
                    Somos 5 alunos da FIAP que atráves de um trabalho semestral viu a oportunidade de ajudar as pessoas 
                        afetadas pela pandemia 
                        com a criação de um site que facilita a vida das 
                        pessoas que desejam doar alimentos e as recompensam, 
                        com um projeto ainda embrionário mas 
                        que pode colher muitos frutos com sua ajuda, totalmente sem fins lucrativos 
                        apenas com o intuito solidário.
                    </p>
                </div>
            </SobreNosStyled>
            <Footer/>
        </>
    )
}