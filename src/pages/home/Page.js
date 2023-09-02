import About from "./About";
import Appdownload from "./Appdownload";
import Find from "./Find";
import Functionality from "./Functionality";
import Herosec from "./Herosec";
import Khaloapp from "./Khaloapp";
import Latestcart from "./Latestcart";
import Other from "./Other";
import Photo from "./Photo";
import Question from "./Question";
import Ranking from "./Ranking";
import Tournament from "./Tournament";

export default function page() {
  return (
    <>
    <Herosec/>
    <Khaloapp/>
      <Functionality />
      <About />
      <Tournament/>
      <Find />
      <Photo/>
      <Ranking/>
      <Latestcart/>
      <Question/>
      <Appdownload/>
      <Other/>
    </>
  );
}

