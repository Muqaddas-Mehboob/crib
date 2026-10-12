import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, useWindowDimensions } from 'react-native';

export default function SavedScreen() {
  const { width } = useWindowDimensions();
  const wide = width >= 700;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F7FB' }}>
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: wide ? 32 : 18, paddingTop: 24 }}>
        <View style={{ width: '100%', maxWidth: 900 }}>
          <Text style={{ fontSize: wide ? 32 : 28, fontWeight: '800', color: '#172033' }}>
            Saved properties
          </Text>
          <Text style={{ color: '#667085', marginTop: 8 }}>
            Keep your favourite homes in one place.
          </Text>

          <View style={{ marginTop: 24, padding: wide ? 36 : 24, borderRadius: 20, backgroundColor: '#FFFFFF', alignItems: 'center', borderWidth: 1, borderColor: '#E7EBF2' }}>
            <Text style={{ fontSize: 48 }}>♡</Text>
            <Text style={{ marginTop: 14, fontSize: 19, fontWeight: '800', color: '#172033', textAlign: 'center' }}>
              Your favourites live here
            </Text>
            <Text style={{ marginTop: 8, color: '#667085', textAlign: 'center', lineHeight: 22, maxWidth: 400 }}>
              When you save a property, it will be easier to find again here.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}