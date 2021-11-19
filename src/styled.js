import styled from "styled-components";

export const MenuStyled = styled.div`
    nav {   
        background-color: rgba(255, 153, 0, 1);
        height: 4vh;
        padding: 15px;
    }
    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        margin: 0;
    }
    a{
        text-decoration: none;
        color: #517c30;
    }
    li:hover {
        border-bottom: 2px solid; 
        color: #517c30;
    }

`

export const FormsStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 5% 0 0 3%;
    
    input {
        width: 90%;
        height: 3vh;
        border-radius: 14px;
        outline: none;
        border: none;
        padding-left: 16px;
        margin-bottom: 3%;
    }

    button {
        width: 13%;
        height: 4vh;
        margin-left: 43%;
        border-radius: 20px;
        border: none;
    }

    button:hover{
        background-color: #bfe5b9
    }
`
export const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100%;
        height: 42vh;
    }

    .Text {
        margin: 0 20% 2%;
        font-size: 2vh;
        color: #63c754;
        text-align: center;
    }

    .Box {
        height: 20vh;
        width: 700px;
        background-color: #63c754;
        border-radius: 20px;
    }   

    
`
export const RankingStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 100%;
        height: 35vh;
    }

    .Box {
        width: 700px;
        height: 20vh;
        background-color: #63c754;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 10%;
        border-radius: 25px;
        color: #ffffff;
    }

    h3{
        margin-bottom: 0;
        text-align: center;
    }

    ul{
        list-style: none;
    }

`
export const SobreNosStyled = styled.div`
    img{
        width: 100%;
        height: 40vh;
    }

    .Text{
        text-align: center;
        color: #1ee752;
        margin: 0 16%;
    }
`
export const FooterStyled = styled.div`
    text-align: center;
    margin: 0;
    background: #fe9005;
    height: 10.8vh;
    margin-top: 13%;
    color: white;

    h2{
        padding-top: 2%;
        font-size: medium;
    }
    p {
        font-size: x-small;
    }
`