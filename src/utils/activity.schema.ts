import { z } from "zod";

export const activitySchema = z.object({
  name: z.string().min(1, "Name is required"),
  notes: z.string(),
  priority: z.number().min(1, "Must be at least 1").max(5, "Max is 5"),
  isInProgress: z.boolean(),
});

export type ActivityFormData = z.infer<typeof activitySchema>;
