import { Response, Request } from "express";

export const sampleController = (req: Request, res: Response) => {
  return res.send("<h1>Hello</h1>");
};

// TODO: 글로벌 라우터 경로별 컨트롤러 추가.
