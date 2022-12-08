import React from "react";
import Texto from '../../../components/Text';
import { Image, View, StyleSheet, FlatList } from 'react-native';

export default function Item({ item: {nome, imagem}}){
    return <View style={estilos.item}>
    <Image source={imagem} style={estilos.image}/>
    <Texto style={estilos.titleFruit}>{nome}</Texto>
    </View>

    // return <>
    //     <Texto style={estilos.title}>{ titulo }</Texto>
    //     <FlatList data={lista} renderItem={renderItem} keyExtractor={({nome}) => nome } />

    //     {/* { lista.map(({nome, imagem}) => {
    //         return <View key={nome} style={estilos.item}>
    //         <Image source={imagem} style={estilos.image}/>
    //         <Texto style={estilos.titleFruit}>{nome}</Texto>
    //         </View>   
    //     }) } */}
    // </>
}


const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 16
    },

    image: {
        width: 46,
        height: 46
    },

    titleFruit: {
        color: "#464646",
        marginLeft: 10,
        fontSize: 16,
        lineHeight: 26,
    }
});
