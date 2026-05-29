import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native"
import { Link } from "expo-router";


import styles from "./style.js";

export default function Index() {
  const [msg, setMsg] = useState("Carregando ...");
  const [lista, setLista] = useState([]);
  
  useEffect(() => {//useEffect e uma função que xecuta um codigo quando o componente
    const ip = "127.0.0.1";//Use o ip que funcionou nos testes anteriores

    //Busca pela rota 1 (Objeto)
    fetch(`http://${ip}:4000/dados`)
      .then((res) => res.json())
      .then(json => setMsg(json.message));

      //Busca pela rota 2 (Lista)
      fetch(`http://${ip}:4000/lista`)
        .then((res) => res.json())
        .then(json => setLista(json));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20,backgroundColor:'#EAEFEF' }}>

<TouchableOpacity style={styles.button}>
        <Link href="/bd" asChild>
          <Text>Banco de Dados</Text>
        </Link>
</TouchableOpacity>

<TouchableOpacity style={styles.button}>
        <Link href="/cadastro" asChild>
          <Text>Cadastro de Usuarios</Text>
        </Link>
</TouchableOpacity>


      <View>
        <Text style={styles.mensagem}>{msg}</Text>
      </View>


      <View style={styles.lista}>
      <Text style={styles.rotaLista}> Rota Lista:</Text>
      {lista.map(item => (
        
        <View style={styles.viewText1}>
        <Text key={item.id} style={styles.text}>{item.nome}</Text>
        </View>
  
      ))}
      </View>

    
    

      <View style={styles.lista}>
      <View>
        <Text style={styles.tituloRotaLista2}>{msg}</Text>
      </View>
        <Text>
          {lista.map(item => (
            <View style={styles.viewText2}>
            <Text key={item.id}  style={styles.text}>--{item.nome}</Text>
            </View>
          ))}
        </Text>
      </View>






    </View>
  );
}

