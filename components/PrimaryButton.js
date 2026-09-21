import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles/globalStyles';

const PrimaryButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;