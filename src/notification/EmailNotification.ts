
import request from 'request';
import {AppConfig} from '../config/appConfig'

export class EmailNotification{

    public sendEmail(message:string, subject:string, fromEmail:string, toEmails:string[] ):void{
        const options = {
            AppConfig,
            method: 'POST',
            url: AppConfig.SENDGRID_SERVICE_URL +AppConfig.SENDGRID_API_SEND_MAIL,
            headers: {
              'content-type': 'application/json',
              'x-rapidapi-key': AppConfig.RAPIDAPI_KEY,
              'x-rapidapi-host': AppConfig.RAPID_API_HOST,
              useQueryString: true
            },
            body: {
              personalizations: [{to: [{email: toEmails.toString()}], subject: message}],
              from: {email: fromEmail},
              content: [{type: 'text/plain', value: message}]
            },
            json: true
          };
          // TODO: Below method gives error. Need to be resolved

          request(options, (error: string , response: any, body: any) => {
              if (error) throw new Error(error);

              console.log(body);
          });
    }


}

