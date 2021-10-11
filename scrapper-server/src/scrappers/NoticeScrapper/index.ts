import Scrapper from "@src/scrappers/Scrapper";
import { Notice, NoticeScript } from "@src/interfaces";
import { Scenario } from "../Scenario";

class NoticeScrapper extends Scrapper<NoticeScript> {
  constructor() {
    super(__dirname + "/scripts");
  }

  async scrapping(scenario: Scenario<NoticeScript>) {
    const noticeList = await this.getNoticeList(scenario);

    for (const notice of noticeList) {
      notice.contents = await this.getContents(scenario, notice);
    }

    // console.log(noticeList);

    // 데이터베이스 저장

    // 사용자에게 알림
  }

  async getNoticeList(scenario: Scenario<NoticeScript>): Promise<Notice[]> {
    try {
      if (this.cralwer === null) {
        throw Error("크롤러 없음");
      }

      const { jsScript: noticeScript } = scenario;

      if (noticeScript === undefined) {
        throw Error("스크립트 없음");
      }

      await this.cralwer.goto(noticeScript.url);
      await this.cralwer.waitForSelector(noticeScript.waitNoticeListSelector);
      await this.evaluateScript(noticeScript);

      const notice_list: Notice[] = await this.cralwer.evaluate(
        `script.getNoticeList()`,
      );

      if (notice_list.length == 0) {
        throw Error("공지사항 목록 크롤링 실패");
      }

      return notice_list;
    } catch (error) {
      // console.error(`[${site.site_id}/getDetail]` + error);
      throw error;
    }
  }

  async getContents(
    scenario: Scenario<NoticeScript>,
    notice: Notice,
  ): Promise<string> {
    if (this.cralwer === null) {
      throw new Error("크롤러 없음");
    }

    const { jsScript: noticeScript } = scenario;

    if (noticeScript === undefined) {
      throw Error("스크립트 없음");
    }

    try {
      await this.cralwer.goto(notice.url);
      await this.cralwer.waitForSelector(
        noticeScript.waitNoticeContentsSelector,
      );
      await this.evaluateScript(noticeScript);

      const contents: string = await this.cralwer.evaluate(
        `script.getContentsHtml()`,
      );

      if (contents === "") {
        throw new Error("공지사항 내용 크롤링 실패");
      }

      return contents;
    } catch (error) {
      console.error(`[${notice.url}/getContents]` + " " + error);
      throw error;
    }
  }
}

export default new NoticeScrapper();
