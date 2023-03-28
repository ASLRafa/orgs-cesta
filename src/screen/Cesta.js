import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import topo from "../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhe da Cesta</Text>
    
    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados
             cuidadosamente da fazenda direto para
              sua cozinha</Text>
              <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    topo:{
        width:"100%",
        height: 578 / 768 * width,
    },
    titulo:{
        width:"100%",
        position:"absolute",
        textAlign:"center",
        fontSize:16,
        lineHeight:26,
        color:"white",
        fontWeight:"bold",
        padding:16,
    },
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,

    },
    nome:{
        fontSize:26,
        lineHeight:42,
        color:"#464646",
        fontWeight:"bold",
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26
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
    }
})