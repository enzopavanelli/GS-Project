import React from "react";
import { FormsStyled } from "../../styled";

export default function Forms() {
    return (
    <FormsStyled>        
        <form action= "" method= "GET">
            <input id= "nome" type= "string" required pattern= "^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" placeholder= "Nome"/>
        </form>
        <form action= "" method= "GET">
            <input id= "CPF" type= "numer" required pattern= "\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder= "000.000.000-00"/>
        </form>
        <button type= "submit" id= "Btn">Acessar!</button>
    </FormsStyled>    
    )
}