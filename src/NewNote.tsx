import type { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export function NewNote ({onSubmit, onAddTag, availableTags}: NewNoteProps){
    console.log("[NewNote.tsx] Received 'availableTags' prop:", availableTags);
    return (<>
        <h1>NewNote</h1>
        <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}></NoteForm>
        </>
    )
}