import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CITIES } from '@/lib/constants';

export default function SearchScreen() {
    const [text, setText] = useState('');

    function search() {
        const typed = text.trim();
        if (!typed) return;

        // "karachi", "KARACHI" and "Karachi" all become "Karachi".
        const match = CITIES.find((c) => c.toLowerCase() === typed.toLowerCase());
        const city = match ?? typed;

        // Go to the Home tab and send the city as a parameter.
        router.navigate({ pathname: '/', params: { city } });
    }

    return (
        <SafeAreaView style={styles.screen} edges={['top']}>
            <View style={styles.form}>
                <Text style={styles.heading}>Search by city</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g. Karachi"
                    placeholderTextColor="#9CA3AF"
                    value={text}
                    onChangeText={setText}
                    autoCapitalize="none"
                    returnKeyType="search"
                    onSubmitEditing={search}
                />
                <Pressable style={styles.button} onPress={search}>
                    <Text style={styles.buttonText}>Search</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#F9FAFB' },
    form: { padding: 16, gap: 12 },
    heading: { fontSize: 22, fontWeight: 'bold', color: '#111827' },
    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#0E4D92',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});