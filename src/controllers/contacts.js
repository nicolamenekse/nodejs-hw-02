import { getContacts, getContactById } from '../services/contacts.js';
import { createContact, updateContact } from '../services/contacts.js';
import { deleteContact } from '../services/contacts.js';
import createError from 'http-errors';

export const getContactsController = async (req, res) => {
    const contacts = await getContacts();

    res.status(200).json({
        status: 200,
        message: "Successfully found contacts!",
        data: contacts
    });
};

export const getContactByIdController = async (req, res) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
        throw createError(404, "Contact not found");
    }

    res.status(200).json({
        status: 200,
        message: `Successfully found contact with id ${contactId}!`,
        data: contact
    });
};

export const createContactController = async (req, res) => {
    const { name, phoneNumber, contactType } = req.body;

    if (!name || !phoneNumber || !contactType) {
        throw createError(400, "Missing required contact fields");
    }

    const newContact = await createContact(req.body);

    res.status(201).json({
        status: 201,
        message: "Successfully created a contact!",
        data: newContact
    });
};

export const updateContactController = async (req, res) => {
    const { contactId } = req.params;
    const updateData = req.body;

    const updatedContact = await updateContact(contactId, updateData);

    if (!updatedContact) {
        throw createError(404, "Contact not found");
    }

    res.status(200).json({
        status: 200,
        message: "Successfully patched a contact!",
        data: updatedContact,
    });
};

export const deleteContactController = async (req, res) => {
    const { contactId } = req.params;
    const deletedContact = await deleteContact(contactId);

    if (!deletedContact) {
        throw createError(404, "Contact not found");
    }

    // 204 No Content
    res.status(204).send();
}; 