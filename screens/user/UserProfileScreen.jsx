import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider, useSelector } from 'react-redux';

const UserProfileScreen = ({ navigation }) => {
  const user = useSelector(state => state.user.User);
  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // replace with actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Designation</Text>
          <Text style={styles.info}>Software Test Engineer IV</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Works At</Text>
          <Text style={styles.info}>ABC Pvt Ltd</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.info}>Male</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Contact</Text>
          <Text style={styles.info}>01234435345</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Studies at</Text>
          <Text style={styles.info}>ABC University, UK</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
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
