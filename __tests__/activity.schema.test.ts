import { activitySchema } from "../src/utils/activity.schema";

describe("activitySchema validation", () => {
  const validActivity = {
    name: "Study DEV272",
    notes: "Review unit testing and Jest",
    priority: 3,
    isInProgress: false,
  };

  test("accepts a completely valid activity form payload", () => {
    const result = activitySchema.safeParse(validActivity);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Study DEV272");
      expect(result.data.priority).toBe(3);
      expect(result.data.isInProgress).toBe(false);
    }
  });

  test("fails when required name field is an empty string", () => {
    const result = activitySchema.safeParse({
      ...validActivity,
      name: "",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Name is required");
    }
  });

  test("fails when name is omitted entirely", () => {
    const { name: _omitted, ...missingNamePayload } = validActivity;
    const result = activitySchema.safeParse(missingNamePayload);
    expect(result.success).toBe(false);
  });

  test("fails when priority is below the lower bound (< 1)", () => {
    const result = activitySchema.safeParse({
      ...validActivity,
      priority: 0,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Must be at least 1");
    }
  });

  test("fails when priority is above the upper bound (> 5)", () => {
    const result = activitySchema.safeParse({
      ...validActivity,
      priority: 6,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Max is 5");
    }
  });

  test("accepts valid boundary edge priorities (1 and 5)", () => {
    const minEdge = activitySchema.safeParse({
      ...validActivity,
      priority: 1,
    });
    const maxEdge = activitySchema.safeParse({
      ...validActivity,
      priority: 5,
    });

    expect(minEdge.success).toBe(true);
    expect(maxEdge.success).toBe(true);
  });
});
