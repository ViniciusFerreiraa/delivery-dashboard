import HomeTemplate from 'templates/Home'

export default function Home(props) {
  return <HomeTemplate {...props} />
}

export async function getStaticProps() {
  return {
    revalidate: 10,
    props: {}
  }
}
