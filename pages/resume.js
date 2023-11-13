import { Container, Heading, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { WorkImage } from '../components/work'

const Resume = () => (
  <Layout title="Resume">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Resume
      </Heading>
      <Link target="_blank" href="https://drive.google.com/file/d/1h8yt3qfbHszRw7pUtPZjGWsyFPGYOLyt/view">
        Open Google Disk
      </Link>
      <WorkImage  src="/images/works/resume.png" alt="Resume" />
    </Container>
  </Layout>
)

export default Resume
