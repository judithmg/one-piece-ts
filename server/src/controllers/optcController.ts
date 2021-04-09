import { Request, Response } from 'express'

const Characters = require('../models/characterModel')
const Details = require('../models/detailModel')


const getAllCharacters = async (req: Request, res: Response) => {
    try {
        const charList = await Characters.find({})
        res.json(charList)
    } catch (error) {
        res.status(404)
        res.send('There was an error and Character List was not found')
    }
}
const getAllDetails = async (req: Request, res: Response) => {
    try {
        const detailsList = await Details.find({})
        res.json(detailsList)
    } catch (error) {
        res.status(404)
        res.send('There was an error and Details List was not found')
    }
}

module.exports = {
    getAllCharacters,
    getAllDetails
}