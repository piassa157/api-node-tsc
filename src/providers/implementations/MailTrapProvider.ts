import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export class MailTrapProvider implements IMailProvider {

    private transporter: Mail;

    constructor()
    {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: "dd532283edbf8d",
                pass: "62a95f10268fbb"
            }
        })
    }
    sendMail(message: IMessage): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async sendEMail(message: IMessage): Promise<void>{
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.to.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}