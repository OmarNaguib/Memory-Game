const initializeStorage = () => {
  localStorage.setItem("bestScore", 0);
};

const getBestScore = () => localStorage.getItem("bestScore");

const setNewBest = (value) => {
  localStorage.setItem("bestScore", value);
};
const storage = { initializeStorage, getBestScore, setNewBest };
export default storage;
