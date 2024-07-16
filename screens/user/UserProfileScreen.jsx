import React,{useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider, useSelector } from 'react-redux';
import { dispatch } from "../../app/store";
import { logout } from '../../reducers/userSlice';
import UserService from '../../services/UserService';
import {TOKEN_KEY} from '@env';
import AsyncStore from '../../app/AsyncStore';

const UserProfileScreen = ({ navigation }) => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const designation = useSelector((state) => state.user.designation);
  const office = useSelector((state) => state.user.office);
  const gender = useSelector((state) => state.user.gender);
  const contact = useSelector((state) => state.user.contact);
  const uni = useSelector((state) => state.user.university);
  const image = useSelector((state) => state.user.image);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(()=>{
    console.log("printing user");
    console.log(firstName);
  },[])
  
  const onLogoutPress = async () =>{
    try {
      await AsyncStore.removeItem(JSON.stringify(TOKEN_KEY));
      dispatch(
        logout()
      );
    } catch (error) {
      console.log(error);
      Alert("alert removing token when logging out");
    }
    
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: image }} // replace with actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>{firstName+" "+lastName}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Designation</Text>
          <Text style={styles.info}>{designation}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Works At</Text>
          <Text style={styles.info}>{office}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.info}>{gender}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Contact</Text>
          <Text style={styles.info}>{contact}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Studies at</Text>
          <Text style={styles.info}>{uni}</Text>
        </View>
        <TouchableOpacity onPress={()=>onLogoutPress()} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  info: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
  footerIcon: {
    alignItems: 'center',
  },
});

export default UserProfileScreen;
