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
        const a = await Members.find();
        console.log({ a });
        res.status(200).json({ success: true, message: 'Member added successfully', data: a });

    } catch (error) {
        res.status(500).send(error);
    }

}

