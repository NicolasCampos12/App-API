import { useEffect, useState,  } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native"
import { Link } from "expo-router";
import { useRouter } from "expo-router";


import styles from "./style.js";

export default function Index() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [pass, setPass] = useState('');


   const handleCadastro = () => {
    // Altere o IP conforme o seu ambiente (10.0.2.2 para emulador Android)
    const ip = '127.0.0.1'; 

    // Dispara a requisição de cadastro para a rota POST
    fetch(`http://${ip}:4000/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        telefone: telefone,
        pass: pass
      })
    })
    .then(async res => {
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Erro desconhecido');
      return json;
    })
    .then(data => {
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      router.back(); 
    })
    .catch(err => {
      Alert.alert('Erro', err.message);
      console.error(err);
    });
  };



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20, backgroundColor: '#EAEFEF' }}>
            
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <TextInput placeholder="Nome" value={name}  onChangeText ={setName}  style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, width: 200 }} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <TextInput placeholder="Email" value={email} onChangeText ={setEmail} style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, width: 200 }} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <TextInput placeholder="Telefone" value={telefone} onChangeText ={setTelefone} keyboardType="numeric" style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, width: 200 }} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <TextInput placeholder="Senha" value={pass} onChangeText ={setPass} secureTextEntry={true} style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, width: 200 }} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

