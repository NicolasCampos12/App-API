import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity,TextInput } from "react-native"
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20, backgroundColor: '#EAEFEF' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <TextInput placeholder="Nome" style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, width: 200 }} />

                <TextInput placeholder="Email" style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, width: 200 }} />

                <TextInput placeholder="Telefone" keyboardType="numeric" style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, width: 200 }} />

                <TextInput placeholder="Senha" secureTextEntry={true} style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, width: 200 }} />

                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Cadastrar</Text>
                </TouchableOpacity>
            </View>



        </View>
    );
}

