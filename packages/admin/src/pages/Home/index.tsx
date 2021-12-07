import { useState } from "react";
import { CardListContainer } from "src/components/Scenario";
import Navigation from "src/components/Navigation";
import { ScraperContext, Scrapers } from "src/utils/scraperContext";
import { GroupContext } from "src/utils/groupContext";
import Selector from "src/components/Selector";
import { Status, StatusContext } from "src/utils/statusContext";
import getStyle from "./style";

export default function Home() {
  const [ scraper, setScraper ] = useState(Scrapers.Notice);
  const [ group, setGroup ] = useState("모두보기");
  const [ status, setStatus ] = useState(Status.All);
  const style = getStyle();

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      <GroupContext.Provider value={{ group, setGroup }}>
        <ScraperContext.Provider value={{ scraper, setScraper }}>
          <Navigation />
          <main className={style.main}>
            <h1 className={style.mainTitle}>{scraper} 스크래퍼 관리보드</h1>
            <Selector />
            <CardListContainer />
          </main>
        </ScraperContext.Provider>
      </GroupContext.Provider>
    </StatusContext.Provider>
  );
}
