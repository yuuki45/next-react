import Hero from 'components/hero'
import Container from 'components/container'

export default function Home() {

  return (
    <Container>
      <Hero
        title="BLOG"
        subtitle="アウトプットしていくサイト"
        imageOn
      />
    </Container>
  )
}
