import {
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const properties = [
  {
    id: '1',
    title: 'Modern Family House',
    location: 'DHA, Karachi',
    price: 'PKR 4.5 Crore',
    beds: 4,
    baths: 3,
    image: '🏡',
  },
  {
    id: '2',
    title: 'Luxury Apartment',
    location: 'Clifton, Karachi',
    price: 'PKR 2.2 Crore',
    beds: 3,
    baths: 2,
    image: '🏢',
  },
  {
    id: '3',
    title: 'Contemporary Villa',
    location: 'Bahria Town, Karachi',
    price: 'PKR 3.8 Crore',
    beds: 5,
    baths: 4,
    image: '🏘️',
  },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  const isWide = width >= 700;
  const horizontalPadding = isWide ? 32 : 20;
  const cardWidth = isWide ? '48%' : '100%';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F7FB' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: horizontalPadding,
          paddingTop: 20,
          paddingBottom: 36,
          width: '100%',
          maxWidth: 1100,
          alignSelf: 'center',
        }}
      >
        <Text style={{ color: '#0E4D92', fontSize: 15, fontWeight: '700' }}>
          CRIB
        </Text>

        <Text
          style={{
            color: '#172033',
            fontSize: 28,
            fontWeight: '800',
            marginTop: 8,
          }}
        >
          Find your place.
        </Text>

        <Text
          style={{
            color: '#667085',
            fontSize: 15,
            marginTop: 6,
            marginBottom: 20,
          }}
        >
          Discover a home that feels like yours.
        </Text>

        <TextInput
          placeholder="Search city, area, or property"
          placeholderTextColor="#7B8494"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 14,
            padding: 16,
            fontSize: 15,
            borderWidth: 1,
            borderColor: '#E3E8F0',
            marginBottom: 24,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <Text style={{ color: '#172033', fontSize: 20, fontWeight: '800' }}>
            Featured properties
          </Text>
          <Text style={{ color: '#0E4D92', fontWeight: '700' }}>Karachi</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {properties.map((property) => (
            <Pressable
              key={property.id}
              style={{
                width: cardWidth,
                backgroundColor: '#FFFFFF',
                borderRadius: 18,
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '#E7EBF2',
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  height: 180,
                  backgroundColor: '#EAF2FF',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 52 }}>{property.image}</Text>
              </View>

              <View style={{ padding: 16 }}>
                <Text style={{ color: '#172033', fontSize: 18, fontWeight: '700' }}>
                  {property.title}
                </Text>

                <Text
                  style={{
                    color: '#667085',
                    fontSize: 13,
                    marginTop: 6,
                  }}
                >
                  {property.location}
                </Text>

                <Text
                  style={{
                    color: '#0E4D92',
                    fontSize: 16,
                    fontWeight: '800',
                    marginTop: 12,
                  }}
                >
                  {property.price}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 12,
                    paddingTop: 12,
                    borderTopWidth: 1,
                    borderTopColor: '#EEF2F7',
                  }}
                >
                  <Text style={{ color: '#475467', fontSize: 12, marginRight: 16 }}>
                    {property.beds} beds
                  </Text>
                  <Text style={{ color: '#475467', fontSize: 12 }}>
                    {property.baths} baths
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}