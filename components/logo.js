import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(90deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/icon${useColorModeValue('-light', '-dark')}.png`
  //const footPrintImg = `/images/icon-dark.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('grey.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Abas Farah
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
