import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addBooking, cancelBooking, fetchBookings } from '../api/bookings';
import { useAuth } from '@/context/auth-context';

// Each user has their own bookings, so the user's id is part of the key.
function useBookingsKey() {
    const { session } = useAuth();
    return ['bookings', session?.user.id];
}

export function useBookings() {
    const queryKey = useBookingsKey();
    return useQuery({ queryKey, queryFn: fetchBookings });
}

type BookVariables = { propertyId: number; visitDate: string };

export function useBookVisit() {
    const queryClient = useQueryClient();
    const queryKey = useBookingsKey();

    return useMutation({
        mutationFn: ({ propertyId, visitDate }: BookVariables) =>
            addBooking(propertyId, visitDate),
        // Wait for the server, then reload the list.
        onSuccess: () => queryClient.invalidateQueries({ queryKey }),
    });
}

export function useCancelBooking() {
    const queryClient = useQueryClient();
    const queryKey = useBookingsKey();

    return useMutation({
        mutationFn: (id: number) => cancelBooking(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey }),
    });
}