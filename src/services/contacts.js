import { Contact } from '../db/contact.js';

export const getContacts = async () => {
    const contacts = await Contact.find();
    return contacts;
};

export const getContactById = async (contactId) => {
    const contact = await Contact.findById(contactId);
    return contact;
};

export const updateContact = async (contactId, updateData) => {
    const updatedContact = await Contact.findByIdAndUpdate(contactId, updateData, {
        new: true,
        runValidators: true,
    });
    return updatedContact;
};

export const createContact = async (contactData) => {
    const newContact = await Contact.create(contactData);
    return newContact;
};

export const deleteContact = async (contactId) => {
    const deleted = await Contact.findByIdAndDelete(contactId);
    return deleted;
}; 