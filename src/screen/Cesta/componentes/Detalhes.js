// Imports
import React from "react";
import { StyleSheet,Image,View,TouchableOpacity } from "react-native";

// Componentes
import Texto from "../../../componentes/Texto"
import Botao from "../../../componentes/Botao"

export default function Detalhes({nome,logoFazenda,nomefazenda,descricao,preco,botao}){
   return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.logoFazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomefazenda}</Texto>
        </View>
            
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        <Botao style={estilos.botao}>{botao}</Botao>
    </>
}


// Estilos
const estilos = StyleSheet.create({
    nome:{
        fontSize:26,
        lineHeight:42,
        color:"#464646",
        fontWeight:"bold",
    },
    fazenda:{
        flexDirection:"row",
        gap:10,
        marginBottom:8,
    },
    logoFazenda:{
        width:32,
        height:32,
        
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
    },
    descricao:{
        color: "#a3a3a3",
        fontSize:16,
        lineHeight:26,
    },
    preco:{
        color:"#2a9f",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8,
    },
    botao:{
        marginTop:16,
    },
    
})