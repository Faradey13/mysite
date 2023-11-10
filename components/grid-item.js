import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useColorMode } from '@chakra-ui/react'

export const SkillItem = ({ title, icon }) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      w="100%"
      maxHeight={'120px'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      className="skill-item"
    >
      {icon(colorMode)}
      <Text fontSize={20}>{title}</Text>
    </Box>
  )
}

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail, inactive, href }) => (
  <Box
    w="100%"
    textAlign="center"
    className={inactive ? 'box-work-inactive' : 'box-work'}
  >
    <LinkBox
      as={NextLink}
      href={href ?? `/works/${id}`}
      scroll={false}
      cursor="pointer"
      target={href && '_blanck'}
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        height:120px;
        object-fit: cover;
      }
    `}
  />
)
