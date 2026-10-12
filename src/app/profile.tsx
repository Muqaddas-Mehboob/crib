import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, useWindowDimensions } from 'react-native';

export default function ProfileScreen() {
  const { width } = useWindowDimensions();
  const wide = width >= 700;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F7FB' }}>
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: wide ? 32 : 18, paddingTop: 24 }}>
        <View style={{ width: '100%', maxWidth: 900 }}>
          <Text style={{ fontSize: wide ? 32 : 28, fontWeight: '800', color: '#172033' }}>
            My profile
          </Text>
          <Text style={{ color: '#667085', marginTop: 8 }}>
            Manage your Crib experience.
          </Text>

          <View style={{ marginTop: 24, padding: 24, borderRadius: 20, backgroundColor: '#FFFFFF', alignItems: 'center', borderWidth: 1, borderColor: '#E7EBF2' }}>
            <View style={{ width: 82, height: 82, borderRadius: 41, backgroundColor: '#E4EEFC', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 36 }}>👤</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '800', color: '#172033', marginTop: 14 }}>
              Welcome to Crib
            </Text>
            <Text style={{ color: '#667085', marginTop: 6, textAlign: 'center' }}>
              Your property journey starts here.
            </Text>
          </View>

          {['Personal information', 'My preferences', 'Help and support'].map((item) => (
            <View key={item} style={{ marginTop: 12, backgroundColor: '#FFFFFF', padding: 18, borderRadius: 14, borderWidth: 1, borderColor: '#E7EBF2' }}>
              <Text style={{ color: '#172033', fontSize: 15, fontWeight: '600' }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}