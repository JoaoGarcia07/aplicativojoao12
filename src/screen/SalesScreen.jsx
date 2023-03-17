import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const games = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    description: "Explore a world of discovery",
    price: 59.99,
    image: "https://i.imgur.com/oBUIVU6.jpg"
  },
  {
    id: 2,
    name: "Super Mario Odyssey",
    description: "Join Mario on a massive, globe-trotting 3D adventure",
    price: 49.99,
    image: "https://i.imgur.com/4zM4Gvj.jpg"
  },
  {
    id: 3,
    name: "Pokemon Sword and Shield",
    description: "Explore the Galar region and discover new Pokemon",
    price: 39.99,
    image: "https://i.imgur.com/1um04li.jpg"
  }
];

export const SalesScreen = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    const updatedCart = [...cart, game];
    setCart(updatedCart);
  };

  const getTotal = () => {
    const total = cart.reduce((acc, game) => acc + game.price, 0);
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.gamesList}>
        <Text style={styles.title}>Games for Sale</Text>
        {games.map((game) => (
          <View key={game.id} style={styles.game}>
            <Image style={styles.gameImage} source={{ uri: game.image }} />
            <View style={styles.gameInfo}>
              <Text style={styles.gameName}>{game.name}</Text>
              <Text style={styles.gameDescription}>{game.description}</Text>
              <Text style={styles.gamePrice}>${game.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.gameButton} onPress={() => addToCart(game)}>
              <Text style={{ color: "#fff" }}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.shoppingCart}>
        <Text style={styles.cartTitle}>Shopping Cart</Text>
        {cart.map((game) => (
          <View key={game.id} style={styles.cartItem}>
            <Image style={styles.cartImage} source={{ uri: game.image }} />
            <View style={styles.cartInfo}>
              <Text style={styles.cartName}>{game.name}</Text>
              <Text style={styles.cartPrice}>${game.price.toFixed(2)}</Text>
            </View>
          </View>
        ))}
        <Text style={styles.cartTotal}>Total: ${getTotal()}</Text>
      </View>
    </View>
  );
};

