export type Entry = {
  id: string;
  parentId?: string;
  name: string;
  notes?: string;
  priority?: number;
  isInProgress: boolean;
  dateCreated: Date;
  dateStart?: Date;
  dateEnd?: Date;
};