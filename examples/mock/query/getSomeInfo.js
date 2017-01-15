String.prototype.rand = function () {
  return this[Math.floor(Math.random() * this.length)];
};

module.exports = function a(req, res) {
  var data = [];
  var workNo = req.query.workNo;
  var pageSize = 0;
  var totalCount = 0;
  var currentPage = 1;

  if (workNo && workNo <= 2000) {
    totalCount = pageSize * 3;
    currentPage = req.query.currentPage;
    for (var i = 0; i < 10; i++) {
      data.push({
        workNo: +workNo + i * 18 + Math.ceil(Math.random() * 10),
        name: '赵钱孙李周吴郑王'.rand() + '飞雪连天射白鹿'.rand() + '秦时明月汉时关'.rand(),
        nickName: '天地玄黄宇宙洪荒'.rand() + '日月盈昃辰宿列张'.rand(),
        });
      }
    }
    res.end(JSON.stringify({
    success: true,
    content: {
      currentPage,
      totalCount,
      data,
    },
  }));
};
