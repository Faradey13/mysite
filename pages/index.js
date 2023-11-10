import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  useColorMode
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoVk, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import IoLogoTelegram from '../components/icons/telegram'
import React from 'react'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Welcome to my corner of the web, where design meets functionality.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ivan Gipp
            </Heading>
            <p>Frontend Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/Gipp.png"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am an aspiring frontend developer with a solid foundation in web development and a strong passion for creating engaging user interfaces.
            I have hands-on experience working with modern frontend technologies, including <b>React</b> and <b>TypeScript</b>. I am dedicated to staying current with industry trends and continuously improving my skills.

            I look forward to leveraging my skills to create intuitive and visually appealing user interfaces, and I am eager to take on new opportunities that will further enhance my expertise in frontend development.
          </Paragraph>
          <Box display={'flex'} justifyContent={'center'} my={4} gap={4}>
            <Button
              as={NextLink}
              href="/skills"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My skills
            </Button>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1990</BioYear>
            Born in Moscow, Russia.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            <BioYear
              style={{
                position: 'absolute',
                marginTop: '35px',
                marginLeft: '17px',
                opacity: '0.8'
              }}
            >
              |
            </BioYear>
            <BioYear
              style={{
                position: 'absolute',
                marginTop: '72px',
                marginLeft: '2px',
                opacity: '0.8'
              }}
            >

            </BioYear>

          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked at Startup{' '}
            <span style={{ display: 'inline' }}>
              (
              <svg
                width="60"
                height="15"
                viewBox="0 0 53 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'inline', verticalAlign: 'middle' }}
              >
                <path
                  d="M0.828 0.636H2.388V9H0.828V0.636ZM7.416 3.036L3.864 6.168L3.9 5.208L7.692 9H5.712L2.424 5.652L5.292 3.036H7.416ZM10.2971 9.132C9.70513 9.132 9.16513 9.004 8.67713 8.748C8.19713 8.484 7.81313 8.12 7.52513 7.656C7.24513 7.184 7.10513 6.64 7.10513 6.024C7.10513 5.392 7.24913 4.844 7.53713 4.38C7.82513 3.916 8.21313 3.556 8.70113 3.3C9.19713 3.036 9.75713 2.904 10.3811 2.904C11.0691 2.904 11.6211 3.044 12.0371 3.324C12.4611 3.596 12.7691 3.968 12.9611 4.44C13.1531 4.912 13.2491 5.44 13.2491 6.024C13.2491 6.376 13.1931 6.736 13.0811 7.104C12.9691 7.464 12.7971 7.8 12.5651 8.112C12.3331 8.416 12.0291 8.664 11.6531 8.856C11.2771 9.04 10.8251 9.132 10.2971 9.132ZM10.8011 7.932C11.2731 7.932 11.6811 7.852 12.0251 7.692C12.3691 7.532 12.6331 7.308 12.8171 7.02C13.0011 6.732 13.0931 6.4 13.0931 6.024C13.0931 5.616 12.9971 5.272 12.8051 4.992C12.6211 4.704 12.3571 4.488 12.0131 4.344C11.6771 4.192 11.2731 4.116 10.8011 4.116C10.1371 4.116 9.62113 4.292 9.25313 4.644C8.88513 4.988 8.70113 5.448 8.70113 6.024C8.70113 6.408 8.78913 6.744 8.96513 7.032C9.14113 7.312 9.38513 7.532 9.69713 7.692C10.0171 7.852 10.3851 7.932 10.8011 7.932ZM13.0931 3.036H14.6531V9H13.2011C13.2011 9 13.1891 8.924 13.1651 8.772C13.1491 8.612 13.1331 8.412 13.1171 8.172C13.1011 7.932 13.0931 7.696 13.0931 7.464V3.036ZM19.629 9.144C19.101 9.144 18.649 9.052 18.273 8.868C17.905 8.676 17.605 8.428 17.373 8.124C17.141 7.812 16.969 7.472 16.857 7.104C16.745 6.736 16.689 6.376 16.689 6.024C16.689 5.584 16.741 5.176 16.845 4.8C16.957 4.424 17.129 4.096 17.361 3.816C17.593 3.528 17.893 3.304 18.261 3.144C18.637 2.984 19.093 2.904 19.629 2.904C20.229 2.904 20.769 3.036 21.249 3.3C21.729 3.564 22.109 3.932 22.389 4.404C22.677 4.868 22.821 5.408 22.821 6.024C22.821 6.656 22.677 7.208 22.389 7.68C22.101 8.144 21.717 8.504 21.237 8.76C20.757 9.016 20.221 9.144 19.629 9.144ZM19.125 7.932C19.549 7.932 19.917 7.852 20.229 7.692C20.549 7.532 20.793 7.312 20.961 7.032C21.137 6.744 21.225 6.408 21.225 6.024C21.225 5.448 21.041 4.984 20.673 4.632C20.313 4.28 19.797 4.104 19.125 4.104C18.701 4.104 18.313 4.18 17.961 4.332C17.617 4.484 17.345 4.704 17.145 4.992C16.945 5.272 16.845 5.616 16.845 6.024C16.845 6.408 16.937 6.744 17.121 7.032C17.305 7.312 17.569 7.532 17.913 7.692C18.257 7.852 18.661 7.932 19.125 7.932ZM15.285 3.036H16.773L16.845 4.62V11.4H15.285V3.036ZM30.2686 6.648C30.2286 7.168 30.0606 7.616 29.7646 7.992C29.4766 8.368 29.0766 8.656 28.5646 8.856C28.0526 9.048 27.4446 9.144 26.7406 9.144C26.0046 9.144 25.3446 9.028 24.7606 8.796C24.1846 8.556 23.7286 8.208 23.3926 7.752C23.0646 7.288 22.9006 6.716 22.9006 6.036C22.9006 5.356 23.0646 4.784 23.3926 4.32C23.7286 3.856 24.1846 3.504 24.7606 3.264C25.3446 3.024 26.0046 2.904 26.7406 2.904C27.4446 2.904 28.0486 3.004 28.5526 3.204C29.0566 3.396 29.4526 3.676 29.7406 4.044C30.0366 4.412 30.2086 4.856 30.2566 5.376H28.8286C28.6926 4.976 28.4406 4.664 28.0726 4.44C27.7046 4.216 27.2606 4.104 26.7406 4.104C26.3246 4.104 25.9446 4.176 25.6006 4.32C25.2646 4.464 24.9926 4.68 24.7846 4.968C24.5846 5.248 24.4846 5.604 24.4846 6.036C24.4846 6.46 24.5846 6.816 24.7846 7.104C24.9846 7.384 25.2566 7.596 25.6006 7.74C25.9446 7.876 26.3246 7.944 26.7406 7.944C27.3006 7.944 27.7566 7.832 28.1086 7.608C28.4686 7.384 28.7126 7.064 28.8406 6.648H30.2686ZM30.6352 3.036H32.1952V9H30.6352V3.036ZM34.4872 4.32C34.0392 4.32 33.6512 4.408 33.3232 4.584C32.9952 4.752 32.7312 4.96 32.5312 5.208C32.3312 5.456 32.1912 5.696 32.1112 5.928L32.0992 5.268C32.1072 5.172 32.1392 5.032 32.1952 4.848C32.2512 4.656 32.3352 4.452 32.4472 4.236C32.5592 4.012 32.7072 3.8 32.8912 3.6C33.0752 3.392 33.2992 3.224 33.5632 3.096C33.8272 2.968 34.1352 2.904 34.4872 2.904V4.32ZM40.1076 7.02H41.6196C41.5556 7.428 41.3836 7.792 41.1036 8.112C40.8316 8.432 40.4596 8.684 39.9876 8.868C39.5156 9.052 38.9396 9.144 38.2596 9.144C37.4996 9.144 36.8276 9.024 36.2436 8.784C35.6596 8.536 35.2036 8.18 34.8756 7.716C34.5476 7.252 34.3836 6.692 34.3836 6.036C34.3836 5.38 34.5436 4.82 34.8636 4.356C35.1836 3.884 35.6276 3.524 36.1956 3.276C36.7716 3.028 37.4436 2.904 38.2116 2.904C38.9956 2.904 39.6476 3.028 40.1676 3.276C40.6876 3.524 41.0716 3.9 41.3196 4.404C41.5756 4.9 41.6836 5.536 41.6436 6.312H35.9556C35.9956 6.616 36.1076 6.892 36.2916 7.14C36.4836 7.388 36.7396 7.584 37.0596 7.728C37.3876 7.872 37.7756 7.944 38.2236 7.944C38.7196 7.944 39.1316 7.86 39.4596 7.692C39.7956 7.516 40.0116 7.292 40.1076 7.02ZM38.1396 4.092C37.5636 4.092 37.0956 4.22 36.7356 4.476C36.3756 4.724 36.1436 5.032 36.0396 5.4H40.0956C40.0556 5 39.8636 4.684 39.5196 4.452C39.1836 4.212 38.7236 4.092 38.1396 4.092ZM49.566 7.92L49.074 7.908L51.018 3.036H52.734L50.106 9H48.642L46.722 4.188H47.25L45.27 9H43.806L41.25 3.036H42.966L44.838 7.92H44.346L46.098 3.036H47.886L49.566 7.92Z"
                  fill={colorMode === 'dark' ? 'white' : '#1A202C'}
                />
              </svg>
              )
            </span>
          </BioSection>
          <BioSection>
            <BioYear>june 2022 to july 2023</BioYear>
            Worked at ITGLOBAL - URALCHEM (one team)
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>

        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://t.me/nfaradey" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTelegram />}
                >
                  @nfaradey
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/Faradey13" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @Faradey13
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://vk.com/jgipp" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoVk />}
                >
                  @jgipp
                </Button>
              </Link>
            </ListItem>
          </List>
          {/* <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Contact me
          </Button>
        </Box> */}
        </Section>
      </Container>
    </Layout>
  )
}

export default Home