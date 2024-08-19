import React from "react"
import { StyledCard, StyledCardContent, StyledCardCover } from "./card-styled"

interface CardProps {
  imageUrl: string
  renderContent: () => React.ReactNode
}
const Card = ({ imageUrl, renderContent }: CardProps) => {
  return (
    <>
      <StyledCard>
        <StyledCardCover>
          <img src={imageUrl} />
        </StyledCardCover>
        <StyledCardContent>{renderContent()}</StyledCardContent>
      </StyledCard>
    </>
  )
}

export default Card
