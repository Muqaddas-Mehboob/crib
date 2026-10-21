import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '@/context/auth-context';
import { supabase } from '@/lib/supabase';

export default function ProfileScreen() {
  const { session } = useAuth();
  const fullName = session?.user.user_metadata?.full_name as string | undefined;

  return (
    <View style={styles.screen}>
      <Text style={styles.label}>Signed in as</Text>
      {fullName ? <Text style={styles.name}>{fullName}</Text> : null}
      <Text style={styles.email}>{session?.user.email}</Text>

      <Link href="/profile/settings" asChild>
        <Pressable style={styles.row}>
          <Text style={styles.rowText}>Settings</Text>
          <Text style={styles.rowText}>›</Text>
        </Pressable>
      </Link>

      <Pressable style={styles.signOut} onPress={() => supabase.auth.signOut()}>
        <Text style={styles.signOutText}>Sign out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12, backgroundColor: '#F9FAFB' },
  label: { color: '#6B7280' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#111827' },
  email: { fontSize: 16, color: '#4B5563', marginBottom: 8 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  rowText: { fontSize: 16, color: '#111827' },
  signOut: {
    marginTop: 8,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
  },
  signOutText: { color: '#B91C1C', fontWeight: 'bold', fontSize: 16 },
});