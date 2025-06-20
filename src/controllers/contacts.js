import { getContacts, getContactById } from '../services/contacts.js';

export const getContactsController = async (req, res) => {
    try {
        const contacts = await getContacts();
        
        res.status(200).json({
            status: 200,
            message: "Successfully found contacts!",
            data: contacts
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

export const getContactByIdController = async (req, res) => {
    try {
        const { contactId } = req.params;
        const contact = await getContactById(contactId);
        
        if (!contact) {
            return res.status(404).json({
                message: 'Contact not found'
            });
        }
        
        res.status(200).json({
            status: 200,
            message: `Successfully found contact with id ${contactId}!`,
            data: contact
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}; 