const { boardTree } = require("../../../../../../shared/src/board-tree/board-tree.generated");
const 교육학과 = require("./교육학과");

const script = {
  url: "http://edu.chungbuk.ac.kr/english/selectBbsNttList.do?key=200&bbsNo=82",
  site_id: boardTree.전공.사범대학.영어교육과.공지사항.id,
  site: "영어교육과",
  category: "공지사항",
};

module.exports = { ...교육학과, ...script };
