import About from "./About";
import Appdownload from "./Appdownload";
import Find from "./Find";
import Functionality from "./Functionality";
import Herosec from "./Herosec";
import Kheloapp from "./Kheloapp";
import Latestcart from "./Latestcart";
import Other from "./Other";
import Photo from "./Photo";
import Faq from "./Faq";
import Ranking from "./Ranking";
import Tournament from "./Tournament";

export default function page() {
  return (
    <>
    <Herosec/>
    <Kheloapp/>
      <Functionality />
      <About />
      <Tournament/>
      <Find />
      <Photo/>

      <Ranking/>
      <Latestcart/>
      <Faq/>
      <Appdownload/>
      <Other/>
    </>
  );
}

