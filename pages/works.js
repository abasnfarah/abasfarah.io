import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbRaeda from '../public/images/project-Raeda.png'
import thumbCuda from '../public/images/project-cuda.png'
import thumbEzylendz from '../public/images/project-ezylendz.png'
import thumbDotfiles from '../public/images/project-dotfiles.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="raeda" title="Raeda" thumbnail={thumbRaeda} link={"https://github.com/abasnfarah/Tennis-Self-Serve/tree/main"}>
            An AI powered mobile application to coach tennis players using computer vision and a bluetooth wristband to capture motion data.
            </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="cuda" title="Cuda Algorithms" thumbnail={thumbCuda} link={"https://github.com/mutegalaxy/cuda"}>
            A repository of parallel algorithms written for Cuda.
            </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ezylendz" title="EzyLendz" thumbnail={thumbEzylendz} link={"https://github.com/abasnfarah/ezylends"}>
            Landing page announcing the launch of fintech mobile app.
            </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="dotfiles" title="Dotfiles" thumbnail={thumbDotfiles} link={"https://github.com/abasnfarah/${id}"}>
            Dotfiles for Vim, Zsh, and Tmux. Installs on Arch and MacOSX.
            </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
