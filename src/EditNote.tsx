import type { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
    onSubmit: (id:string, data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export function EditNote ({onSubmit, onAddTag, availableTags}: EditNoteProps){
    console.log("[EditNote.tsx] Received 'availableTags' prop:", availableTags);
    const note = useNote()
    return (<>
        <h1>NewNote</h1>
        <NoteForm onSubmit={data => onSubmit(note.id, data)} onAddTag={onAddTag} availableTags={availableTags}></NoteForm>
        </>
    )
}