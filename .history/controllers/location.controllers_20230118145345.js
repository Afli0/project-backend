const locationModels = require("../models/location.models");
/**create new location */
const createLocation = async (req, res) => {
	const newLocation = new locationModels({
        latitude:req.body.latitude,
        longitude:req.body.longitude
	});
	try {
		const saveLocation = await newLocation.save();
		return res.status(200).json(saveLocation);
	} catch (err) {
		return res.status(500).json(err);
	}
};

/**fetch all location */
const getLocations = async (req, res) => {
	try {
		const locations = await locationModels.find();
		return res.status(200).json(locations);
	} catch (err) {
		return res.status(500).json(err);
	}
};

module.exports.createLocation = createLocation;
module.exports.getLocations = getLocations;



