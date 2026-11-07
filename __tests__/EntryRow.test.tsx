import { renderRouter, screen } from "expo-router/testing-library";
import { userEvent } from "@testing-library/react-native";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { EntryRow } from "../src/components/EntryRow";
import { InProgressProvider } from "../src/context/InProgressContext";
import { Entry } from "../src/types";

function DetailStub() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <Text>Detail screen for {id}</Text>;
}

describe("EntryRow Component", () => {
  const mockEntry: Entry = {
    id: "act-42",
    parentId: "0",
    name: "Organize Workspace",
    notes: "Declutter desk and wipe monitors",
    priority: 2,
    isInProgress: false,
    dateCreated: new Date("2026-10-27T14:30:00"),
  };

  test("renders activity details and navigates to the detail route on press", async () => {
    const user = userEvent.setup();

    await renderRouter(
      {
        index: () => <EntryRow entry={mockEntry} />,
        "[id]": DetailStub,
      },
      {
        initialUrl: "/",
        wrapper: ({ children }) => (
          <InProgressProvider>{children}</InProgressProvider>
        ),
      },
    );

    expect(screen.getByText("Organize Workspace")).toBeOnTheScreen();
    expect(
      screen.getByText(mockEntry.dateCreated.toLocaleString()),
    ).toBeOnTheScreen();

    await user.press(screen.getByText("Organize Workspace"));

    expect(
      await screen.findByText("Detail screen for act-42"),
    ).toBeOnTheScreen();
  });
});