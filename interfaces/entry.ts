
export interface Entry {
    _id: string;
    description: string;
    createAt: string;
    status: EntryStatus;
    setAddingEntry?: boolean
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished'