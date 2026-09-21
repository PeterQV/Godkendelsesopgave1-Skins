import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../styles/globalStyles';

const ArtistCard = ({ artist, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={artist.image} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{artist.name}</Text>
        <Text>{artist.type}</Text>
        <Text>Fra {artist.priceFrom} kr.</Text>
      </View>
    </Pressable>
  );
};

export default ArtistCard;