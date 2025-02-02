import Inventory from "../models/Inventory.mjs";

const handleResponse = (res, status, data, message) => {
    res.status(200).json({ success: status === 200, data, message });
};

const handleError = (res, error) => {
    res.status(500).send(error);
};

export const addInventory = async (req, res) => {
    const { 
        name,
        count,
        status,
    } = req.body;

    try {
        const inventory = new Inventory({
            name,
            count,
            status,
        });
        await inventory.save();
        handleResponse(res, 200, {}, "Inventory added successfully");
    } catch (error) {
        handleError(res, error);
    }
};

export const allInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find();
        handleResponse(res, 200, inventories);
    } catch (error) {
        handleError(res, error);
    }
};

export const oneInventory = async (req, res) => {
    const documentId = req.params.id;
    try {
        const inventory = await Inventory.findOne({ _id: documentId });
        handleResponse(res, 200, inventory);
    } catch (error) {
        handleError(res, error);
    }
};

export const deleteOneInventory = async (req, res) => {
    const documentId = req.params.id;
    try {
        await Inventory.deleteOne({ _id: documentId });
        handleResponse(res, 200, {}, "Inventory Deleted successfully");
    } catch (error) {
        handleError(res, error);
    }
};

export const updateInventory = async (req, res) => {
    const documentId = req.params.id;
    try {
        await Inventory.updateOne({ _id: documentId }, req.body);
        handleResponse(res, 200, {}, "Inventory Updated successfully");
    } catch (error) {
        handleError(res, error);
    }
};