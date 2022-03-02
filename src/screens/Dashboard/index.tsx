import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

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
          title="Entradas"
          amount="R$ 15.000,00"
          lastTansaction="Última entrada dia 02 de março"
        />

        <HighlightCard
          title="Saídas"
          amount="R$ 5.000,00"
          lastTansaction="Última entrada dia 02 de março"
        />

        <HighlightCard
          title="Total"
          amount="R$ 10.000,00"
          lastTansaction="Última entrada dia 02 de março"
        />
      </HighlightCards>
    </Conteiner>
  );
}
