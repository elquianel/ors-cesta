import React from "react";
import { Image, View, Text, StyleSheet } from 'react-native';
import Texto from '../../../components/Text';
import logoFarm from './../../../../assets/logo.png';

export default function Details({ nome, logoFazenda, nomeFazenda, descricao, preco }){
    return <>
        <Texto style={estilos.name}>{nome}</Texto>
            <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imageFarm} />
            <Text style={estilos.nameFarm}>{nomeFazenda}</Text>
            </View>
            <Text style={estilos.description}>{descricao}</Text>
            <Text style={estilos.price}>{preco}</Text>
    </>
}


const estilos = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: 'bold',
    },

    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },

    imageFarm: {
        width: 32, 
        height: 32,
    },

    nameFarm:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },

    description:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },

    price:{
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },

});