import { Stack } from "expo-router";
import {HeaderTitle} from "expo-router";
import { StackScreen } from "react-native-screens";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
    name="index"
    options={{
      title:"Lista de Dados",
      headerTitleAlign:"left",
      headerTintColor:"white",

      headerStyle:{
        backgroundColor:'#25343F'
      }
    }}
  
  />


  </Stack>
}
