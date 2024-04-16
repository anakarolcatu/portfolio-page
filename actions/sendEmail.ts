//Helper function to send emails in the form

"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');
    const senderName = formData.get('senderName');

    //Simple server side validation for the email and message
    if(!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }
    if(!validateString(message, 300)) {
        return {
            error: "Invalid message"
        }
    }

let data;
try {
    //uses the resend package to send emails without the need of a server
    await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'ana.karol.catu@gmail.com',
        subject: 'Message from contact form',
        //typescript didn't get that the strings wouldn't be null so added a "as string" because is known that it won't be null because of the validations above and in the utils file
        reply_to: senderEmail as string,
        //styling email so it can function properly in all mail services
        react: React.createElement(ContactFormEmail, {
            message: message as string,
            senderEmail: senderEmail as string,
            senderName: senderName as string,
        })
    });
} catch (error: unknown) {
    return {
        error: getErrorMessage(error)
    }
}
return {
    data,
};
    
  };
