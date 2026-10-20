import { entries, Entry } from "@/data/entry";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function TodayScreen() {
  const [query, setQuery] = useState("");

  const todayEntries = entries.filter((entry) => {
    return entry.dateCreated.toLocaleDateString() === new Date().toLocaleDateString();
  })

  return (
    <View style={styles.screen}>
      <FlatList
      data={todayEntries}
      keyExtractor={(e) => e.id}
      renderItem={({ item }) => <EntryRow entry={item} />}
      contentContainerStyle={styles.list}
      ListHeaderComponent={<Header query={query} setQuery={setQuery} />}
      />
    </View>
  );
}

function Header({query, setQuery}: {query: string, setQuery: (text: string) => void}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Log</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Search Log" value = {query} onChangeText={setQuery} />
        <Pressable style={styles.button} onPress={() => console.log(query)}>
          <Text style={styles.buttonText}>Go</Text>
        </Pressable>
      </View>
    </View>
  );
}

function EntryRow({entry}: {entry: Entry}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardMain}>
        <Text style={styles.cardTitle}>{entry.name}</Text>
        <Text style={styles.cardSub}>{entry.dateCreated.toLocaleString()}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1
  },
  container: {
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    textAlign: "center",
  },
  hint: {
    marginTop: 24,
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    },
  input: { 
      flex: 1, 
      borderWidth: 1, 
      borderColor: "#9ca3af", 
      borderRadius: 8, 
      padding: 10 
    },
  button: { 
    backgroundColor: "#2563eb", 
    paddingHorizontal: 16,
    paddingVertical: 10, 
    borderRadius: 8,  
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "600" 
  },
  card: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
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
  list: {
    padding: 16,
    gap: 8
  }
});
