import express from 'express'
import pino from 'pino'
import cors from 'cors'
import { contactsRouter } from './routers/contacts.js'
import { notFoundHandler } from './middlewares/notFoundHandler.js'
import { errorHandler } from './middlewares/errorHandler.js'

export const setupServer = () => {
    const PORT = process.env.PORT || 3000
    const app = express()
    const logger = pino()

    app.use(express.json())
    app.use(cors())
    app.use('/contacts', contactsRouter)
    app.use(notFoundHandler)
    app.use(errorHandler)

    app.listen(PORT, () => {
        logger.info(`Server is running on port ${PORT}`)
    })
}