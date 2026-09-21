import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import styles from '../styles/globalStyles';

export default function ProfileScreen({ route, navigation }) {
  const { artist } = route.params;

  return (
    <View style={styles.container}>
      <Image source={artist.image} style={styles.profileImage} />
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{artist.name}</Text>
      <Text>{artist.location}</Text>
      <Text>Fra {artist.priceFrom} kr.</Text>

      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Services:</Text>
      <FlatList
        data={artist.services}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>- {item}</Text>}
      />

      <PrimaryButton
        title="Send forespørgsel"
        onPress={() => navigation.navigate('Request', { artist })}
      />
    </View>
  );
}