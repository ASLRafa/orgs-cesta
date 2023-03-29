// Imports
import React from "react";
import {StyleSheet, View,FlatList} from "react-native";

// Componentes
import Topo from "../Cesta/componentes/Topo"
import Detalhes from "../Cesta/componentes/Detalhes"
import Item from "../Cesta/componentes/Item"
import Texto from "../../componentes/Texto"


export default function Cesta({topo,detalhes,itens}){
    return <>
    
    <FlatList 
    data={itens.lista}
    renderItem = {Item}
    keyExtractor = {({nome}) => nome}
    ListHeaderComponent={() =>{
        return <>
            {/* Topo da pagina */}
            <Topo {...topo} />
            <View style={estilos.cesta}>
            {/* Detalhes */}
            <Detalhes {...detalhes} />
            <Texto style={estilos.titulo}>{itens.titulo}</Texto>
            </View>
                </>
    }}
    /> 


        
        
    </>
}

// Estilos
const estilos = StyleSheet.create({
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,

    },
    titulo:{
        color:"#464646",
        fontWeight:"bold",
        marginTop:32,
        marginBottom:10,
        fontSize:20,
        lineHeight:32,
    },
})