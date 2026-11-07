jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

process.env.EXPO_PUBLIC_SUPABASE_URL = "https://fake-project.supabase.co";
process.env.EXPO_PUBLIC_SUPABASE_KEY = "fake-anon-key";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
