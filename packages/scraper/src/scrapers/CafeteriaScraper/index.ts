import { CafeteriaScript } from "@scraper/interfaces";
import { Menu } from "@scraper/interfaces/Menu";
import Scraper from "../Scraper";
import { Scenario } from "../Scenario";

class CafeteriaScraper extends Scraper<CafeteriaScript> {
  constructor() {
    super(`${__dirname}/scripts`);
  }

  async start() {
    const scripts = await this.loadScripts();

    scripts.forEach((script) => {
      this.appendScenario(new Scenario(script));
    });

    this.run();
  }

  async scrapping(scenario: Scenario<CafeteriaScript>): Promise<Menu[]> {
    if (this.scraper === null) {
      throw Error("크롤러 없음");
    }

    const { jsScript: cafeteriaScript } = scenario;

    if (cafeteriaScript === undefined) {
      throw Error("스크립트 없음");
    }

    await this.scraper.goto(cafeteriaScript.url);
    await this.scraper.waitForSelector(cafeteriaScript.waitSelector);
    await this.evaluateScript(cafeteriaScript);
    const menus = await this.scraper.evaluate(`script.getMenus()`);
    console.log(menus);
    return menus;
  }
}

export default new CafeteriaScraper();
