import styled from 'styled-components'
import {ReactComponent as LogoSVG} from './logo.svg'
import {Marginals} from '../../styles'

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;
`

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`
