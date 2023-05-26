const express = require("express");
const router = express.Router();
const {
  getAllScores,
  createScore,
  getScore,
  updateScore,
  deleteScore,
} = require("../controllers/score");

router.route("/").get(getAllScores).post(createScore);
router.route("/:id").get(getScore).patch(updateScore).delete(deleteScore);

module.exports = router;
