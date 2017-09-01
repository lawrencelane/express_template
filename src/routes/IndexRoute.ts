import { NextFunction, Response, Request, Router } from 'express';
import { BaseRoute } from "./BaseRoute";

export default class IndexRoute extends BaseRoute {
    constructor() {
        super();
        this.title = "Index";
    }

    public static create(router: Router) {
        /* GET home page. */
        router.get('/', (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });
    }

    public index(req: Request, res: Response, next: NextFunction) {
        const options: Object = {
            message: "Welcome to Index",
        }
        this.render(req, res, 'index', options);
    }
}
