import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Cesta from './src/screens/Cesta';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [fontLoad] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  // verificando se a fonte foi carregada
  if(!fontLoad){
    //mantém a splash enquanto o app carrega
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
