import {RequestHandler, Request, Response, NextFunction} from 'express-serve-static-core';
import {email, pass} from "../../config";
import {sendEmail} from "../../util";

const signIn: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {

  res.send(
    {
      status: 200,
      data: req.body,
      message: "Successful operation"
    }
  );
}

export default signIn;