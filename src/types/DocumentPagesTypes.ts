// Define the type for a recipient
export interface IRecipient {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: "signer" | "viewer";
}

// Define the type for the recipients status
export interface IRecipientsStatus {
    completed: IRecipient[];
    waiting: IRecipient[];
}

// Define the type for the document data
export interface ITableDocsData {
    id: string;
    created: string;
    title: string;
    status: "process" | "complete" | "draft" | "inbox";
    pdfUrl: string;
    recipients: IRecipientsStatus;
}
