import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useActivitiesQuery } from "../../api/useActivitiesQuery";
import { EntryRow } from "../../components/EntryRow";

export default function TodayScreen() {
  const [query, setQuery] = useState("");
  const { data: activities, isError } = useActivitiesQuery();
  if (isError) {
    return <Text style={styles.hint}>Error fetching activities.</Text>;
  }
  const filteredActivities = activities?.filter((entry) => {
    const matchesSearch = entry.name
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesToday =
      entry.dateCreated.toLocaleDateString() ===
      new Date().toLocaleDateString();

    return matchesSearch && matchesToday;
  });

  return (
    <View style={styles.screen}>
      <FlatList
        data={filteredActivities}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <EntryRow entry={item} />}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<Header query={query} setQuery={setQuery} />}
      />
    </View>
  );
}

function Header({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (text: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Today's Log"}</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Search Log"
          value={query}
          onChangeText={setQuery}
        />
        <Pressable style={styles.button} onPress={() => router.push("/add")}>
          <Text style={styles.buttonText}>Add Activity</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
    padding: 10,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  list: {
    padding: 16,
    gap: 8,
  },
});
