import {
  Container,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Trading platform">
    <Container>
      <Title>
        Trading platform
        {/* <Badge>2016-</Badge> */}
      </Title>
      <P>
        An exchange trading platform with connection to the Ethereum blockchain
        network.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://dev.bitbybit.ru:9100">
            http://dev.bitbybit.ru:9100
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span> NX, React, NextJS, SASS, NodeJS, Jest, Storybook</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/trading_1.png" alt="Trading" />
      <WorkImage src="/images/works/trading_2.png" alt="Trading" />
      <WorkImage src="/images/works/trading_3.png" alt="Trading" />
    </Container>
  </Layout>
)

export default Work
