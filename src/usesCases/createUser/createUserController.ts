import { Request, response, Response } from "express";
import { createUserCase } from "./createUserCase";

export class CreateUserController {
    constructor(
        private createUserCase: createUserCase
    ){}

    async handle(request: Request, reponse: Response): Promise<Response>{
        const { name, email, password } = request.body;

       try{
        await this.createUserCase.execute({
            name,
            email,
            password
        })

        return response.status(201).send()
       } catch (err){
           return reponse.status(400).json({
               message: err.message || 'Error 400'
           })
       } 
    }
}