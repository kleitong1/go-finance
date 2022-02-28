import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; /* yarn add react-native-responsive-fontsize */
/* import theme from "../../global/styles/theme"; */
import { Feather } from '@expo/vector-icons'; // importando icones

// crase = literal string. 

export const Conteiner = styled.View` 
    
    flex: 1;
    /* justify-content: center;
    align-items: center;  */
    
    background-color: ${({ theme }) => theme.cores.fundo};
    

`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;  /* yarn add react-native-responsive-fontsize */

    
    background-color: ${({theme}) => theme.cores.primario};
    justify-content: center;
    align-items: center;

`;

    export const UserContainer = styled.View`
        width: 100%;

        
        /* cima-baixo 0  esquerda-direita 24 */

        padding: 0 24px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `;
    
    export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;

    
    
    `;


    export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
    `;



    export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.cores.forma };
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular };

    
    `;

    export const UserName = styled.Text`
    color: ${({ theme }) => theme.cores.forma };
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold };
    `;
    


    export const User = styled.View`
    margin-left: 17px;
    `;


    export const Icon = styled(Feather)`
    color: ${({theme}) => theme.cores.secundario};
    font-size: ${RFValue(24)};
    
    
    `;

export const HighlightCards = styled.ScrollView.attrs({
        horizontal: true,
        showsHorizontalScrollIndicator: false,
        contentContainerStyle: { paddingHorizontal: 24 }
})`
    
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(30)}px;

`;

//  export const Texto = styled.Text`
//      font-family: ${({theme}) => theme.fonts.bold};
//      color:  ${({theme}) => theme.cores.texto};
//      font-size: 24px;
//      font-weight: bold;


//  `;


