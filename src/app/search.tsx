import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, View, useWindowDimensions } from 'react-native';

export default function SearchScreen() {
  const { width } = useWindowDimensions();
  const [query, setQuery] = useState('');
  const wide = width >= 700;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F7FB' }}>
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: wide ? 32 : 18, paddingTop: 24 }}>
        <View style={{ width: '100%', maxWidth: 900 }}>
          <Text style={{ fontSize: wide ? 32 : 28, fontWeight: '800', color: '#172033' }}>
            Search
          </Text>
          <Text style={{ color: '#667085', marginTop: 8, marginBottom: 22 }}>
            Find a property in your preferred area.
          </Text>

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Enter city, area, or property type"
            placeholderTextColor="#7B8494"
            accessibilityLabel="Search by location or property type"
            returnKeyType="search"
            style={{ backgroundColor: '#FFFFFF', borderRadius: 14, padding: 16, borderWidth: 1, borderColor: '#E3E8F0', color: '#172033' }}
          />

          <Text style={{ fontSize: 19, fontWeight: '800', color: '#172033', marginTop: 28, marginBottom: 14 }}>
            Popular locations
          </Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {['DHA, Karachi', 'Clifton, Karachi', 'Bahria Town', 'Gulshan-e-Iqbal'].filter((item) => item.toLowerCase().includes(query.toLowerCase())).map((item) => (
              <View key={item} style={{ backgroundColor: '#FFFFFF', padding: 16, borderRadius: 14, borderWidth: 1, borderColor: '#E3E8F0', width: wide ? '48%' : '100%' }}>
                <Text style={{ color: '#0E4D92', fontSize: 16, fontWeight: '700' }}>{item}</Text>
                <Text style={{ color: '#667085', fontSize: 13, marginTop: 6 }}>Explore homes and apartments</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}