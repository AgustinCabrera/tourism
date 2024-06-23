import { userModel } from "../daos/mongo/models/userModel";

export default class UserManager {
async getAll(){
    try {
        const response = await userModel.find({});
        return response;
    } catch (error) {
        console.log(error);
    }
}
async getById(id) {
    try {
        const response = await userModel.findById(id);
        return response;
    } catch (error) {
        console.log(error);
    }
}
async create(obj){
    try {
        const response = await userModel.create(obj);
        return response;
    } catch (error) {
        console.log(error);
    }
}
async update(id, obj){
    try {
        await userModel.updateOne({_id: id}, obj);
        return obj;
    } catch (error) {
        console.log(error);
    }
}
async delete(id){
    try {
    const response = await userModel.findByIdAndDelete(id);
    return response;  
    } catch (error) {
        console.log(error);
    }
}
}