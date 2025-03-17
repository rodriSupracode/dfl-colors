import Wellcome from "@/components/Wellcome";
import ProductList from "@/components/ProductList";
import Distribuidores from "@/components/Distribuidores";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";

export default function HomePage() {
  return (
    <main>
      <Wellcome />
      <ProductList />
      <Distribuidores />
      <OurServices />
      <OurTeam />
    </main>
  );
}
