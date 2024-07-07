import React,{useState} from 'react';
import { View, Text, StyleSheet, FlatList, Image, Alert, TouchableOpacity,Modal } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import ProductDetailsModal from '../../components/ProductDetailsModal';


const products = [
  { id: '1', name: 'iPhone 15', price: '$1598.00', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'iPhone 14', price: '$1598.00', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'iPhone 15 Pro', price: '$1598.00', image: 'https://via.placeholder.com/150' },
  { id: '4', name: 'iPhone 15 Pro Max', price: '$1598.00', image: 'https://via.placeholder.com/150' },
  { id: '5', name: 'iPhone 14 Pro', price: '$1598.00', image: 'https://via.placeholder.com/150' },
  { id: '6', name: 'iPhone 15 Pro Max', price: '$1598.00', image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const navigation = useNavigation();

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={()=>{
      // navigation.navigate('ProductDetails',{itemId:item.id});
      setSelectedProduct(item);
      setModalVisible(true);
      
    }} style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.userName}>John!</Text>
        <View style={styles.cartContainer}>
          <Icon name="shopping-cart" size={30} />
          <Badge value="2" status="error" containerStyle={styles.cartBadge} />
        </View>
      </View>
      <Text style={styles.sectionTitle}>What's New</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
       {selectedProduct && (
        <ProductDetailsModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          product={selectedProduct}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  greeting: {
    fontSize: 18,
    color: '#888',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cartContainer: {
    marginLeft: 'auto',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  productList: {
    alignItems: 'center',
  },
  productContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    width: '45%',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default Home;
