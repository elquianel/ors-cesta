import React from 'react';
//a utilização de chaves é quando um componente é exportado
import { StyleSheet, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Texto from '../../components/Text';
import Details from './components/Details';
import Topo from './components/Topo';
import Item from './components/Item';

export default function Cesta({ topo, detalhes, itens }){
    //as tags juntas são fragmentos
    return <>
            <FlatList 
            data={itens.lista} 
            renderItem={Item} 
            keyExtractor={({nome}) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                    <Details {...detalhes} />
                    <TouchableOpacity style={estilos.button}>
                        <Texto style={estilos.textButton}>Comprar</Texto>
                    </TouchableOpacity>
                    <Texto style={estilos.title}>Itens</Texto>
                    </View>
                </>
            }}
            />


        </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    button: {
        marginTop: 10,
        backgroundColor: "#2A9f85",
        paddingVertical: 16,
        borderRadius: 6,
    },

    textButton: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    },

    title:{
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
});