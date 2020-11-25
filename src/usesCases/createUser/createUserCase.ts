import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserRequestDTO } from "./createUserDTO";

export class createUserCase {
    constructor(
        private userRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ){}


    async execute(data: CreateUserRequestDTO){
        const userAlreadyExists = await this.userRepository.finByEMail(data.email)

        if(userAlreadyExists){
            throw new Error('User exists')
        }

        const user = new User(data);

        await this.userRepository.save(user)

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Gabriel',
                email: 'typesriptTesteApi@gmail.com'
            },
            subject: 'Seja bem vindo ao meu teste de api com node',
            body: '<p> Salve salve alejandro </p>'
        })
    }
}