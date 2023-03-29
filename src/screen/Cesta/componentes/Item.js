import React from "react";
import { View,Image,StyleSheet, FlatList} from "react-native";

import Texto from "../../../componentes/Texto"

export default function Item({item:{nome,imagem}}){

    return <View key={nome} style={estilos.item}>
    <Image style={estilos.imagem} source={imagem} />
    <Texto style={estilos.nome} >{nome}</Texto>
    </View>

}

const estilos = StyleSheet.create({
    item:{
        paddingVertical:16,
        marginHorizontal:16,
        flexDirection:"row",
        borderBottomWidth:2,
        borderBottomColor:"#ececec",
        paddingVertical:16,
        alignItems:"center",
        gap:10,
    },
    imagem:{
        width:46,
        height:46,
    },
    nome:{
        fontSize:16,
        lineHeight:26,
        color:"#464646",
    }
})