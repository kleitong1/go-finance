import styled, {css} from "styled-components/native";
import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`



    background-color: ${({ theme, type }) => 
    type === 'total' ? theme.cores.forma : theme.cores.secundario};

    
    width: ${RFValue(300)}px;
    border-radius: 7px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;

    
    margin-right: 24px;
    height: 250px;


`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    
`;


export const Title = styled.Text<TypeProps>`
    font-family: ${({theme})=> theme.fonts.medium};
    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.cores.text_dark};

`;

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
  

  ${({ type }) => type === 'up' && css` /* == analisa conteudo, === analisa conteudo e tipo */
    color: ${({theme}) => theme.cores.titulo};

  `};

  ${({ type }) => type === 'down' && css` /* == analisa conteudo, === analisa conteudo e tipo */
    color: ${({theme}) => theme.cores.atencao};

  `};

  ${({ type }) => type === 'total' && css` /* == analisa conteudo, === analisa conteudo e tipo */
    color: ${({theme}) => theme.cores.forma};

  `};

`;


 

export const Footer = styled.View``;



export const Amount = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.cores.text_dark};

    margin-top: 38px;


`;


export const LastTransaction = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular}; ;
    font-size: ${RFValue(12)}px;

    color: ${({theme}) => theme.cores.texto};

`;


