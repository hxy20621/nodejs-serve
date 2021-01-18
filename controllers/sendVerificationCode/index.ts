import {RequestHandler, Request, Response, NextFunction} from 'express-serve-static-core';
import {host, port, email, pass} from "../../config";
import {sendEmail} from "../../util";

const sendVerificationCode: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  let toEmail = req.body.email;
  if (toEmail) {
    // let options:any = {host, port, email, pass}
    // let resData = await sendEmail(options);

    res.send({
      status: 200,
      data: null,
      message: "Successful operation"
    });
  } else {
    res.send({
      status: 4001,
      data: null,
      message: "error",
    })
  }
}

export default sendVerificationCode;
