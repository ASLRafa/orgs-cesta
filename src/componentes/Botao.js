import React from "react";
import { StyleSheet,TouchableOpacity } from "react-native";
import Texto from "./Texto"


export default function Botao({children,style}){
   return<>
        <TouchableOpacity style={[style,estilos.botao]}>
            <Texto style={estilos.textobotao}>{children}</Texto>
        </TouchableOpacity>
    </> 
}

const estilos = StyleSheet.create({
    botao:{
        backgroundColor:"#2a9f85",
        paddingVertical:16,
        borderRadius:6,

    },
    textobotao:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
        lineHeight:26
    }
})