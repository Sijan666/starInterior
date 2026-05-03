import Agency from "@/components/layouts/Agency";
import Banner from "@/components/layouts/Banner";
import BestInterior from "@/components/layouts/BestInterior";
import DreamHome from "@/components/layouts/DreamHome";
import { Services } from "@/components/layouts/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <Services/>
      <Agency />
      <DreamHome />
      <BestInterior/>
    </>
  );
}
