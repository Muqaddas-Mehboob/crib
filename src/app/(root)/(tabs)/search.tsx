import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CITIES } from '@/lib/constants';

export default function SearchScreen() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  function search() {
    const typed = text.trim();
    const city = typed
      ? CITIES.find((candidate) => candidate.toLowerCase() === typed.toLowerCase())
      : undefined;

    if (typed && !city) {
      setMessage(`Choose a supported city: ${CITIES.join(', ')}.`);
      return;
    }

    setMessage('');
    router.navigate({ pathname: '/', params: { city: city ?? '' } });
  }

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.form}>
        <Text style={styles.heading}>Find a home</Text>
        <Text style={styles.description}>Search by city or choose one of the options below.</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Karachi"
          placeholderTextColor="#9CA3AF"
          value={text}
          onChangeText={(value) => {
            setText(value);
            setMessage('');
          }}
          autoCapitalize="words"
          returnKeyType="search"
          onSubmitEditing={search}
          accessibilityLabel="Search homes by city"
        />

        <View style={styles.options}>
          {['', ...CITIES].map((city) => {
            const selected =
              city === ''
                ? text.trim() === ''
                : city.toLowerCase() === text.trim().toLowerCase();

            return (
              <Pressable
                key={city || 'all'}
                accessibilityRole="button"
                accessibilityState={{ selected }}
                style={[styles.option, selected && styles.optionSelected]}
                onPress={() => {
                  setText(city);
                  setMessage('');
                }}
              >
                <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
                  {city || 'All cities'}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {message ? <Text style={styles.message}>{message}</Text> : null}

        <Pressable style={styles.button} onPress={search}>
          <Text style={styles.buttonText}>Show homes</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F9FAFB' },
  form: { padding: 16, gap: 12 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#111827' },
  description: { color: '#4B5563', lineHeight: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  options: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
  },
  optionSelected: { borderColor: '#0E4D92', backgroundColor: '#0E4D92' },
  optionText: { color: '#374151' },
  optionTextSelected: { color: '#FFFFFF', fontWeight: 'bold' },
  message: { color: '#B91C1C' },
  button: {
    backgroundColor: '#0E4D92',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});
