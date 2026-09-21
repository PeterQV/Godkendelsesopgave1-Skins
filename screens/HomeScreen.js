import React from 'react';
import { View, FlatList } from 'react-native';
import artists from '../data/artists';
import ArtistCard from '../components/ArtistCard';
import styles from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={artists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ArtistCard
            artist={item}
            onPress={() => navigation.navigate('Profile', { artist: item })}
          />
        )}
      />
    </View>
  );
}