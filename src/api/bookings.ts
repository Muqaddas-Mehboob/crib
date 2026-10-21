import { supabase } from '@/lib/supabase';
import type { Booking } from '@/types/property';

// The signed-in user's bookings, soonest first, each with its home joined in.
// Row Level Security returns only this user's rows.
export async function fetchBookings(): Promise<Booking[]> {
    const { data, error } = await supabase
        .from('bookings')
        .select('id, property_id, visit_date, properties(*)')
        .order('visit_date', { ascending: true });
    if (error) throw error;
    return data as unknown as Booking[];
}

// user_id is filled in by the database (default auth.uid()).
export async function addBooking(propertyId: number, visitDate: string): Promise<void> {
    const { error } = await supabase
        .from('bookings')
        .insert({ property_id: propertyId, visit_date: visitDate });

    if (error) {
        // 23505 = unique violation: the same home on the same day was booked before.
        if (error.code === '23505') {
            throw new Error('You have already booked a visit to this home for that day.');
        }
        throw error;
    }
}

export async function cancelBooking(id: number): Promise<void> {
    const { error } = await supabase.from('bookings').delete().eq('id', id);
    if (error) throw error;
}