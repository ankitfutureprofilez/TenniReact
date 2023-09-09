import Herosec from "./Herosec";
import KheloAppMeant from "./KheloAppMeant";
import AppFeatures from "./AppFeatures";
import Tournament from "./Tournament";
import Find from "./Find";
import GallerySlider from "./GallerySlider";
import BlogList from "./BlogList";
import Faq from "./Faq";
import Appdownload from "./Appdownload";
import Live from "./Live";

export default function page() {
  return (
    <>
      <Herosec />
      <KheloAppMeant />
      <AppFeatures />
      <Tournament />
      <Find />
      <Live />
      <GallerySlider />
      <BlogList />
      <Faq />
      <Appdownload />
    </>
  );
}
