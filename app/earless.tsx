import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Link } from "expo-router";
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Earless() {
    //tentar replicar a lista do outro lado usando minha logica!


    // valor é onde é guardado a variavel, e o setarValor é o novo valor que vai ser agregado. O useState é o valor inicial do valor

    type Item = {
        Id: number,
        Titulo: string
        Data: string
        Horas: string
    }
    const [valor, setarValor] = useState("")

    const [lista, setarLista] = useState<Item[]>([]);

    // Isso daqui vai mudar o estado do placeholder
    const [ativoPlaceHolder, setAtivoPlaceHolder] = useState(false);

    const novoItem: Item = {
        Id: lista.length + 1,
        Titulo: valor,
        Data: new Date().toLocaleDateString(),
        Horas: new Date().toLocaleTimeString(),
    }

    function entrada(){
        if (!valor.trim()) {
        alert("Campo obrigatório");
        return;
        }

        setarLista([...lista, novoItem])
        setarValor("");
    }


    return (
        <View style={styles.background}>

            <View style={styles.conteinerPrincipal} >

                <View style={styles.conteiterConteudoCenter}>
                    

                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        {/*CAIXA DO INPUT PARA RECEBER OS DADOS */}
                        <TextInput value={valor} onChangeText={setarValor} 
                        placeholder={ativoPlaceHolder ? "" : "Informe a Tarefa"} 

                        //O focus faz com que o Placeholder desapareça quando eu clico nele
                        onFocus={() => setAtivoPlaceHolder(true)}
                        
                        //O blur faz com que o Placeholder fique aparecendo quando eu não interajo com ele, então ele fica false
                        onBlur={() => setAtivoPlaceHolder(false)}

                        placeholderTextColor="#999" 
                        style={styles.conteinerItensCenter}/>
                        

                        {/*BOTÃO ADICIONAR PARA ENVIAR OS DADOS*/}
                        <TouchableOpacity onPress={entrada} style={styles.boxAdicionar}>
                            <Text style={{color: "white"}}>
                                Adicionar Tarefa
                            </Text>
                        </TouchableOpacity>
                    
                    </View>

                    <View style={styles.conteinerTarefa}>
                        
                            
                            {lista.map((item) => (
                                <View style={styles.caixaTexto} key={item.Id}>
                                    <Text style={styles.textoCor}>ID: {item.Id}</Text>
                                    <Text style={styles.textoCor}>Titulo: {item.Titulo}</Text>
                                    <Text style={styles.textoCor}>Data: {item.Data}</Text>
                                    <Text style={styles.textoCor}>Horas: {item.Horas}</Text>
                                </View>
                            ))}

                        
                    </View>
                </View>

            </View>

            {/* FOOTER BAR PARA REDIRECIONAMENTO DE PAGINAS */}
            <View style={styles.LinkContainer}>
                <View style={{ width: "50%" }}>
                    <Link href="/" style={styles.Link}  >
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
      width: 200,
      height: 40,
      padding: 10,
      borderColor: "#444",
      borderWidth: 1,
      marginBottom: 10,
      borderRadius: 5,
      backgroundColor: "#282828",
      color: "white",
    },
    
    conteiterConteudoCenter: {
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "#282828",  
        width: 500, borderRadius: 10, 
        marginTop: 20, 
        padding: 20 
    },
    boxAdicionar: {
        borderRadius: 5,
        marginLeft: 10,
        padding: 20,
        backgroundColor: "#2c2c2c"
    },

    conteinerTarefa:{
        borderWidth: 0.1, 
        borderColor: "#444", 
        marginTop: 20,
        width: "100%",
        borderRadius: 5, 
        padding: 20,
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

    LinkContainer:{
      marginTop: 20,
      borderRadius: 10,
      flexDirection: "row",
      backgroundColor: "#282828",
      
      
    },
    Link: {
      flexDirection: "row",
      textAlign: "center",
      padding: 20,
      color: "white",
      
    },
});
