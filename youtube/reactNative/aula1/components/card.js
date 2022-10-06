import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card(msg)
{
    return (
        <View style={styles.card}>
          <Text style={styles.titulo}>Post: User 01</Text>
          <Text style={styles.mensagem}>Canal Dev Net Core com muitas inovações</Text>

        </View>
      );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 10,
        borderWidth: 1,
        padding: 4,
        margin: 2,
        borderColor: 'gray',
        width: 320,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgb(214,72,41)'
    },
    titulo:{
        fontSize: 16,
        textAlign: 'center'
    },
    mensagem:{
        fontSize: 12,
        fontWeight: 'normal',
        textAlign: 'center'
    },

  });