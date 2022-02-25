import styled from "styled-components/native";

// crase = literal string. 

export const Conteiner = styled.View` 
    
    flex: 1;
    justify-content: center;
    align-items: center; 
    
    background-color: ${({ theme }) => theme.cores.fundo};
    

`;

export const Texto = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color:  ${({theme}) => theme.cores.texto};
    font-size: 24px;
    font-weight: bold;


`;

