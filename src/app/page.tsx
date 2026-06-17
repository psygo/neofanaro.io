import Nav from "../components/nav"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="px-4 py-4">
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

function Main() {
  return <main className=""></main>
}
