
// import { UserModel} from "./models/userModel";
// import {createHash} from './src/utils.ts'

// export default class UserDao{
//     async createUser(user){
//         try {
//             const {usernames, password} = user;
//             const existUser = await UserModel.findOne({usernames});
//             if(!existUser){
//                 if(usernames === process.env.adminID && password === process.env.adminPass){
//                     return await UserModel.create({
//                         id: user.id,
//                         usernames: user.usernames,
//                         passwords: user.passwords,
//                         gold: user.gold,
//                         preferred_attraction_type_id: user.preferred_attraction,
//                         is_admin: user.is_admin,
//                         hashPass: createHash(password),
//                     });
//                 }
//                     return await UserModel.create({
//                         id: user.id,
//                         usernames: user.usernames,
//                         passwords: user.passwords,
//                         gold: user.gold,
//                         preferred_attraction_type_id: user.preferred_attraction,
//                         is_admin: user.is_admin,
//                         hashPass: createHash(password),
//                 });
//             }
//         } catch (error) {
//             console.log(error);
//             throw new Error();
//         }
//     }
//     async loginUser(user){
//         try {
//             const {usernames,password} = user;
//             const userExist = await UserModel.findOne({usernames});
//             console.log(userExist);
//             if(!userExist) {
//                 const passValid = isValidPassword(userExist,password)
//                     if(!passValid)return false
//                         else 
//                             return userExist
//             }
//             return false
//         } catch (error) {
//             console.log(error);
//             throw new Error()
//         }
//     }

//     async getById(id){
//         try {
//             const userExists = await UserModel.findById(id);
//             if(userExists){return userExists} else return false;
//         } catch (error) {
//             console.log(error)
//             throw new Error()
//         }
//     }

//     async getByUsername(username){
//         try {
//             const userExists = await UserModel.findOne(username);
//             if(userExists){return userExists} else return false;
//         } catch (error) {
//             console.log(error)
//             throw new Error()
//         }
//     }
// }

