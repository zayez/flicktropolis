import styled from "styled-components"
import { BaseClassPrefix } from "./constants/sc-constants"

export const Container = styled.div.attrs({
  className: `${BaseClassPrefix}--container`,
})`
  max-width: 40em;
  margin: 0 auto;
`
