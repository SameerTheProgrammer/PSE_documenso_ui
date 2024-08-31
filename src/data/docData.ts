// Define the type for a recipient
interface Recipient {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: "signer" | "viewer";
}

// Define the type for the recipients status
interface RecipientsStatus {
    completed: Recipient[];
    waiting: Recipient[];
}

// Define the type for the document data
interface DocumentData {
    id: string;
    created: string;
    title: string;
    status: "process" | "complete" | "draft" | "inbox";
    pdfUrl: string;
    recipients: RecipientsStatus;
}

export const TableDocsData: DocumentData[] = [
    {
        id: "doc1",
        created: "2024-08-31T12:00:00Z",
        title: "Software Engineer Resume",
        status: "complete",
        pdfUrl: "https://www.rit.edu/careerservices/sites/rit.edu.careerservices/files/docs/AlumniResumes/Computer%20Science%20Resume.pdf",
        recipients: {
            completed: [
                {
                    id: "r1",
                    firstName: "John",
                    lastName: "Doe",
                    email: "john.doe@example.com",
                    role: "signer",
                },
                {
                    id: "r2",
                    firstName: "Jane",
                    lastName: "Smith",
                    email: "jane.smith@example.com",
                    role: "viewer",
                },
                {
                    id: "r103",
                    firstName: "Jane",
                    lastName: "Smith",
                    email: "jane.smith@example.com",
                    role: "viewer",
                },
            ],
            waiting: [
                {
                    id: "r101",
                    firstName: "John",
                    lastName: "Doe",
                    email: "john.doe@example.com",
                    role: "signer",
                },
                {
                    id: "r102",
                    firstName: "Jane",
                    lastName: "Smith",
                    email: "jane.smith@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc2",
        created: "2024-08-31T13:00:00Z",
        title: "Data Scientist CV",
        status: "process",
        pdfUrl: "https://monisha-jega.github.io/files/cv.pdf",
        recipients: {
            completed: [],
            waiting: [
                {
                    id: "r3",
                    firstName: "Alice",
                    lastName: "Johnson",
                    email: "alice.johnson@example.com",
                    role: "signer",
                },
                {
                    id: "r4",
                    firstName: "Bob",
                    lastName: "Brown",
                    email: "bob.brown@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc3",
        created: "2024-08-31T14:00:00Z",
        title: "Graphic Designer Portfolio",
        status: "draft",
        pdfUrl: "https://www.uvic.ca/career-services/_assets/docs/resume-computer-engineering.pdf",
        recipients: {
            completed: [
                {
                    id: "r1000",
                    firstName: "Ian",
                    lastName: "White",
                    email: "ian.white@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r5",
                    firstName: "Charlie",
                    lastName: "Davis",
                    email: "charlie.davis@example.com",
                    role: "signer",
                },
                {
                    id: "r6",
                    firstName: "Diana",
                    lastName: "Miller",
                    email: "diana.miller@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc4",
        created: "2024-08-31T15:00:00Z",
        title: "Project Manager Resume",
        status: "inbox",
        pdfUrl: "https://code.ics.uci.edu/wp-content/uploads/2020/06/Resume-Sample-1-Software-Engineer.pdf",
        recipients: {
            completed: [],
            waiting: [
                {
                    id: "r7",
                    firstName: "Evan",
                    lastName: "Taylor",
                    email: "evan.taylor@example.com",
                    role: "signer",
                },
                {
                    id: "r8",
                    firstName: "Fiona",
                    lastName: "Wilson",
                    email: "fiona.wilson@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc5",
        created: "2024-08-31T16:00:00Z",
        title: "Marketing Director CV",
        status: "complete",
        pdfUrl: "https://careerdevelopment.princeton.edu/sites/g/files/toruqf1041/files/media/cv_vs._resume_guide_1.pdf",
        recipients: {
            completed: [
                {
                    id: "r9",
                    firstName: "George",
                    lastName: "Anderson",
                    email: "george.anderson@example.com",
                    role: "signer",
                },
                {
                    id: "r10",
                    firstName: "Hannah",
                    lastName: "Thomas",
                    email: "hannah.thomas@example.com",
                    role: "viewer",
                },
            ],
            waiting: [],
        },
    },
    {
        id: "doc6",
        created: "2024-08-31T17:00:00Z",
        title: "HR Specialist Resume",
        status: "process",
        pdfUrl: "https://www.rit.edu/careerservices/sites/rit.edu.careerservices/files/docs/AlumniResumes/Computer%20Science%20Resume.pdf",
        recipients: {
            completed: [
                {
                    id: "r11",
                    firstName: "Ian",
                    lastName: "White",
                    email: "ian.white@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r12",
                    firstName: "Jenny",
                    lastName: "Harris",
                    email: "jenny.harris@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc7",
        created: "2024-08-31T18:00:00Z",
        title: "Mechanical Engineer CV",
        status: "draft",
        pdfUrl: "https://monisha-jega.github.io/files/cv.pdf",
        recipients: {
            completed: [],
            waiting: [
                {
                    id: "r13",
                    firstName: "Kevin",
                    lastName: "Clark",
                    email: "kevin.clark@example.com",
                    role: "signer",
                },
                {
                    id: "r14",
                    firstName: "Laura",
                    lastName: "Young",
                    email: "laura.young@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc8",
        created: "2024-08-31T19:00:00Z",
        title: "Financial Analyst Resume",
        status: "inbox",
        pdfUrl: "https://www.uvic.ca/career-services/_assets/docs/resume-computer-engineering.pdf",
        recipients: {
            completed: [
                {
                    id: "r15",
                    firstName: "Mike",
                    lastName: "King",
                    email: "mike.king@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r16",
                    firstName: "Nina",
                    lastName: "Scott",
                    email: "nina.scott@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc9",
        created: "2024-08-31T20:00:00Z",
        title: "Software Developer CV",
        status: "complete",
        pdfUrl: "https://code.ics.uci.edu/wp-content/uploads/2020/06/Resume-Sample-1-Software-Engineer.pdf",
        recipients: {
            completed: [
                {
                    id: "r17",
                    firstName: "Oliver",
                    lastName: "Hall",
                    email: "oliver.hall@example.com",
                    role: "signer",
                },
                {
                    id: "r18",
                    firstName: "Paula",
                    lastName: "Martinez",
                    email: "paula.martinez@example.com",
                    role: "viewer",
                },
            ],
            waiting: [],
        },
    },
    {
        id: "doc10",
        created: "2024-08-31T21:00:00Z",
        title: "Web Designer Portfolio",
        status: "process",
        pdfUrl: "https://careerdevelopment.princeton.edu/sites/g/files/toruqf1041/files/media/cv_vs._resume_guide_1.pdf",
        recipients: {
            completed: [
                {
                    id: "r19",
                    firstName: "Quinn",
                    lastName: "Roberts",
                    email: "quinn.roberts@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r20",
                    firstName: "Rita",
                    lastName: "Lee",
                    email: "rita.lee@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc11",
        created: "2024-08-31T22:00:00Z",
        title: "Product Manager Resume",
        status: "draft",
        pdfUrl: "https://www.uvic.ca/career-services/_assets/docs/resume-computer-engineering.pdf",
        recipients: {
            completed: [
                {
                    id: "r21",
                    firstName: "Steve",
                    lastName: "Rodgers",
                    email: "steve.rodgers@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r22",
                    firstName: "Sam",
                    lastName: "Wilson",
                    email: "sam.wilson@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc12",
        created: "2024-08-31T23:00:00Z",
        title: "Marketing Specialist CV",
        status: "inbox",
        pdfUrl: "https://code.ics.uci.edu/wp-content/uploads/2020/06/Resume-Sample-1-Software-Engineer.pdf",
        recipients: {
            completed: [
                {
                    id: "r23",
                    firstName: "Bruce",
                    lastName: "Banner",
                    email: "bruce.banner@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r24",
                    firstName: "Tony",
                    lastName: "Stark",
                    email: "tony.stark@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc13",
        created: "2024-09-01T00:00:00Z",
        title: "UX Designer Resume",
        status: "complete",
        pdfUrl: "https://careerdevelopment.princeton.edu/sites/g/files/toruqf1041/files/media/cv_vs._resume_guide_1.pdf",
        recipients: {
            completed: [
                {
                    id: "r25",
                    firstName: "Natasha",
                    lastName: "Romanoff",
                    email: "natasha.romanoff@example.com",
                    role: "signer",
                },
                {
                    id: "r26",
                    firstName: "Clint",
                    lastName: "Barton",
                    email: "clint.barton@example.com",
                    role: "viewer",
                },
            ],
            waiting: [],
        },
    },
    {
        id: "doc14",
        created: "2024-09-01T01:00:00Z",
        title: "Legal Advisor CV",
        status: "process",
        pdfUrl: "https://monisha-jega.github.io/files/cv.pdf",
        recipients: {
            completed: [
                {
                    id: "r27",
                    firstName: "Wanda",
                    lastName: "Maximoff",
                    email: "wanda.maximoff@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r28",
                    firstName: "Pietro",
                    lastName: "Maximoff",
                    email: "pietro.maximoff@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc15",
        created: "2024-09-01T02:00:00Z",
        title: "Operations Manager Resume",
        status: "draft",
        pdfUrl: "https://www.rit.edu/careerservices/sites/rit.edu.careerservices/files/docs/AlumniResumes/Computer%20Science%20Resume.pdf",
        recipients: {
            completed: [
                {
                    id: "r29",
                    firstName: "Vision",
                    lastName: "Synth",
                    email: "vision.synth@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r30",
                    firstName: "Thor",
                    lastName: "Odinson",
                    email: "thor.odinson@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc16",
        created: "2024-09-01T03:00:00Z",
        title: "Healthcare Professional CV",
        status: "inbox",
        pdfUrl: "https://www.uvic.ca/career-services/_assets/docs/resume-computer-engineering.pdf",
        recipients: {
            completed: [
                {
                    id: "r31",
                    firstName: "Stephen",
                    lastName: "Strange",
                    email: "stephen.strange@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r32",
                    firstName: "Peter",
                    lastName: "Parker",
                    email: "peter.parker@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc17",
        created: "2024-09-01T04:00:00Z",
        title: "Electrical Engineer Resume",
        status: "complete",
        pdfUrl: "https://code.ics.uci.edu/wp-content/uploads/2020/06/Resume-Sample-1-Software-Engineer.pdf",
        recipients: {
            completed: [
                {
                    id: "r33",
                    firstName: "T'Challa",
                    lastName: "Wakanda",
                    email: "tchalla.wakanda@example.com",
                    role: "signer",
                },
                {
                    id: "r34",
                    firstName: "Shuri",
                    lastName: "Wakanda",
                    email: "shuri.wakanda@example.com",
                    role: "viewer",
                },
            ],
            waiting: [],
        },
    },
    {
        id: "doc18",
        created: "2024-09-01T05:00:00Z",
        title: "Civil Engineer CV",
        status: "process",
        pdfUrl: "https://careerdevelopment.princeton.edu/sites/g/files/toruqf1041/files/media/cv_vs._resume_guide_1.pdf",
        recipients: {
            completed: [
                {
                    id: "r35",
                    firstName: "Gamora",
                    lastName: "Zen",
                    email: "gamora.zen@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r36",
                    firstName: "Nebula",
                    lastName: "Zen",
                    email: "nebula.zen@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc19",
        created: "2024-09-01T06:00:00Z",
        title: "Network Engineer Resume",
        status: "draft",
        pdfUrl: "https://www.rit.edu/careerservices/sites/rit.edu.careerservices/files/docs/AlumniResumes/Computer%20Science%20Resume.pdf",
        recipients: {
            completed: [
                {
                    id: "r37",
                    firstName: "Drax",
                    lastName: "Destroyer",
                    email: "drax.destroyer@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r38",
                    firstName: "Rocket",
                    lastName: "Raccoon",
                    email: "rocket.raccoon@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc20",
        created: "2024-09-01T07:00:00Z",
        title: "IT Specialist CV",
        status: "inbox",
        pdfUrl: "https://monisha-jega.github.io/files/cv.pdf",
        recipients: {
            completed: [
                {
                    id: "r39",
                    firstName: "Groot",
                    lastName: "Tree",
                    email: "groot.tree@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r40",
                    firstName: "Star",
                    lastName: "Lord",
                    email: "star.lord@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc21",
        created: "2024-09-01T08:00:00Z",
        title: "Biomedical Engineer Resume",
        status: "complete",
        pdfUrl: "https://www.uvic.ca/career-services/_assets/docs/resume-computer-engineering.pdf",
        recipients: {
            completed: [
                {
                    id: "r41",
                    firstName: "Scott",
                    lastName: "Lang",
                    email: "scott.lang@example.com",
                    role: "signer",
                },
                {
                    id: "r42",
                    firstName: "Hope",
                    lastName: "Van Dyne",
                    email: "hope.van.dyne@example.com",
                    role: "viewer",
                },
            ],
            waiting: [],
        },
    },
    {
        id: "doc22",
        created: "2024-09-01T09:00:00Z",
        title: "Mechanical Designer CV",
        status: "process",
        pdfUrl: "https://code.ics.uci.edu/wp-content/uploads/2020/06/Resume-Sample-1-Software-Engineer.pdf",
        recipients: {
            completed: [
                {
                    id: "r43",
                    firstName: "Nick",
                    lastName: "Fury",
                    email: "nick.fury@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r44",
                    firstName: "Maria",
                    lastName: "Hill",
                    email: "maria.hill@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc23",
        created: "2024-09-01T10:00:00Z",
        title: "Architect Resume",
        status: "draft",
        pdfUrl: "https://careerdevelopment.princeton.edu/sites/g/files/toruqf1041/files/media/cv_vs._resume_guide_1.pdf",
        recipients: {
            completed: [
                {
                    id: "r45",
                    firstName: "Carol",
                    lastName: "Danvers",
                    email: "carol.danvers@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r46",
                    firstName: "James",
                    lastName: "Rhodes",
                    email: "james.rhodes@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc24",
        created: "2024-09-01T11:00:00Z",
        title: "Chemical Engineer CV",
        status: "inbox",
        pdfUrl: "https://www.rit.edu/careerservices/sites/rit.edu.careerservices/files/docs/AlumniResumes/Computer%20Science%20Resume.pdf",
        recipients: {
            completed: [
                {
                    id: "r47",
                    firstName: "Bruce",
                    lastName: "Wayne",
                    email: "bruce.wayne@example.com",
                    role: "signer",
                },
            ],
            waiting: [
                {
                    id: "r48",
                    firstName: "Clark",
                    lastName: "Kent",
                    email: "clark.kent@example.com",
                    role: "viewer",
                },
            ],
        },
    },
    {
        id: "doc25",
        created: "2024-09-01T12:00:00Z",
        title: "Environmental Scientist Resume",
        status: "complete",
        pdfUrl: "https://monisha-jega.github.io/files/cv.pdf",
        recipients: {
            completed: [
                {
                    id: "r49",
                    firstName: "Diana",
                    lastName: "Prince",
                    email: "diana.prince@example.com",
                    role: "signer",
                },
                {
                    id: "r50",
                    firstName: "Arthur",
                    lastName: "Curry",
                    email: "arthur.curry@example.com",
                    role: "viewer",
                },
            ],
            waiting: [],
        },
    },
];
