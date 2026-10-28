import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Entry } from '../types';
import { createActivity, fetchActivities } from './activities';

const ACTIVITIES_QUERY_KEY = ['activities'];

export function useActivitiesQuery() {
  return useQuery({
    queryKey: ACTIVITIES_QUERY_KEY,
    queryFn: fetchActivities,
  });
}

export function useAddActivityMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newActivity: Omit<Entry, 'id' | 'dateCreated' | 'parentId'>) => 
      createActivity(newActivity),
    
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ACTIVITIES_QUERY_KEY });
    },
  });
}