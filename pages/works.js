import { Container, Heading, SimpleGrid, Box, Button,Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import IoLogoTelegram from '../components/icons/telegram'
import trocadao from '../public/images/works/trocadao.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="trocadao" title="TrocaDao" thumbnail={trocadao}>
            Agromarketplace with connection to the Ethereum blockchain network
          </WorkGridItem>
        </Section>

      </SimpleGrid>
      <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        my={4}
        gap={4}
      >
        <Link href="https://t.me/kolyanchin" target="_blank">
          <Button
            // as={NextLink}
            // href="/skills"
            scroll={false}
            rightIcon={<IoLogoTelegram />}
            colorScheme="teal"
          >
            Other works on request
          </Button>
        </Link>
      </Box>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
