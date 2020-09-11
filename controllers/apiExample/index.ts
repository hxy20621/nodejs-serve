import {RequestHandler, Request, Response, NextFunction} from 'express-serve-static-core';

const apiExample: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  res.send(
    {
      status: 200,
      data: req.body,
      message: "Successful operation"
    }
  );
}

export default apiExample