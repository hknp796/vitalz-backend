import Coaches from "../models/Coaches.mjs";

const handleResponse = (res, status, data, message) => {
    res.status(200).json({ success: status === 200, data, message });
};

const handleError = (res, error) => {
    res.status(500).send(error);
};

export const addCoach = async (req, res) => {
    const { 
        name,
        contact,
        dateOfJoin,
    } = req.body;

    try {
        const coach = new Coaches({
            name,
            contact,
            dateOfJoin,
        });
        await coach.save();
        handleResponse(res, 200, {}, "Coach added successfully");
    } catch (error) {
        handleError(res, error);
    }
};

export const allCoaches = async (req, res) => {
    try {
        const coaches = await Coaches.find();
        handleResponse(res, 200, coaches);
    } catch (error) {
        handleError(res, error);
    }
};

export const oneCoach = async (req, res) => {
    const documentId = req.params.id;
    try {
        const coach = await Coaches.findOne({ _id: documentId });
        handleResponse(res, 200, coach);
    } catch (error) {
        handleError(res, error);
    }
};

export const deleteOneCoach = async (req, res) => {
    const documentId = req.params.id;
    try {
        await Coaches.deleteOne({ _id: documentId });
        handleResponse(res, 200, {}, "Coach Deleted successfully");
    } catch (error) {
        handleError(res, error);
    }
};

export const updateCoach = async (req, res) => {
    const documentId = req.params.id;
    try {
        await Coaches.updateOne({ _id: documentId }, req.body);
        handleResponse(res, 200,{}, "Coach Updated successfully");
    } catch (error) {
        handleError(res, error);
    }
};
