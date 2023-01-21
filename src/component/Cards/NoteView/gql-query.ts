import {gql, useMutation} from '@apollo/client';


const UPDATE_NOTE = gql`
   mutation UpdateNote($input: CraeteNoteInput!){
     updateNote(input: $input){
        id
        title
        description
        updatedOn
        createdOn
        isPinned
        hexCode
        tags {
          id
          label
          value
        }
     }
   }
`

export const useUpdateNote = ()=>{
  const [updateMutate] = useMutation(UPDATE_NOTE);


  const handleNoteUpdate = ()=>{
    updateMutate({variables:{
      
    }})
  }

  return { handleNoteUpdate }
}

const DELETE_NOTE = gql`
  mutation DeleteNote($input: DeleteNoteInput!){
    deleteNote(input: $input )
  } 
`

export const useDeleteNote = ()=>{
  const [deleteMutate] = useMutation(DELETE_NOTE);

  const handleNoteDelete = ({id}:{id: string})=>{
    deleteMutate({
      variables:{
        id
      }
    })
  }

  return {handleNoteDelete}
}