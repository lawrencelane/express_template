import { Request, Response } from 'express';

export class BaseRoute {
    protected title: string;

    constructor() {
        this.title = "Temp Title";
    }

    public render(req: Request, res: Response, view: string, options?: Object) {
        res.locals.BASE_URL = '/';

        res.locals.title = this.title;

        res.render(view, options);
    }
}
