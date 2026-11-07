import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, userEvent } from "@testing-library/react-native";
import * as api from "../src/api/activities";
import Index from "../src/app/(drawer)/index";
import { InProgressProvider } from "../src/context/InProgressContext";
import { Entry } from "../src/types";

// Mock the API layer
jest.mock("../src/api/activities");
const mockedApi = api as jest.Mocked<typeof api>;

const mockActivities: Entry[] = [
  {
    id: "act-1",
    parentId: "0",
    name: "Vacuum Living Room",
    notes: "Move rugs first",
    priority: 3,
    isInProgress: false,
    dateCreated: new Date("2026-10-25T10:00:00"),
  },
  {
    id: "act-2",
    parentId: "0",
    name: "Prep Groceries",
    notes: "Get produce",
    priority: 1,
    isInProgress: false,
    dateCreated: new Date("2026-10-26T11:00:00"),
  },
];

async function renderIndexScreen() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: Infinity,
      },
    },
  });

  return await render(
    <QueryClientProvider client={queryClient}>
      <InProgressProvider>
        <Index />
      </InProgressProvider>
    </QueryClientProvider>,
  );
}

describe("Home Screen (Index Integration)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders list of activities fetched from the API", async () => {
    mockedApi.fetchActivities.mockResolvedValueOnce(mockActivities);

    const { findByText } = await renderIndexScreen();

    expect(await findByText(/Vacuum Living Room/i)).toBeOnTheScreen();
    expect(await findByText(/Prep Groceries/i)).toBeOnTheScreen();
  });

  test("filters activities dynamically when user types in the search bar", async () => {
    const user = userEvent.setup();
    mockedApi.fetchActivities.mockResolvedValueOnce(mockActivities);

    const { findByText, getByText, queryByText, getByPlaceholderText } =
      await renderIndexScreen();

    expect(await findByText(/Vacuum Living Room/i)).toBeOnTheScreen();
    expect(getByText(/Prep Groceries/i)).toBeOnTheScreen();

    const searchInput = getByPlaceholderText(/Search Log/i);
    await user.type(searchInput, "Groceries");

    expect(getByText(/Prep Groceries/i)).toBeOnTheScreen();
    expect(queryByText(/Vacuum Living Room/i)).toBeNull();
  });

  test("displays an error state when the API call fails", async () => {
    mockedApi.fetchActivities.mockRejectedValueOnce(
      new Error("Network connection lost"),
    );

    const { findByText } = await renderIndexScreen();

    expect(await findByText(/Error fetching activities/i)).toBeOnTheScreen();
  });
});