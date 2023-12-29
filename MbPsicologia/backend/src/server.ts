import express, { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import PostRouter from "./routes"

export const prisma = new PrismaClient()

const app = express()
const port = process.env.PORT || 8080

// This is the main function that sets up the server.
// It first connects to the database using Prisma.
// Then, it sets up the middleware for the server to use JSON and the PostRouter for routing.
// It also sets up a catch-all route that returns a 404 error for any unregistered routes.
// Finally, it starts the server and logs the port it's listening on.
async function main() {
  try {
    await prisma.$connect()

    app.use(express.json())
    app.use("/mb/api/v1", PostRouter)

    app.all("*", (req: Request, res: Response) => {
      res.status(404).json({ error: `Route ${req.originalUrl} not found` })
    })

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch (e) {
    console.error(`Error: ${e}`)
    await prisma.$disconnect()
    process.exit(1)
  }
}

main()