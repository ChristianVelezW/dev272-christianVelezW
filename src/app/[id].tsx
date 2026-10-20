import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useInProgress } from '../context/InProgressContext';
import { useActivities } from '../context/ActivityContext';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const { activities } = useActivities()
  const entry = activities.find((e) => e.id === id);
  const { inProgressIds, toggleInProgress } = useInProgress();
  const isStarted = inProgressIds.includes(id as string);

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
      {entry.notes !== "" && (
        <Text style={styles.body}>Notes: {entry.notes}</Text>
      )}
      <Text style={styles.body}>Created: {entry.dateCreated.toLocaleDateString()}</Text>
      <Text style={styles.body}>Priority: {entry.priority}</Text>
      {entry.dateStart && (
        <Text style={styles.body}>Start: {entry.dateStart.toLocaleDateString()}</Text>
      )}
      {entry.dateEnd && (
        <Text style={styles.body}>End: {entry.dateEnd.toLocaleDateString()}</Text>
      )}
      <Pressable 
        style={[styles.button, { backgroundColor: isStarted ? "#ef4444" : "#2563eb", marginTop: 20 }]} 
        onPress={() => toggleInProgress(id as string)}
      >
        <Text style={styles.buttonText}>
          {isStarted ? "Mark as Stopped" : "Mark as In Progress"}
        </Text>
      </Pressable>
    </View>
    
    
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
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  }
});