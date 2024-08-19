import styled from "styled-components"
import { BaseClassPrefix } from "../../constants/sc-constants"

export const StyledCard = styled.div.attrs({
  className: `${BaseClassPrefix}--card`,
})`
  display: flex;
  border: 1px solid #ccc;
  gap: 1em;
`

export const StyledCardCover = styled.div.attrs({
  className: `${BaseClassPrefix}--card-cover`,
})`
  & > img {
    height: 20em;
  }
`

export const StyledCardContent = styled.div.attrs({
  className: `${BaseClassPrefix}--card-content`,
})`
  padding-right: 1em;
`
