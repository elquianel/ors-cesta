import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }){
    let estilo = estilos.text;

    if(style?.fontWeight === 'bold'){
        estilo = estilos.textBold;
    }

    return <Text style={[style, estilo ]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    text: {
        fontFamily: "MontserratRegular",
        fontWeight: 'normal'
    },

    textBold: {
        fontFamily: "MontserratBold",
        fontWeight: 'normal'
    }
});
