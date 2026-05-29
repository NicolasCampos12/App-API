import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Substitua pelo IP da sua máquina ou URL do servidor de produção
    fetch('http://localhost:8081/usuarios')
      .then((resposta) => resposta.json())
      .then((dados) => setUsuarios(dados))
      .catch((erro) => console.error(erro));
  }, []);

  return (
    <View>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
      />
    </View>
  );
}
