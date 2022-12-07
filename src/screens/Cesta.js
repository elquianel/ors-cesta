import React from 'react';
//a utilização de chaves é quando um componente é exportado
import { Text, Image, StyleSheet, Dimensions, View } from 'react-native';
import topo from './../../assets/topo.png';
import logoFarm from './../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    //as tags juntas são fragmentos
    return <>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.title}>Detalhe da Cesta</Text>

            <View style={estilos.cesta}>
            <Text style={estilos.name}>Cesta de Verduras</Text>
            
            <View style={estilos.fazenda}>
            <Image source={logoFarm} style={estilos.imageFarm} />
            <Text style={estilos.nameFarm}>Jenny Jack Farm</Text>

            </View>

            <Text style={estilos.description}>Uma cesta com produtos selecionados cuidadosamente
            da fazenda direto para sua cozinha</Text>
            <Text style={estilos.price}>R$ 40.00</Text>
            </View>
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
    
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold"
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
        fontFamily: "MontserratRegular"
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
    }
});