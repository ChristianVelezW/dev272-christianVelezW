import { zodResolver } from '@hookform/resolvers/zod';
import { Stack, router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { z } from 'zod';
import { useInProgress } from '../context/InProgressContext';
import { useAddActivityMutation } from '../api/useActivitiesQuery';

const activitySchema = z.object({
  name: z.string().min(1, "Name is required"),
  notes: z.string(),
  priority: z.number().min(1, "Must be at least 1").max(5, "Max is 5"),
  isInProgress: z.boolean(),
});

type ActivityFormData = z.infer<typeof activitySchema>;

export default function AddScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<ActivityFormData>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      name: "",
      notes: "",
      priority: 5,
      isInProgress: false,
    }
  });

  const { mutate: createActivity, isPending } = useAddActivityMutation();
  const { toggleInProgress } = useInProgress();

const onSubmit = (data: ActivityFormData) => {
    createActivity(data, {
      onSuccess: () => {
        router.back();
      }
    });
  };
  
return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Add Activity"}} />

      <View>
        <Text style={styles.label}>Activity Name</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder="e.g. Wash Dishes"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
      </View>

      <View>
        <Text style={styles.label}>Notes (Optional)</Text>
        <Controller
          control={control}
          name="notes"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Details..."
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>

      <View>
        <Text style={styles.label}>Priority (1-5)</Text>
        <Controller
          control={control}
          name="priority"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.priority && styles.inputError]}
              placeholder="1"
              keyboardType="numeric"
              onBlur={onBlur}
              onChangeText={(val) => onChange(Number(val))} 
              value={value?.toString()}
            />
          )}
        />
        {errors.priority && <Text style={styles.errorText}>{errors.priority.message}</Text>}
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.label}>Start Immediately?</Text>
        <Controller
          control={control}
          name="isInProgress"
          render={({ field: { onChange, value } }) => (
            <Switch onValueChange={onChange} value={value} />
          )}
        />
      </View>

      <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Save Activity</Text>
      </Pressable>
    </View>
  );}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24, 
    gap: 16
  },
  label: { 
    fontSize: 16, 
    fontWeight: "600", 
    marginBottom: 4 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    fontSize: 16, 
    backgroundColor: "#fff" 
  },
  inputError: { 
    borderColor: "#ef4444" 
  },
  errorText: { 
    color: "#ef4444", 
    fontSize: 12, 
    marginTop: 4 
  },
  switchRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingVertical: 8 
  },
  submitButton: { 
    backgroundColor: "#2563eb", 
    padding: 16, 
    borderRadius: 8, 
    alignItems: "center", 
    marginTop: 12 
  },
  submitButtonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" 
  }
});