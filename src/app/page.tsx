import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="py-4 px-4">
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

function Main() {
  return (
    <main className="">
      <p>Hello</p>
    </main>
  )
}