import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue",
      }}
    >
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />
      <Text style={{ padding: 10, fontSize: 30 }}>
        {JSON.stringify(inputList, null, 2)}
      </Text>
      <TouchableOpacity
        onPress={appendInput}
        style={{ padding: 20, backgroundColor: "black", borderRadius: 10 }}
      >
        <Text style={{ color: "white" }}>Clique em mim</Text>
      </TouchableOpacity>
    </View>
  );
}
