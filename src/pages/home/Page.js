import Herosec from "./Herosec";
import KheloAppMeant from "./KheloAppMeant";
import AppFeatures from "./AppFeatures";
import About from "./About";
import Tournament from "./Tournament";
import PlayerRanking from "./PlayerRanking";
import Find from "./Find";
import GallerySlider from "./GallerySlider";
import BlogList from "./BlogList";
import Faq from "./Faq";
import Appdownload from "./Appdownload";
import ClientLogoSlider from "./ClientLogoSlider";

export default function page() {
  return (
    <>
    <Herosec/>
    <KheloAppMeant/>
    <AppFeatures/>
    <About/>
    <Tournament/>
    <PlayerRanking/>
    <Find />
    <GallerySlider/>
    <BlogList/>
    <Faq/>
    <Appdownload/>
     <ClientLogoSlider/>
    </>
  );
}

