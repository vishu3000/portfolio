import { Header } from "@/components/Headers/Header";
import { Introduction } from "@/components/Introduction/Introduction";

export default function Home() {
  return (
    <div className="container-fluid">
      <Header />
      <Introduction />
      {/*<Favorites/>
    <Repos/>
    <Footer/> */}
    </div>
  );
}
