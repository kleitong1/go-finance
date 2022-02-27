import React from "react";
 

import { 
    Conteiner, 
    Header,
    UserInfo,
    Photo,
    UserGreeting,
    UserName,
    User,
    UserContainer,
    Icon


} from "./styles";

export function Dashboard (){
    return (
        <Conteiner>
            
            <Header>
                <UserContainer>
                <UserInfo>
                  <Photo 
                  source={{uri: 'https://github.com/kleitong1.png' }}
                  />
                  <User>
                      <UserGreeting>Olá, </UserGreeting>
                      <UserName>Kleiton</UserName>
                  </User>

                </UserInfo>

                <Icon name="power" />
                </UserContainer>
                
            </Header>


        </Conteiner>
    )
}

