export interface IAddress {
    email: string;
    name: string;
}

export interface IMessage {
    to: string;
    from: string;
    subject: string;
    body:string;
}

export interface IMailProvider {
    sendEMail(message: IMessage): Promise<void>

}