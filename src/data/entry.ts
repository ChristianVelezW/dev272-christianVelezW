export type Entry = {
    id: number;
    parentId: number;
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
    }
]