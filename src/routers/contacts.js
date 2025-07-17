import express from 'express';
import { getContactsController, getContactByIdController, createContactController, updateContactController, deleteContactController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = express.Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));
contactsRouter.post('/', ctrlWrapper(createContactController));
contactsRouter.patch('/:contactId', ctrlWrapper(updateContactController));
contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactController));
contactsRouter.get('/:contactId', ctrlWrapper(getContactByIdController));

export { contactsRouter }; 