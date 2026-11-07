import { useInProgress } from "@/context/InProgressContext";
import { Entry } from "@/types";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface EntryRowProps {
  entry: Entry;
}

export function EntryRow({entry}: {entry: Entry}) {

  const { inProgressIds } = useInProgress();
  const isStarted = inProgressIds.includes(entry.id);

  return (
    <Pressable 
      style={[styles.card, isStarted && { borderColor: "#2563eb", borderWidth: 2 }]} 
      onPress={() => router.push({ pathname: "/[id]", params: { id: entry.id }})}>
      <View style={styles.cardMain}>
        <Text style={styles.cardTitle}>{entry.name}</Text>
        <Text style={styles.cardSub}>{entry.dateCreated.toLocaleString()}</Text>
      </View>
      {isStarted && (
        <Text style={styles.badgeText}>IN PROGRESS</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({

  card: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  cardActive: {
    borderColor: "#2563eb",
    borderWidth: 2,
  },
  cardMain: {
    flex: 1, 
    gap: 2
  },
  cardTitle: {
    fontWeight: "600"
  },
  cardSub: {
    color: "#6b7280"
  },
  badgeText: {
    color: "#2563eb",
    fontWeight: "bold",
    fontSize: 12,
  },
});
