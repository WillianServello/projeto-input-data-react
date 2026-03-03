import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Index() {

  const [count, setCount] = useState(1);
  const [signal, setSignal] = useState(false);
  const [array, setArray] = useState<number[]>([]);

  //     chamando por contador e a setContador seria minha variavél para atribuir valor
  const [contador, setContador] = useState(1); // isso daqui é pra conseguir contar
  const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState<{}[]>([]);
  const [ativoPlaceHolder, setAtivoPlaceHolder] = useState(false);

  const agora = new Date();

  const novoItem = {
    Id: contador,
    Tarefa: inputValue,
    Data: agora.toLocaleString(),
    GOW: "DESTUA O TEMPLOS DE ATENAS",
  };

  function appendInput() {


    setInputList([...inputList, novoItem]);
    setContador(contador + 1)
    setInputValue("");
  }



  function changeSignal() {
    setSignal(!signal);
  }

  function append() {
    setArray([...array, count]);
    setCount(count + 1);
  }

  function increase() {
    console.log("Clicado!: " + count);
    setCount(count + 1);
  }

  useEffect(() => {
    //append();
    //console.log("Ola mundo");
    //console.log("Efeito executado com count:", count);
  }, []);

  return (

    <View style={styles.background}>
      <ScrollView style={styles.conteinerScroll}>


        <View style={styles.conteinerPrincipal} >

          <View style={styles.conteiterConteudoCenter}>


            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
              {/*CAIXA DO INPUT PARA RECEBER OS DADOS */}
              <TextInput value={inputValue}
                onChangeText={setInputValue}
                placeholder={ativoPlaceHolder ? "" : "Informe a Tarefa"}

                //O focus faz com que o Placeholder desapareça quando eu clico nele
                onFocus={() => setAtivoPlaceHolder(true)}

                //O blur faz com que o Placeholder fique aparecendo quando eu não interajo com ele, então ele fica false
                onBlur={() => setAtivoPlaceHolder(false)}

                placeholderTextColor="#999"
                style={styles.conteinerItensCenter} />


              {/*BOTÃO ADICIONAR PARA ENVIAR OS DADOS*/}
              <TouchableOpacity onPress={appendInput} style={styles.boxAdicionar}>
                <Text style={{ color: "white" }}>
                  Adicionar Tarefa
                </Text>
              </TouchableOpacity>

            </View>

            <View style={styles.conteinerTarefa}>

              <Text style={{color: "white"}}>
                {JSON.stringify(inputList, null, 2)}
              </Text>

            </View>
          </View>

        </View>
      </ScrollView>

      <View style={styles.LinkContainer}>
        <View style={{ width: "50%" }}>
          <Link href="/earless" style={styles.Link}  >
            <AntDesign name="api" size={30} color="white" />
          </Link>
        </View>
        <View style={{ width: "50%" }}>
          <Link href="/earless" style={styles.Link}  >
            <EvilIcons name="user" size={30} color="white" />
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  background: {
    padding: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "#1c2128",
  },
  conteinerPrincipal: {

    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  conteinerItensCenter: {
    width: 40,
    height: 40,
    maxWidth: 100,
    minWidth: 180,
    padding: 10,
    borderColor: "#444",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#282828",
    color: "white",
  },

  conteinerScroll: {
    flexGrow: 1,
  },

  conteiterConteudoCenter: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#282828",
    width: "100%",
    maxWidth: 500,
    borderRadius: 10,
    marginTop: 20,
    padding: 20
  },
  boxAdicionar: {
    borderRadius: 5,
    marginLeft: 10,
    padding: 20,
    backgroundColor: "#2c2c2c"
  },

  conteinerTarefa: {
    borderWidth: 0.1,
    borderColor: "#444",
    marginTop: 20,
    width: "100%",
    borderRadius: 5,

    padding: 10,
    backgroundColor: "#282828"
  },

  caixaTexto: {
    borderColor: "#444",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },

  textoCor: {
    fontSize: 20,
    color: "white",
  },

  LinkContainer: {
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#282828",
    marginBottom: 25


  },
  Link: {
    flexDirection: "row",
    textAlign: "center",
    padding: 20,
    color: "white",

  },
});
