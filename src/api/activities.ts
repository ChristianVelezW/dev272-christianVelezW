import { Entry } from "../types";
import { supabase } from '../lib/supabase';

export const fetchActivities = async (): Promise<Entry[]> => {
  const { data, error } = await supabase
    .from('activities')
    .select('*')
    .order('date_created', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data.map((row) => ({
    id: row.id,
    parentId: row.parent_id,
    name: row.name,
    notes: row.notes || "",
    priority: row.priority,
    isInProgress: row.is_in_progress,
    dateCreated: new Date(row.date_created),
    dateStart: row.date_start ? new Date(row.date_start) : undefined,
    dateEnd: row.date_end ? new Date(row.date_end) : undefined,
  }));
};

export const createActivity = async (
  newActivity: Omit<Entry, 'id' | 'dateCreated' | 'parentId'>
): Promise<void> => {
  const { error } = await supabase.from('activities').insert({
    name: newActivity.name,
    notes: newActivity.notes,
    priority: newActivity.priority,
    is_in_progress: newActivity.isInProgress,
  })
  .select();

  if (error) {
    throw new Error(error.message);
  }
};