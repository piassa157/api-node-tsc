import { User } from "../entities/User";

export interface IUsersRepository{
    finByEMail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}