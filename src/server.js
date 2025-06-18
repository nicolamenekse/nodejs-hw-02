import express from 'express'
import pino from 'pino'
import cors from 'cors'

export const setupServer = () => {
    const PORT = process.env.PORT || 3000
    const app = express()
    app.use(express.json())
    app.use(cors())
    
    // Pino logger oluştur (basit versiyon)
    const logger = pino()


    app.use((req, res) => {
        res.status(404).json(
            {
                message: "Not Found - Bulunmadı!"
            }
        )
    })
    app.listen(PORT, () => {
        logger.info(`Server is running on port> ${PORT}`)
    })

}