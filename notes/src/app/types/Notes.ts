export interface Note {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }

export interface NoteCardProps {
    note: Note;
  }