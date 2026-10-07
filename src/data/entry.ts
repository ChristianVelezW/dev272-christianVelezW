export type Entry = {
    id: string;
    parentId: string;
    name: string;
    dateCreated: Date;
    dateStart?: Date;
    dateEnd?: Date;
};

export const entries = [
    {
        id: "1",
        parentId: "0",
        name: "Lunch",
        dateCreated: new Date("2026-10-05T12:35:00"),
        dateStart: new Date("2026-10-05T12:35:00"),
    },
    {
        id: "2",
        parentId: "0",
        name: "Dinner",
        dateCreated: new Date("2026-10-05T18:21:00"),
        dateStart: new Date("2026-10-05T18:21:00"),
    },
    {
        id: "3",
        parentId: "0",
        name: "Bed",
        dateCreated: new Date("2026-10-06T00:11:00"),
        dateStart: new Date("2026-10-06T00:11:00"),
        dateEnd: new Date("2026-10-06T09:32:00"),
    },
    {
        id: "4",
        parentId: "0",
        name: "DEV272",
        dateCreated: new Date("2026-10-06T17:30:00"),
        dateStart: new Date("2026-10-06T17:30:00"),
        dateEnd: new Date("2026-10-06T19:45:00"),
    },
    {
        id: "5",
        parentId: "0",
        name: "Mood",
        dateCreated: new Date("2026-10-05T12:35:00"),
    },
    {
        id: "6",
        parentId: "5",
        name: "Hangry",
        dateCreated: new Date("2026-10-06T14:19:00"),
        dateStart: new Date("2026-10-06T14:19:00"),
    },
    {
        id: "7",
        parentId: "0",
        name: "Breakfast",
        dateCreated: new Date("2026-10-06T10:02:00"),
        dateStart: new Date("2026-10-06T10:02:00"),
    },
    {
        id: "8",
        parentId: "0",
        name: "Lunch",
        dateCreated: new Date("2026-10-06T14:37:00"),
        dateStart: new Date("2026-10-06T14:37:00"),
    },
    {
        id: "9",
        parentId: "0",
        name: "Gym",
        dateCreated: new Date("2026-10-07T07:00:00"),
        dateStart: new Date("2026-10-07T07:15:00"),
        dateEnd: new Date("2026-10-07T08:30:00"),
    },
    {
        id: "10",
        parentId: "9",
        name: "Cardio",
        dateCreated: new Date("2026-10-07T07:15:00"),
        dateStart: new Date("2026-10-07T07:15:00"),
        dateEnd: new Date("2026-10-07T07:45:00"),
    },
    {
        id: "11",
        parentId: "0",
        name: "Shower",
        dateCreated: new Date("2026-10-07T08:45:00"),
        dateStart: new Date("2026-10-07T08:45:00"),
        dateEnd: new Date("2026-10-07T09:00:00"),
    },
    {
        id: "12",
        parentId: "0",
        name: "Study",
        dateCreated: new Date("2026-10-07T10:00:00"),
        dateStart: new Date("2026-10-07T10:00:00"),
    },
    {
        id: "13",
        parentId: "12",
        name: "React Native Review",
        dateCreated: new Date("2026-10-07T10:15:00"),
        dateStart: new Date("2026-10-07T10:15:00"),
        dateEnd: new Date("2026-10-07T11:45:00"),
    },
    {
        id: "14",
        parentId: "0",
        name: "Grocery Shopping",
        dateCreated: new Date("2026-10-07T13:00:00"),
        dateStart: new Date("2026-10-07T13:30:00"),
        dateEnd: new Date("2026-10-07T14:30:00"),
    },
    {
        id: "15",
        parentId: "0",
        name: "Snack",
        dateCreated: new Date("2026-10-07T15:00:00"),
        dateStart: new Date("2026-10-07T15:05:00"),
    },
    {
        id: "16",
        parentId: "0",
        name: "Gaming",
        dateCreated: new Date("2026-10-07T20:00:00"),
        dateStart: new Date("2026-10-07T20:15:00"),
        dateEnd: new Date("2026-10-07T22:30:00"),
    }
]