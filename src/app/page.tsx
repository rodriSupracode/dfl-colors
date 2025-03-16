import Image from "next/image";
import Link from "next/link";
import Wellcome from "@/components/Wellcome";
import ProductList from "@/components/ProductList";

export default function HomePage() {
  return (
    <main>
      <Wellcome />
      <ProductList />
    </main>
  );
}
