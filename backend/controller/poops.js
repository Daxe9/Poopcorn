const { Poop } = require("../models/poop-model");
const asyncWrapper = require("../middleware/async");

const getAllPoops = asyncWrapper(async (req, res) => {
    const poops = await Poop.find({});
    res.status(200).json({ poops });
});

const getSinglePoop = asyncWrapper(async (req, res) => {
    const { id: poopID } = req.params;
    const poop = await Poop.findById(poopID);

    if (!poop) {
        return res
            .status(404)
            .json({ message: `No poop was found with given id ${poopID}` });
    }
    res.status(200).json({ poop });
});

const createPoop = asyncWrapper(async (req, res) => {
    const poop = await Poop.create(req.body);
    res.status(201).json(poop);
});

const updatePoop = asyncWrapper(async (req, res) => {
    const { id: poopID } = req.params;
    const poop = await Poop.findOneAndUpdate({ _id: poopID }, req.body, {
        new: true,
    });

    if (!poop) {
        return res
            .status(404)
            .json({ message: `No poop was found with given id ${poopID}` });
    }

    res.status(200).json({ poop });
});

const deletePoop = asyncWrapper(async (req, res) => {
    const { id: poopID } = req.params;
    const poop = await Poop.findOneAndDelete({ _id: poopID });

    if (!poop) {
        return res
            .status(404)
            .json({ message: `No poop was found with given id ${poopID}` });
    }

    res.status(200).json({ poop });
});
module.exports = {
    getAllPoops,
    getSinglePoop,
    createPoop,
    updatePoop,
    deletePoop,
};
