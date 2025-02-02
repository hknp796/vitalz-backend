import Users from "../models/Users.mjs";

const handleResponse = (res, status, data, message) => {
    res.status(200).json({ success: status === 200, data, message });
};

const handleError = (res, error) => {
    res.status(500).send(error);
};

export const addUser = async (req, res) => {
    const {
        username,
        email,
        password,
        contact,
    } = req.body;

    try {
        const user = new Users({
            username,
            email,
            password,
            contact,
        });
        await user.save();
        handleResponse(res, 200, {}, "User added successfully");
    } catch (error) {
        handleError(res, error);
    }
};

export const allUsers = async (req, res) => {
    try {
        const users = await Users.find();
        handleResponse(res, 200, users);
    } catch (error) {
        handleError(res, error);
    }
};

export const oneUser = async (req, res) => {
    const documentId = req.params.id;
    try {
        const user = await Users.findOne({ _id: documentId });
        handleResponse(res, 200, user);
    } catch (error) {
        handleError(res, error);
    }
};

export const deleteOneUser = async (req, res) => {
    const documentId = req.params.id;
    console.log({ documentId });
    try {
        await Users.deleteOne({ _id: documentId });
        handleResponse(res, 200, {}, "User deleted successfully");
    } catch (error) {
        handleError(res, error);
    }
};

export const updateUser = async (req, res) => {
    const documentId = req.params.id;
    try {
        await Users.updateOne({ _id: documentId }, req.body);
        handleResponse(res, 200, {}, "User updated successfully");
    } catch (error) {
        handleError(res, error);
    }
};

export const updatePayment = async (req, res) => {
    const documentId = req.params.id;

    try {
        let user = await Users.findById(documentId);     
        if (!user) {
            return res.status(404).send('User not found');
        }
        
        Object.keys(req.body).forEach(key => {
            user[key] = req.body[key];
        });

        await user.save();
        handleResponse(res, 200, {}, "Payment added successfully");

      } catch (error) {
        handleError(res, error);
      }
};
