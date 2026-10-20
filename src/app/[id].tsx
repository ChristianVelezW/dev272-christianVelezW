import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { entries } from '../data/entry';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const entry = entries.find((e) => e.id === id);

  if (!entry) {
    return (
      <View style={styles.container}>
        <Text>Activity not found!</Text>
      </View>
    );
  }

  return (
    
    <View style={styles.container} >
      <Stack.Screen options={{ title: "Details"}} />
      <Text style={styles.title}>{entry.name}</Text>
      <Text style={styles.body}>Created: {entry.dateCreated.toLocaleDateString()}</Text>
      {entry.dateStart && (
        <Text style={styles.body}>Start: {entry.dateStart.toLocaleDateString()}</Text>
      )}
      {entry.dateEnd && (
        <Text style={styles.body}>End: {entry.dateEnd.toLocaleDateString()}</Text>
      )}    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  body: {
    fontSize: 18,
  }
});