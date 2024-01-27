import Members from '../models/Members.mjs'

export const addMember = async (req, res) => {
    const { firstName, lastName, age, gender, contact, dateOfJoining, dateOfBirth } = req.body;

    try {
        const member = new Members({ firstName, lastName, age, gender, contact, dateOfJoining, dateOfBirth })
        await member.save();
        res.status(200).json({ success: true, message: 'Member added successfully' });

    } catch (error) {
        res.status(500).send(error);
    }
}

export const allMembers = async (req, res) => {
    try {
        const members = await Members.find();
        res.status(200).json({ success: true,  data: members});

    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteOneMember = async (req, res) => {
    const documentId = req.params.id
    try {
       await Members.deleteOne({ _id: documentId}) ;
        res.status(200).json({ success: true, message: 'Member Deleted successfully'});

    } catch (error) {
        res.status(500).send(error);
    }

}

