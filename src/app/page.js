import Agency from "@/components/layouts/Agency";
import Banner from "@/components/layouts/Banner";
import BestInterior from "@/components/layouts/BestInterior";
import ContactMenu from "@/components/layouts/ContactMenu";
import DreamHome from "@/components/layouts/DreamHome";
import Faq from "@/components/layouts/Faq";
import Recentlyprojects from "@/components/layouts/Recentlyprojects";
import { Services } from "@/components/layouts/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <Recentlyprojects/>
      <Services/>
      <Agency />
      <DreamHome />
      <BestInterior/>
      <Faq/>
      <ContactMenu/>
    </>
  );
}
