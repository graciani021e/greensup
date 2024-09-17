// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importar suas telas
import Tela1 from './screens/Tela1';
import Tela2 from './screens/Tela2';
import Tela3 from './screens/Tela3';
import Teladecadastro from './screens/Teladecadastro';
import Teladelogin from './screens/Teladelogin';
import Teladeinicio from './screens/Teladeinicio';
import Teladomenu from './screens/Teladomenu';
import Teladoperfil from './screens/Teladoperfil';
import Telatrocaemail from './screens/Telatrocaemail';
import Telatrocasenha from './screens/Telatrocasenha';
import Teladeajuda from './screens/Teladeajuda';
import TelainfoGUP from './screens/TelainfoGUP';
import TelaOqegup from './screens/TelaOqegup';
import Telacomousar from './screens/Telacomousar';
import Telapqcriamos from './screens/Telapqcriamos';
import Telateste from './screens/Telateste';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Teladecadastro"
        screenOptions={{ headerShown: true }}
      >
      <Stack.Screen name="Teladecadastro" component={Teladecadastro}  options={{ title: 'Tela de cadastro' }} />
      <Stack.Screen name="Teladelogin" component={Teladelogin} options={{ title: 'Tela de login'}} />
      <Stack.Screen name="Teladomenu" component={Teladomenu} />
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Telateste" component={Telateste} />
        <Stack.Screen name="Telapqcriamos" component={Telapqcriamos} />
        <Stack.Screen name="Telacomousar" component={Telacomousar} />
        <Stack.Screen name="TelaOqegup" component={TelaOqegup} />
         <Stack.Screen name="Teladoperfil" component={Teladoperfil} />
         <Stack.Screen name="TelainfoGUP" component={TelainfoGUP} />
         <Stack.Screen name="Telatrocaemail" component={Telatrocaemail} />
         <Stack.Screen name="Telatrocasenha" component={Telatrocasenha} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Teladeajuda" component={Teladeajuda} />
        <Stack.Screen name="Teladeinicio" component={Teladeinicio} options={{ title: 'Teladeinicio'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//const Stack = createNativeStackNavigator();
//export default function App() {
//  return (
 //   <NavigationContainer>
 //     <Stack.Navigator initialRouteName="teladelogin">
 //     <Stack.Screen name="Teladelogin" component={Teladelogin} options={{ title: 'Tela de login'}} />
 //       <Stack.Screen name="Teladecadastro" component={Teladecadastro}  options={{ title: 'Tela de cadastro' }} />
 //       <Stack.Screen name="TabuadaDo3" component={TabuadaDo3} options={{ title: 'Tabuada do 3'}} />
 //     </Stack.Navigator>
 //   </NavigationContainer>
//  );
//}
export default AppNavigator;
