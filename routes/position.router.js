const {
	createLocation,
	getLocations,

} = require("../controllers/location.controllers");
const router = require("express").Router();
router.post("/create-loaction", createLocation);
router.get("/locations", getLocations);
module.exports = router;