import { Text, View, Link, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

import Styles from "./style";


export default function Index() {
  const [msg, setMsg] = useState("Loading...");
  const [lista, setLista] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const ip = '127.0.0.1'; // IP do servidor (localhost)

    // busca rota 1
    fetch(`http://${ip}:4000/dados`)
      .then(res => res.json())
      .then(json => setMsg(json.message));
    // busca rota 2
    fetch(`http://${ip}:4000/lista`)
      .then(res => res.json())
      .then(json => setLista(json));
    
    fetch(`http://${ip}:4000/usuarios`)
      .then(res => res.json())
      .then(json => setUsers(json));

  }, []); // o array vazio [] garante que o useEffect seja executado apenas uma vez, quando o componente for montado
  return (
    <View style={Styles.bg}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Rota Dados:</Text>
        <Text style={Styles.list}>{msg}</Text>
      </View>
      <View style={Styles.container}>
        <Text style={Styles.title}>Rota Lista:</Text>
        <View style={Styles.listContainer}>
          {lista.map(item => (
            <Text key={item.id} style={Styles.list}>{item.nome}</Text>
          ))}
        </View>
      </View>

      <View style={Styles.container}>
        <Text style={Styles.title}>Rota Usuários do Banco de Dados:</Text>
        <View style={Styles.usersContainer}>
          {users.map(user => (
            <Text key={user.id} style={Styles.list}>{user.name} - {user.email} - {user.status}</Text>
          ))}
        </View>
      </View>


    </View>
  );
}