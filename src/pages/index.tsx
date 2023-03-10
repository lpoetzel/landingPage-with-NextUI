import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react'
import InfoCard from '@/components/InfoCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"} >
        <Navbar.Brand>
          <Text b color="inherit">
            Learn Next-UI
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#"> About</Navbar.Link>
          <Navbar.Link href="#"> Offers</Navbar.Link>
          <Navbar.Link href="#"> Contact us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#"> Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href='#'>
              Sign up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container justify='center' css={{ "height": "500px", "background-image": "url(https://littlevisuals.co/images/eponymous.jpg)" }} >
        <Grid xs={12} sm={5} alignItems="center">
          <Col css={{ "width": "100%" }}>
            <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>Very Fancy</Text>
            <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>Placeholder text</Text>
            <Button size="md" shadow color="gradient" css={{ "width": "100%", "marginTop": "10px" }}>Join For Free</Button>
          </Col>
        </Grid>
      </Grid.Container>
      {/* displaying product cards */}

      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title="Learn Next-UI"
            imageUrl='https://littlevisuals.co/images/red_dawn.jpg'
            studentCount='3500'
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title="Learn Typescript"
            imageUrl='https://littlevisuals.co/images/sunset.jpg'
            studentCount='1000'
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title="Learn Github workflow"
            imageUrl='https://littlevisuals.co/images/tail.jpg'
            studentCount='10'
          />
        </Grid>
      </Grid.Container>
    </Container>
  )
}
