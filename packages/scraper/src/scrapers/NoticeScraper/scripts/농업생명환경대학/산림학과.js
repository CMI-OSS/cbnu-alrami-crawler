const { boardTree } = require("../../../../../../shared/src/board-tree/board-tree.generated");
const 농업경제학과 = require("./농업경제학과");

const script = {
  url: "http://forestscience.cbnu.ac.kr/index.html?pg_idx=27",
  site_id: boardTree.전공.농업생명환경대학.산림학과.공지사항.id,
  site: "산림학과",
  category: "공지사항",
};

module.exports = { ...농업경제학과, ...script };
