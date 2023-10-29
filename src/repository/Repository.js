import mongoose from 'mongoose'

class Repository{
    static async create(model, input){
        await model.create(input)
        return {Sucesso: "Sucesso no registro!"}
    }

    static async findAll(model){
        const response = await model.find()
        return response
    }

    static async findAllByKey(model, key, value){
        const response = await model.find({[key]: value})
        return response
    }

    static async findById(model, id){
        const response = await model.findOne({_id: id})
        return response
    }

    static async findByKey(model, key, value){
        const response = await model.findOne({[key]: value})
        return response
    }

    static async updateById(model, id, input){
        await model.findOneAndUpdate({_id: id}, input)
        return {message: "Sucesso na atualização de registro", id}
    }
    
    static async deleteById(model, id){
        await model.findOneAndDelete({_id: id})
        return {message: "Sucesso na exclusão do registro", id}
    }
    
    static async deleteByKey(model, key, value){
        const response = await model.findOne({[key]:value})
        return response
    }
}

export default Repository