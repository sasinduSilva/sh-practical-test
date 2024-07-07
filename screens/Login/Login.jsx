import { StyleSheet,
  Text,
   View,
   TextInput,
   TouchableOpacity
  } from 'react-native'
import React,{useEffect,useState} from 'react'
import { dispatch } from "../../app/store";
import { login } from "../../reducers/userSlice";
import UserService from "../../services/UserService";
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import {TOKEN_KEY} from '@env';
import AsyncStore from '../../app/AsyncStore';




const Login = ({navigation}) =>{
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");


 const handleLogin = async () =>{
     try {
         
         const loginResult = await UserService.login({
             username: email,
             password:password,
         });
         console.log("loginResult");
         console.log(loginResult);

         if(loginResult?.token){
             dispatch(
                 login({
                     isLoggedIn: true,
                     ...loginResult,
                 })
             );

             await AsyncStore.saveItem(JSON.stringify(TOKEN_KEY),loginResult.token);
         }else{
             alert("login failled");
         }
     } catch (error) {
         console.log(error);
     }
 }

 return (
     <View style={styles.container}>
       <Text style={styles.title}>Practical Test</Text>
       
       <View style={styles.inputContainer}>
         <Ionicons name="person-outline" size={24} color="black" />
         <TextInput onChangeText={(text) => setEmail(text)} placeholder="Username" style={styles.input} />
       </View>
 
       <View style={styles.inputContainer}>
         <Ionicons name="lock-closed-outline" size={24} color="black" />
         <TextInput onChangeText={(text) => setPassword(text)} placeholder="Password" style={styles.input} secureTextEntry />
       </View>
 
       <TouchableOpacity style={styles.button} onPress={handleLogin}>
         <Text style={styles.buttonText}>Log In</Text>
       </TouchableOpacity>
 
       <Text style={styles.forgotPassword}>Forgot Password?</Text>
       <Text style={styles.termsAndConditions}>Terms and Conditions</Text>
     </View>
   );

}

const styles = StyleSheet.create({
 container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fff',
     padding: 20,
   },
   title: {
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom: 20,
   },
   inputContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     borderWidth: 1,
     borderColor: '#e0e0e0',
     borderRadius: 10,
     padding: 10,
     marginVertical: 10,
     width: '100%',
     backgroundColor: '#f5f5f5',
   },
   input: {
     flex: 1,
     marginLeft: 10,
     fontSize: 16,
   },
   button: {
     backgroundColor: '#34C759',
     paddingVertical: 15,
     borderRadius: 10,
     width: '100%',
     alignItems: 'center',
     marginVertical: 10,
   },
   buttonText: {
     color: '#fff',
     fontSize: 16,
     fontWeight: 'bold',
   },
   forgotPassword: {
     color: '#a0a0a0',
     marginTop: 10,
   },
   termsAndConditions: {
     position: 'absolute',
     bottom: 10,
     color: '#a0a0a0',
   },
});

export default Login;