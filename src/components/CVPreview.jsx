import React from 'react'

const CVPreview = (props) => {
  return (
    <>

     <h1>{props.fullName}</h1>
     <h1>{props.email}</h1>
     <h1>{props.number}</h1>

    </>
  )
}

export default CVPreview