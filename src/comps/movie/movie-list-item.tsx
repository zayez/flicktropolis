import React from "react"
import Card from "../card/card"

interface MovieListItemProps {
  imageUrl: string
  title: string
  overview: string
}

const MovieListItem = ({ imageUrl, title, overview }: MovieListItemProps) => {
  const renderContent = () => {
    return (
      <>
        <h3>{title}</h3>
        <p>{overview}</p>
      </>
    )
  }

  return (
    <>
      <Card imageUrl={imageUrl} renderContent={renderContent} />
    </>
  )
}

export default MovieListItem
