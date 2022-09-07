import {verify, sign} from 'jsonwebtoken'
import UserModel from '../models/User'
import { CustomError } from 'express-handler-errors'
import dotenv from 'dotenv'
dotenv.config()
class Auth{
    async auth(user: {username: string; password: string}, key: string): Promise<{user: Object,token: string}>{
        const {username, password} = user
        try{
            const res = await UserModel.findOne({email: username})
            if (!res) {
                throw new CustomError({
                    code: 'USER_NOT_FOUND',
                    message: 'Usuario não foi encontrado',
                    status: 404
                })
            }
            const token = await sign({
                    _id: res._id,
                    name: res.name
                }, key, {
                    expiresIn: process.env.EXPIRESIN
            })
            return {user: res, token}

        } catch (e){
            console.error(e)
            throw new Error()
        }
    }

    validate(token: string, key: string): boolean{
        const jwt = token.split(' ')[1]
        let isValid = false
        verify(jwt, key, (err)=>{
            if(err) {
                return
            }
            isValid = true
        })
        return isValid
    }
}

export default new Auth()