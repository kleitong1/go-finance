import React from "react";

import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction




} from "./style";

interface Props {
    title: string;
    amount: string;
    lastTansaction: string;
}


export function HighlightCard({
    title,
    amount,
    lastTansaction,
    
} : Props){

    return (

        <Container>
            <Header>
                <Title>{title}</Title>
                <Icon name="arrow-up-circle" />
            </Header>

            <Footer>
                <Amount>{amount}</Amount>
                <LastTransaction>{lastTansaction}</LastTransaction>
            </Footer>

        </Container>
    )
}