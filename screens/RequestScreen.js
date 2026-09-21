import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PrimaryButton from '../components/PrimaryButton';
import styles from '../styles/globalStyles';

export default function RequestScreen({ route }) {
  const { artist } = route.params;
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [sent, setSent] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Gemmer billedets URI i state
    }
  };

  const handleSend = () => {
    setSent(true); // Sætter "sent" til true for at vise bekræftelse
  };

  return (
    <View style={styles.container}>
      <Text>Send forespørgsel til {artist.name}</Text>
      {image && <Image source={{ uri: image }} style={styles.previewImage} />}
      <PrimaryButton title="Vælg billede" onPress={pickImage} />
      <TextInput
        style={styles.input}
        placeholder="Skriv din besked..."
        value={message}
        onChangeText={setMessage}
      />
      <PrimaryButton title="Send" onPress={handleSend} />
      {sent && <Text>Forespørgsel sendt! ✅</Text>}
    </View>
  );
}