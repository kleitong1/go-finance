import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import {
  Conteiner,
  Header,
  UserInfo,
  Photo,
  UserGreeting,
  UserName,
  User,
  UserContainer,
  Icon,
  HighlightCards,
  Transactions,
  Listagem,
} from "./styles";

export function Dashboard() {
  return (
    <Conteiner>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/kleitong1.png" }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Kleiton</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserContainer>
      </Header>

      <HighlightCards showsHorizontalScrollIndicator={false}>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 15.000,00"
          lastTansaction="Última entrada dia 02 de março"
        />

        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 5.000,00"
          lastTansaction="Última entrada dia 02 de março"
        />

        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 10.000,00"
          lastTansaction="Última entrada dia 02 de março"
        />
      </HighlightCards>

      <Transactions>
        <Listagem>Listagem</Listagem>

        <TransactionCard
          title="Desenvolvimento de Site"
          amount="R$ 12.000,00"
          category={{
            name: "Vendas",
            icon: "dollar-sign",
          }}
          date="23/03/2022"
        />
      </Transactions>
    </Conteiner>
  );
}
