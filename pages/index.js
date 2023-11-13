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
                src="/images/Gipp21.jpg"
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
            <BioYear>2007-2012</BioYear>
            Studied at the Moscow State Social University at the Faculty of Economics and Management
          </BioSection>
          {/*<BioSection>*/}
          {/*  <BioYear*/}
          {/*    style={{*/}
          {/*      position: 'absolute',*/}
          {/*      marginTop: '35px',*/}
          {/*      marginLeft: '17px',*/}
          {/*      opacity: '0.8'*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    2012-2022*/}
          {/*  </BioYear>*/}

          {/*</BioSection>*/}
            <BioYear
              style={{
                position: 'absolute',
                marginTop: '72px',
                marginLeft: '2px',
                opacity: '0.8'
              }}
            >

            </BioYear>


          <BioSection>
            <BioYear>2012-2022</BioYear>
            Worked in various commercial companies

          </BioSection>
          <BioSection>
            <BioYear>Since 2018</BioYear>
            I started learning programming. Studied at various courses, including Yandex

          </BioSection>
          <BioSection>
            <BioYear>Since 2021</BioYear>
            Decided to change the type of activity and delve into the study of Frontend Development



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