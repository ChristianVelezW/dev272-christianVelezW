export type Entry = {
    id: string;
    parentId: string;
    name: string;
    dateCreated: Date;
    dateStart?: Date;
    dateEnd?: Date;
    notes: string;
    priority: number;
    isInProgress: boolean;
};

export const entries: Entry[] = [
    {
        id: "1",
        parentId: "0",
        name: "DEV272 App Work",
        dateCreated: new Date("2026-10-19T11:30:00"),
        dateStart: new Date("2026-10-19T11:30:00"),
        notes: "Need to finish Phase 3 of the assignment.",
        priority: 1,
        isInProgress: true,
    },
    {
        id: "2",
        parentId: "0",
        name: "Mood",
        dateCreated: new Date("2026-10-19T13:45:00"),
        notes: "",
        priority: 5,
        isInProgress: false,
    },
    {
        id: "3",
        parentId: "2",
        name: "Hyperfocused",
        dateCreated: new Date("2026-10-19T13:45:00"),
        dateStart: new Date("2026-10-19T13:45:00"),
        notes: "In the zone with React Native.",
        priority: 5,
        isInProgress: false,
    },
    {
        id: "4",
        parentId: "0",
        name: "Walk",
        dateCreated: new Date("2026-10-19T16:00:00"),
        dateStart: new Date("2026-10-19T16:00:00"),
        dateEnd: new Date("2026-10-19T16:45:00"),
        notes: "Listened to an audiobook.",
        priority: 4,
        isInProgress: false,
    },
    {
        id: "5",
        parentId: "0",
        name: "Cleaning",
        dateCreated: new Date("2026-10-20T10:00:00"),
        dateStart: new Date("2026-10-20T10:00:00"),
        notes: "General weekend chores.",
        priority: 3,
        isInProgress: false,
    },
    {
        id: "6",
        parentId: "5",
        name: "Kitchen",
        dateCreated: new Date("2026-10-20T10:05:00"),
        dateStart: new Date("2026-10-20T10:05:00"),
        dateEnd: new Date("2026-10-20T11:00:00"),
        notes: "Dishes and swept the floor.",
        priority: 3,
        isInProgress: false,
    },
    {
        id: "7",
        parentId: "0",
        name: "Lunch",
        dateCreated: new Date("2026-10-20T13:15:00"),
        dateStart: new Date("2026-10-20T13:15:00"),
        notes: "",
        priority: 5,
        isInProgress: false,
    },
    {
        id: "8",
        parentId: "0",
        name: "Grocery Shopping",
        dateCreated: new Date("2026-10-20T14:00:00"),
        notes: "Need milk, eggs, and coffee.",
        priority: 2,
        isInProgress: false,
    }
];