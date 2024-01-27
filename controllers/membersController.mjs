import Members from '../models/Members.mjs'

export const addMember = async (req, res) => {
    const { firstName, lastName, age, gender, contact, dateOfJoining, dateOfBirth } = req.body;

    try {
        const member = new Members({ firstName, lastName, age, gender, contact, dateOfJoining, dateOfBirth })
        await member.save();
        res.status(200).json({ success: true, message: 'Member added successfully' });

    } catch (error) {
        res.status(500).send('Server Error');
    }



}