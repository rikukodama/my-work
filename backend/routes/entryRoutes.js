const {
  saveEntry,
  getMyTickets,
  pickWinner,
} = require("../controllers/entryController");
const isAdmin = require("../middlewares/isAdmin");

const router = require("express").Router();

router.post("/my-tickets", getMyTickets);
router.post("/", saveEntry);
router.post("/winner/:id", isAdmin, pickWinner);


module.exports = router;
