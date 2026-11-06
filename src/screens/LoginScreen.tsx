import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tim Hortons</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.replace('Main')}
      >
        <Text style={styles.buttonText}>Sign In to Rewards</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#C8102E' },
  title: { fontSize: 40, fontWeight: '900', color: '#FFF', marginBottom: 40 },
  button: { backgroundColor: '#FFF', paddingHorizontal: 40, paddingVertical: 15, borderRadius: 25 },
  buttonText: { fontSize: 18, fontWeight: '900', color: '#C8102E' }
});