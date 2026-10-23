import { FlashList } from '@shopify/flash-list';
import { router, useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OfflineBanner } from '@/components/offline-banner';
import { PropertyCard } from '@/components/property-card';
import { EmptyView, ErrorView, LoadingView } from '@/components/state-views';
import { useProperties } from '@/hooks/use-properties';

export default function HomeScreen() {
  const { city: cityParam } = useLocalSearchParams<{ city?: string }>();
  const city = typeof cityParam === 'string' && cityParam.length > 0 ? cityParam : undefined;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    error,
    refetch,
  } = useProperties(city);
  const properties = useMemo(() => data?.pages.flatMap((page) => page) ?? [], [data]);

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <OfflineBanner />
      <View style={styles.header}>
        <View style={styles.headingGroup}>
          <Text style={styles.eyebrow}>FIND YOUR PLACE</Text>
          <Text style={styles.heading}>{city ? `Homes in ${city}` : 'Explore homes'}</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Filter homes by city"
          style={styles.filterButton}
          onPress={() => router.push({ pathname: '/filters', params: { city: city ?? '' } })}
        >
          <Text style={styles.filterButtonText}>Filters</Text>
        </Pressable>
      </View>

      {isPending ? (
        <LoadingView />
      ) : isError ? (
        <ErrorView message={error.message} onRetry={refetch} />
      ) : (
        <FlashList
          data={properties}
          keyExtractor={(property) => String(property.id)}
          renderItem={({ item }) => <PropertyCard property={item} />}
          contentContainerStyle={styles.list}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage) {
              void fetchNextPage();
            }
          }}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={
            <EmptyView
              title={city ? `No homes in ${city}` : 'No homes available'}
              message="Try another city or check back later."
            />
          }
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator style={styles.footer} color="#0E4D92" />
            ) : null
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F9FAFB' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },
  headingGroup: { flex: 1, gap: 4 },
  eyebrow: { color: '#6B7280', fontSize: 11, fontWeight: 'bold', letterSpacing: 1 },
  heading: { color: '#111827', fontSize: 22, fontWeight: 'bold' },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#E8F0F8',
  },
  filterButtonText: { color: '#0E4D92', fontWeight: 'bold' },
  list: { paddingHorizontal: 16, paddingBottom: 24 },
  footer: { paddingVertical: 16 },
});
