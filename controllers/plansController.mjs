import Plans from "../models/Plans.mjs";

const handleResponse = (res, status, data, message) => {
    res.status(200).json({ success: status === 200, data, message });
};

const handleError = (res, error) => {
    res.status(500).send(error);
};

export const addPlan = async (req, res) => {
    const { 
        name,
        validity,
        amount,
    } = req.body;

    try {
        const plan = new Plans({
            name,
            validity,
            amount,
        });
        await plan.save();
        handleResponse(res, 200, {}, "Plan added successfully");
    } catch (error) {
        handleError(res, error);
    }
};

export const allPlans = async (req, res) => {
    try {
        const plans = await Plans.find();
        handleResponse(res, 200, plans);
    } catch (error) {
        handleError(res, error);
    }
};

export const onePlan = async (req, res) => {
    const documentId = req.params.id;
    try {
        const plan = await Plans.findOne({ _id: documentId });
        handleResponse(res, 200, plan);
    } catch (error) {
        handleError(res, error);
    }
};

export const deleteOnePlan = async (req, res) => {
    const documentId = req.params.id;
    try {
        await Plans.deleteOne({ _id: documentId });
        handleResponse(res, 200, {}, "Plan deleted successfully");
    } catch (error) {
        handleError(res, error);
    }
};

export const updatePlan = async (req, res) => {
    const documentId = req.params.id;
    try {
        await Plans.updateOne({ _id: documentId }, req.body);
        handleResponse(res, 200, {}, "Plan updated successfully");
    } catch (error) {
        handleError(res, error);
    }
};
