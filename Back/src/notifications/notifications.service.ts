import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class NotificationsService {
  private transporter: any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.Email,
        pass: process.env.Password,
      },
    });
  }
  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    await this.transporter.sendMail({
      form: process.env.Email,
      to,
      subject,
      text,
    });
  }
}
