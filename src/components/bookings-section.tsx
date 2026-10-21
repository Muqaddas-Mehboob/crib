import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import { useBookings, useCancelBooking } from '@/hooks/use-booking';
import { formatDate } from '@/lib/format';

export function BookingsSection() {
    const { data: bookings = [], isPending, isError, error, refetch } = useBookings();
    const cancel = useCancelBooking();

    return (
        <View style={styles.section}>
            <Text style={styles.heading}>My bookings</Text>

            {isPending ? (
                // Loading
                <ActivityIndicator color="#0E4D92" style={styles.space} />
            ) : isError ? (
                // Error
                <View style={styles.box}>
                    <Text style={styles.error}>{error.message}</Text>
                    <Pressable style={styles.retry} onPress={() => refetch()}>
                        <Text style={styles.retryText}>Try again</Text>
                    </Pressable>
                </View>
            ) : bookings.length === 0 ? (
                // Empty
                <Text style={styles.empty}>
                    No bookings yet. Open a home and tap Book a visit for tomorrow.
                </Text>
            ) : (
                // Data
                bookings.map((booking) => (
                    <View key={booking.id} style={styles.row}>
                        <View style={styles.info}>
                            <Text style={styles.title}>{booking.properties.title}</Text>
                            <Text style={styles.meta}>
                                {booking.properties.city} · {formatDate(booking.visit_date)}
                            </Text>
                        </View>
                        <Pressable onPress={() => cancel.mutate(booking.id)} hitSlop={8}>
                            <Text style={styles.cancel}>Cancel</Text>
                        </Pressable>
                    </View>
                ))
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    section: { marginTop: 12, gap: 8 },
    heading: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
    space: { marginVertical: 16 },
    box: { gap: 8, alignItems: 'flex-start' },
    error: { color: '#DC2626' },
    retry: {
        backgroundColor: '#0E4D92',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 999,
    },
    retryText: { color: '#FFFFFF', fontWeight: 'bold' },
    empty: { color: '#6B7280' },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        gap: 8,
    },
    info: { flex: 1 },
    title: { fontSize: 16, fontWeight: 'bold', color: '#111827' },
    meta: { marginTop: 2, color: '#6B7280' },
    cancel: { color: '#B91C1C', fontWeight: 'bold' },
});