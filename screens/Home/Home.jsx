import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image, Alert, TouchableOpacity,Modal } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import ProductDetailsModal from '../../components/ProductDetailsModal';
import { Provider, useSelector } from "react-redux";
import ProductService from "../../services/ProductService";




const Home = () => {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userImage = useSelector((state) => state.user.image);

  

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [allProducts,setAllProducts] = useState();
  

  useEffect(()=>{
    getAllProducts();
    

  },[]);

  const getAllProducts = async ()=>{
    const products = await ProductService.getAllProducts();
    if(products){
      setAllProducts(products.products);
    }
  }
  
  const navigation = useNavigation();

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={()=>{
      // navigation.navigate('ProductDetails',{itemId:item.id});
      setSelectedProduct(item);
      setModalVisible(true);
      
    }} style={styles.productContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={()=>{
        navigation.navigate('UserProfile');
      }} style={styles.header}>
        <Image
          source={{ uri: userImage }}
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.userName}>John!</Text>
        <View style={styles.cartContainer}>
          <Icon name="shopping-cart" size={30} />
          <Badge value="2" status="error" containerStyle={styles.cartBadge} />
        </View>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>What's New</Text>
      <FlatList
        data={allProducts}
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
