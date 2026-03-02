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
      

      
      <ScrollView contentContainerStyle={styles.conteinerScroll} showsVerticalScrollIndicator={true} indicatorStyle="white">
        <View style={{  alignItems: "center", justifyContent: "center", backgroundColor: "#282828",  width: 500, borderRadius: 10, marginTop: 20, padding: 20 }}>
          <View style={{ flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}>
             <TouchableOpacity
                onPress={appendInput}
                style={{padding: 20, marginLeft: 10, backgroundColor: "#2c2c2c",  borderRadius: 5 }}
              >
            <Text style={{ color: "white" }}>Adicionar Tarefa</Text>
          </TouchableOpacity>

          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.conteinerItensCenter}
          />
          </View>
          
          <View style={{borderWidth: 0.1, borderColor: "#444", marginTop: 20, width: "100%", borderRadius: 5, backgroundColor: "#282828" }}>
            <Text style={{ padding: 10, fontSize: 20, color: "white", }}>
            {JSON.stringify(inputList, null, 2)}
          </Text>
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

    conteinerScroll: {
      flexGrow: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    
    conteinerItensCenter: {
      width: 200,
      height: 40,
      padding: 20,
      borderWidth: 0.1,
      borderColor: "#444",
      marginBottom: 10,
      borderRadius: 5,
      backgroundColor: "#282828",
      color: "white",
    },

    LinkContainer:{
      marginTop: 20,
      borderRadius: 10,
      flexDirection: "row",
      backgroundColor: "#282828",
      alignItems: "center",
      justifyContent: "center",
    },
    Link: {
      flexDirection: "row",
      textAlign: "center",
      padding: 20,
      color: "white",
    },
});
