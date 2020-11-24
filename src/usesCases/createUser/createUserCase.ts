import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserRequestDTO } from "./createUserDTO";

export class createUserCase {
    constructor(
        private userRepository: IUsersRepository
    ){}


    async execute(data: CreateUserRequestDTO){
        const userAlreadyExists = await this.userRepository.finByEMail(data.email)

        if(userAlreadyExists){
            throw new Error('User exists')
        }

        const user = new User(data);

        await this.userRepository.save(user)
    }
}