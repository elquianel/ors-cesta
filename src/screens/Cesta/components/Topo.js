import React from "react";
import { Image, StyleSheet, Dimensions } from 'react-native';
import Texto from './../../../components/Text';
import topo from './../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }){
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.title}>{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },

    title: {
        position: 'absolute',
        textAlign: 'center',
        width: "100%",
        lineHeight: 26,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
});