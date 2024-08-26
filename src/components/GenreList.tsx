import React from 'react'
import useGenres from '../hook/useGenre'

export default function GenreList() {
  const {data}=useGenres()
  return (
    <ul>
      {data.map(genre => <li key={genre.id}>{genre.name}</li>)}

    </ul>
  )
}
