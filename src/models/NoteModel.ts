export class NoteModel{
    id?: number;
    title: string = '';
    description: string = '';
    isEditable?: boolean = false;
    isEditMode?: boolean = false;
}