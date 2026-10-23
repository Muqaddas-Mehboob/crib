import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, Text, View, type ImageStyle, type StyleProp } from 'react-native';

type Props = {
  imageUrl: string | null;
  style: StyleProp<ImageStyle>;
};

export function PropertyImage({ imageUrl, style }: Props) {
  const [failedUri, setFailedUri] = useState<string | null>(null);
  const uri = imageUrl?.trim();
  const hasError = uri !== undefined && failedUri === uri;

  return (
    <View style={[style, styles.container]}>
      {uri && !hasError ? (
        <Image
          source={{ uri }}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
          transition={200}
          cachePolicy="memory-disk"
          onError={() => setFailedUri(uri)}
        />
      ) : (
        <View style={styles.fallback}>
          <Text style={styles.fallbackText}>Photo unavailable</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { overflow: 'hidden', backgroundColor: '#E5E7EB' },
  fallback: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  fallbackText: { color: '#6B7280', fontSize: 13 },
});
