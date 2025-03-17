import Wellcome from "@/components/Wellcome";
import ProductList from "@/components/ProductList";
import Distribuidores from "@/components/Distribuidores";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import RegisterUser from "@/components/RegisterUser";

export default function HomePage() {
  return (
    <main>
      <RegisterUser />
      <Wellcome />
      <ProductList />
      <Distribuidores />
      <OurServices />
      <OurTeam />
    </main>
  );
}
