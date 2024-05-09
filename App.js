import { LinkingContext } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";

export default function App() {

  const [moedas, definirMoedas] = useState();

  useEffect(function() {
    const ObterMoedas = async function() {
      const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";
      const resultado = await axios.get(url);
      const dados = resultado.data;
      definirMoedas(dados.used);
    }
    ObterMoedas();
  }, [])

  return <SafeAreaView style={Style.tela}>
    <StatusBar barStyle={LinkingContext} />

    <Text style={Style.titulo}>💵💵💴CONVERTER💶💷💸🤑</Text>
    <View style={Style.tabela}>
      <Text style={Style.tabelaTitulo}>Dólar</Text>
      <Text> USD 1,00</Text>
    </View>
    <View style={Style.tabela}>
      <Text style={ Style.tabelaTitulo}>Reais</Text>
      <Text>BRL { moedas ? moedas.br: 0}</Text>
    </View>
    <View style={Style.tabela}>
      <Text style={ Style.tabelaTitulo}>Bitcoin</Text>
      <Text>BTC { moedas ? moedas.btc: 0}</Text>
    </View>
    <View style={Style.tabela}>
      <Text style={ Style.tabelaTitulo}>Euro</Text>
      <Text>EUR { moedas ? moedas.beurr: 0}</Text>
    </View>
    <View style={Style.tabela}>
      <Text style={ Style.tabelaTitulo}>Libra Esterlina</Text>
      <Text>GBP { moedas ? moedas.gbp: 0}</Text>
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