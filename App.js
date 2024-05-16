import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Button} from "react-native";
import axios from "axios";

export default function App() {

  const [norris, definirNorris] = useState();
  const [recarregar, definirRecarregar] = useState(false);

  function Refresh(){
    definirRecarregar(!recarregar);
  }

  useEffect(function() {
    const ObterConselho = async function() {
      const url = "https://api.chucknorris.io/jokes/random";
      const resultado = await axios.get(url);
      const dados = resultado.data;
      definirNorris(dados.value);
    }
    ObterConselho();
  }, [recarregar]); 
// eas build --platform android
  return <SafeAreaView style={Style.tela}>
    <StatusBar barStyle={"light-content"} />

    <Text style={Style.titulo}>Chuck Norris</Text>
    <View style={Style.tabela}>
      <Text style={Style.tabelaTitulo}>Conselho do Chuck Norris</Text>
      <Text> {norris} </Text>
    </View>
    <Button 
      onPress={Refresh}
      title="Aperte para uma nova mensagem reveladora de Chuck Norris"
      color="#841584"
    /> 

  </SafeAreaView>
};
// eas build -p android--profile preview
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