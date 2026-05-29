import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import styles from "./style.js";

export default function Index() {
  const [msg, setMsg] = useState("Carregando...");
  const [lista, setLista] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erroInterface, setErroInterface] = useState("");

  useEffect(() => {
    const ip = "127.0.0.1"; 

    fetch(`http://${ip}:4000/usuarios`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro do servidor: Código ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setLista(json);
        setMsg("Dados carregados com sucesso!");
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro na requisição:", err.message);
        setErroInterface(`Falha de conexão: ${err.message}. Verifique o IP.`);
        setCarregando(false);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20, backgroundColor: '#EAEFEF', padding: 20 }}>
      

 <View style={styles.lista}>
      <View>
        <Text style={styles.tituloRotaLista2}>{msg}</Text>
      </View>
        <Text>
          {lista.map(item => (
            <View style={styles.viewText1}>
            <Text key={item.id}  style={styles.text}>{item.name || item.nome }</Text>
            </View>
          ))}
        </Text>
  </View>




    </View>
  );
}
