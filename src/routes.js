import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Doacao from "./components/Doação/Doacao";
import Ranking from "./components/Ranking/Ranking";
import SobreNos from "./components/Sobre nós/SobreNos";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Doacao} />
                <Route path='/Doacao' exact component={Doacao} />
                <Route path='/Ranking' exact component={Ranking} />
                <Route path='/SobreNos' exact component={SobreNos} />
            </Switch>
        </BrowserRouter>
    )
}