import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

const ProductDetailsScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Item Details</Text>
      <Image
        source={{ uri: 'https://example.com/iphone15.png' }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>iPhone 15</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.badge}>new</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={16} color="orange" />
            <Text style={styles.ratingText}>4.9</Text>
          </View>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Text>
        <Text style={styles.tags}>Tags: #iPhone #iPhone15 #Apple</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel}>Quantity</Text>
          <View style={styles.quantitySelector}>
            <Button title="-" onPress={decreaseQuantity} />
            <Text style={styles.quantity}>{quantity}</Text>
            <Button title="+" onPress={increaseQuantity} />
          </View>
        </View>
        <Text style={styles.totalPrice}>Total Price: ${1598 * quantity}.00</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 50,
    marginLeft: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  badge: {
    backgroundColor: '#E0E0E0',
    color: '#000',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
  },
  description: {
    marginVertical: 10,
    fontSize: 14,
    color: '#777',
  },
  tags: {
    marginVertical: 10,
    fontSize: 14,
    color: '#777',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  quantityLabel: {
    fontSize: 18,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProductDetailsScreen;
