import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import axios from "axios";

export default function App() {

  const [norris, definirNorris] = useState();

  useEffect(function() {
    const ObterConselho = async function() {
      const url = "https://api.chucknorris.io/jokes/random";
      const resultado = await axios.get(url);
      const dados = resultado.data;
      console.log(resultado);
      definirNorris(dados.value);
    }
    ObterConselho();
  }, [])

  return <SafeAreaView style={Style.tela}>
    <StatusBar barStyle={"light-content"} />

    <Text style={Style.titulo}>💵💵💴Chuck Norris💶💷💸🤑</Text>
    <View style={Style.tabela}>
      <Text style={Style.tabelaTitulo}>Conselho do Chuck Norris</Text>
      <Text> {norris} </Text>
    </View>
  </SafeAreaView>
};

const Style = StyleSheet.create({
  tela: {
    backgroundColor: "#A3C9AA",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  titulo: {
    color: "#12372A",
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 16,
  },
  tabela: {
    backgroundColor: "#FFF3CF",
    borderRadius: 16,
    margin: 8,
    padding: 16,
  },
  tabelaTitulo: {
    fontSize: 20,
  }
});