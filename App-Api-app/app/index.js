import { useEffect, useState } from "react";
import { Text, View } from "react-native";

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <View>
        <Text style={{ fontWeight:'bold',}}> Rota Dados:</Text>
        <Text style={{ fontWeight:'bold' }}>{msg}</Text>
      </View>
      <View>
      <Text style={{ fontWeight:'bold',}}> Rota Lista:</Text>
      {lista.map(item => (
        <Text key={item.id}>{item.nome}</Text>
      ))}
      </View>
      

      <View>
        <Text>
          {lista.map(item => (
            <Text key={item.id}>-{item.nome}</Text>
          ))}
        </Text>
      </View>

    </View>
  );
}
