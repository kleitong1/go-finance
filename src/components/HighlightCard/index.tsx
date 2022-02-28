import React from "react";

import { Container, 
         Header,
         Title,
         Icon,
         Footer,
         Amount,
         LastTransaction




} from "./style";

export function HighlightCard(){
    return (

        <Container>
            <Header>
            <Title>Entrada</Title>
            <Icon name="arrow-up-circle" />
            </Header>

            <Footer>
                <Amount>R$ 15.000,00</Amount>
                <LastTransaction>Ultima transacao há 3 dias</LastTransaction>
            </Footer>

        </Container>
    )
}