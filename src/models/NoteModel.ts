export class NoteModel{
    _id?: string;
    title: string = '';
    description: string = '';
    isEditable: boolean = false;
    idOwner?: string = '';
}