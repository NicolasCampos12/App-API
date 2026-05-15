import { useEffect, useState } from "react";
import { Text, View } from "react-native"

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



      <View>
        <Text style={{ fontWeight:'bold',fontSize:'1.15rem', }}>{msg}</Text>
      </View>


      <View style={{borderColor:'black', borderWidth:'2px', backgroundColor:'#BFC9D1',}}>
      <Text style={{ fontWeight:'bold',padding:'10px',fontSize:'1.25rem'}}> Rota Lista:</Text>
      {lista.map(item => (
        
        <View style={{display:'flex', justifyContent:'center', alignItems:'center',width:'400px',padding:'5px'}}>
        <Text key={item.id} style={{fontSize:'1.0015rem',width:'100%', textAlign:'center',padding:'5px',}}>{item.nome}</Text>
        </View>
  
      ))}
      </View>

      
      

      <View style={{borderColor:'black', borderWidth:'2px', backgroundColor:'#BFC9D1',}}>
      <View>
        <Text style={{ fontWeight:'bold',fontSize:'1.15rem', }}>{msg}</Text>
      </View>
        <Text>
          {lista.map(item => (
            <View style={{borderColor:'black', borderWidth:'1px', backgroundColor:'#BFC9D1',}}>
            <Text key={item.id}  style={{fontSize:'1.0015rem',width:'100%', textAlign:'center',padding:'5px',}}>-{item.nome}</Text>
            </View>
          ))}
        </Text>
      </View>






    </View>
  );
}

