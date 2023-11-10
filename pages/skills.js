import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { SkillItem } from '../components/grid-item'
import {
  iconJS,
  iconGit,
  iconHtml,
  iconReact,
  iconSass,
  iconTS,
  iconRedux,
  iconNpm,
  iconStorybook,
  iconWeb3,
  iconWebpack
} from '../components/icons/skills'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Tech main stack
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[2, 3, 4]} gap={6}>
            <SkillItem title="JavaScript" icon={iconJS} />
            <SkillItem title="TypeScript" icon={iconTS} />
            <SkillItem title="HTML" icon={iconHtml} />
            <SkillItem title="SASS" icon={iconSass} />
            <SkillItem title="React" icon={iconReact} />
            <SkillItem title="Redux" icon={iconRedux} />
            <SkillItem title="Git" icon={iconGit} />
            <SkillItem title="Storybook" icon={iconStorybook} />
            <SkillItem title="Webpack" icon={iconWebpack} />
            <SkillItem title="Npm" icon={iconNpm} />
            <SkillItem title="Web3" icon={iconWeb3} />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
export { getServerSideProps } from '../components/chakra'
