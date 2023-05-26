const Score = require("../model/Score");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllScores = asyncWrapper(async (req, res) => {
  const scores = await Score.find({});
  res.status(200).json(scores);
});

const createScore = asyncWrapper(async (req, res) => {
  const score = await Score.create(req.body);
  res.status(201).json(score);
});

const getScore = asyncWrapper(async (req, res, next) => {
  const { id: scoreID } = req.params;
  const score = await Score.findOne({ _id: scoreID });
  if (!scoreID) {
    return next(createCustomError(`No score with id: ${scoreID}`, 404));
  }
  res.status(200).json(score);
});

const updateScore = asyncWrapper(async (req, res, next) => {
  const { id: scoreID } = req.params;
  const score = await Score.findOneAndUpdate({ _id: scoreID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!scoreID) {
    return next(createCustomError(`No score with id: ${scoreID}`, 404));
  }
  res.status(200).json(score);
});

const deleteScore = asyncWrapper(async (req, res, next) => {
  const { id: scoreID } = req.params;
  const score = await Score.findOneAndDelete({ _id: scoreID });
  if (!scoreID) {
    return next(createCustomError(`No score with id: ${scoreID}`, 404));
  }
  res.status(200).json(score);
});

module.exports = {
  getAllScores,
  createScore,
  getScore,
  updateScore,
  deleteScore,
};
