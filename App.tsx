
import {  SafeAreaView, View, StyleSheet } from 'react-native';
import LandingPage from './app/screens/LandingPage';
import { CustomCard } from './app/components/cards';
import OrderPage from './app/screens/OrderPage';
import{ ViewImages} from './app/components/cards';
import MessagesScreen from './app/screens/MessagesScreen';
import { IconComponent } from './app/components/icon';


export default function App() {
  return (
    <View style={{flex: 1}}>
    
      {/* <LandingPage/> */}
      <OrderPage/>
      {/* <ViewImages/> */}
      {/* <MessagesScreen/> */}
      {/* <IconComponent name='email'/> */}
      
    </View>
    
  );
}

