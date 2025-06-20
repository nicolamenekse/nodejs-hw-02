import express from 'express'
import pino from 'pino'
import cors from 'cors'
import { getContactsController, getContactByIdController } from './controllers/contacts.js'

export const setupServer = () => {
    const PORT = process.env.PORT || 3000
    const app = express()
    const logger = pino()

    app.use(express.json())
    app.use(cors())

    app.get('/contacts', getContactsController)
    app.get('/contacts/:contactId', getContactByIdController)

    app.use((req, res) => {
        res.status(404).json({
            message: 'Not found'
        })
    })

    app.listen(PORT, () => {
        logger.info(`Server is running on port ${PORT}`)
    })
}