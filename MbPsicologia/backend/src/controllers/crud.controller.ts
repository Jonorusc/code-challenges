import { Request, Response } from "express"
import { prisma } from "../server"

/*
 * Create a new 'Resultado' in the database.
 *
 * POST /mb/api/v1/resultados
 * Required fields in body: bimestre, disciplina, nota
 *
 * ```javascript
 * Example request body:
 * {
 *    bimestre: "Primeiro",
 *    disciplina: "Artes",
 *    nota: "10"
 * }
 * ```
 *
 * ```javascript	
 * Example response:
 * {
 *   id: 1,
 *   bimestre: "Primeiro",
 *   disciplina: "Artes",
 *   nota: "10",
 *   criadoEm: "2021-09-29T00:00:00.000Z",
 *   atualizadoEm: "2021-09-29T00:00:00.000Z"
 * }
 * ```
 * 
 * Responses:
 * 200: Returns a JSON object with the created 'Resultado'.
 * 500: Returns a JSON object with an error message if something goes wrong.
 * 
 * ```javascript
 * Example error response:
 * {
 *  error: "Something went wrong when trying to create your 'Resultado'. Please try again later."
 * }
 * ```
 */
export const createResultado = async (req: Request, res: Response) => {
  try {
    const { bimestre, disciplina, nota } = req.body

    if (!bimestre || !disciplina || !nota) {
      throw new Error("Please provide all required fields.")
    }

    const newResultado = await prisma.resultado.create({
      data: {
        bimestre,
        disciplina,
        nota,
      },
    })

    if (!newResultado) {
      throw new Error("Internal Server Error. Please try again later.")
    }

    res.json(newResultado)
  } catch (e) {
    console.error(`Error: ${e}`)
    res.status(500).json({ error: 'Something went wrong when trying to create your "Resultado". Please try again later.' })
  }
}

/*
 * Get all 'Resultados' from the database.
 *
 * GET /mb/api/v1/resultados
 *
 * This endpoint returns all 'Resultados' records from the database.
 * It supports optional pagination through 'page' and 'pageSize' query parameters.
 * If these parameters are not provided, all records are returned.
 *
 * Responses:
 * 200: Returns a JSON object containing the 'Resultados' data and the total count of records.
 * 500: Returns a JSON object with an error message if something goes wrong.
 */

export const getAllResultados = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 0
    const pageSize = parseInt(req.query.pageSize as string) || 0

    const allResultados = await prisma.resultado.findMany({
      skip: page > 0 ? (page - 1) * pageSize : 0,
      take: pageSize > 0 ? pageSize : undefined,
    })

    if (!allResultados) {
      throw new Error("Internal Server Error. Please try again later.")
    }

    res.json({ data: allResultados, count: allResultados.length })
  } catch (e) {
    console.error(`Error: ${e}`)
    res.status(500).json({
      error: 'Something went wrong when trying to get all "Resultados". Please try again later.',
    })
  }
}

/*
 * Delete a 'Resultado' from the database.
 *
 * DELETE /mb/api/v1/resultados/:id
 *
 * This endpoint deletes a 'Resultado' record from the database based on the provided ID.
 * The ID should be provided as a parameter in the URL.
 *
 * Responses:
 * 200: Returns a JSON object confirming the deletion.
 * 404: Returns a JSON object with an error message if the 'Resultado' with the provided ID is not found.
 * 500: Returns a JSON object with an error message if something goes wrong.
 */
export const deleteResultado = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) throw new Error("Please provide the id of the Resultado you want to delete")
    const id = req.params.id as string // In prisma, the id is a string

    const resultado = await prisma.resultado.delete({
      where: { id },
    })

    if (!resultado) {
      res.status(404).json({ error: `Resultado with id ${id} not found` })
      return
    }

    res.json({ message: `Resultado with id ${id} deleted successfully` })
  } catch (e) {
    console.error(`Error: ${e}`)
    res.status(500).json({ error: "Something went wrong when trying to delete the Resultado. Please try again later." })
  }
}

// BONUS UPDATE ENDPOINT (I added this one myself)
/*
 * Update a 'Resultado' in the database.
 *
 * PUT /mb/api/v1/resultados/:id
 *
 * @example
 * ```javascript
 * params: { id: 1 }
 * {
 *  bimestre: "Segundo",
 *  disciplina: "Artes",
 *  nota: "10"
 * }
 * ```
 *
 * This endpoint updates a 'Resultado' record in the database based on the provided ID and body data.
 * The ID should be provided as a parameter in the URL.
 * The new data for the 'Resultado' should be provided in the request body as JSON.
 *
 * Responses:
 * 200: Returns a JSON object with the updated 'Resultado'.
 * 404: Returns a JSON object with an error message if the 'Resultado' with the provided ID is not found.
 * 500: Returns a JSON object with an error message if something goes wrong.
 */
export const updateResultado = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) throw new Error("Please provide the id of the Resultado you want to delete")
    const id = req.params.id as string
    const { bimestre, disciplina, nota } = req.body

    const updatedResultado = await prisma.resultado.update({
      where: { id: id },
      data: {
        bimestre,
        disciplina,
        nota,
      },
    })

    if (!updatedResultado) {
      res.status(404).json({ error: `Resultado with id ${id} not found` })
      return
    }

    res.json({ data: updatedResultado })
  } catch (e) {
    console.error(`Error: ${e}`)
    res.status(500).json({ error: "Something went wrong when trying to update the Resultado. Please try again later." })
  }
}
