import Members from '../models/Members.mjs'

const handleResponse = (res, status, data) => {
    res.status(200).json({ success: status === 200, data });
}

const handleError = (res, error) => {
    res.status(500).send(error);
};

export const addMember = async (req, res) => {
    const { firstName, lastName, age, gender, contact, dateOfJoining, dateOfBirth } = req.body;

    try {
        const member = new Members({ firstName, lastName, age, gender, contact, dateOfJoining, dateOfBirth })
        await member.save();
        handleResponse(res, 200, 'Member added successfully')
    } catch (error) {
        handleError(res, error)
    }
}

export const allMembers = async (req, res) => {
    try {
        const members = await Members.find();
        handleResponse(res, 200, members)
    } catch (error) {
        handleError(res, error)
    }
}

export const deleteOneMember = async (req, res) => {
    const documentId = req.params.id
    try {
        await Members.deleteOne({ _id: documentId });
        handleResponse(res, 200, 'Member Deleted successfully')

    } catch (error) {
        handleError(res, error)
    }
}

export const updateMember = async (req, res) => {
    const documentId = req.params.id
    try {
        await Members.updateOne({ _id: documentId }, req.body)
        handleResponse(res, 200, 'Member Updated successfully')

    } catch (error) {
        handleError(res, error)
    }
}

