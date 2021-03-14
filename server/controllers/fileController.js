const File = require("../models/File")
const {ObjectId} = require("bson");

class FileController {
    async createFile(req, res) {
        try {
            const {logo, name, price, description} = req.body
            const file = new File({logo, name, price, description})
            await file.save()
            const files = await File.find()
            return res.status(201).json({message: "Файл добавлен", files})
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getFiles(req, res) {
        try {
            const files = await File.find()
            return res.json(files)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Can not get files"})
        }
    }
    async delFile(req, res) {
        try {
            const _id = req.params._id
            await File.remove({"_id": ObjectId(`${_id}`)})
            return res.status(201).json({message: "Файл удален"})
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }
    async updateFile(req, res) {
        try {
            const {logo, name, price, description, _id} = req.body
            console.log(logo, name, price, description, _id)
            await File.remove({"_id": ObjectId(`${_id}`)})
            const file = new File({logo, name, price, description})
            await file.save()
            const files = await File.find()
            return res.status(201).json({message: "Файл изменен", files})
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }
}

module.exports = new FileController()