import { NextFunction, Response, Request, Router } from 'express';
import { BaseRoute } from "./BaseRoute";

export default class UsersIndex extends BaseRoute {
    constructor() {
        super();
        this.title = "Users";
    }

    public static create(router: Router): void {
        router.get('/users', (req: Request, res: Response, next: NextFunction) => {
            new UsersIndex().users(req, res, next);
        })
    }

    public users(req: Request, res: Response, next: NextFunction) {
        const options: Object = {
            message: "Welcome to Users",
        }
        this.render(req, res, 'users', options);
    }

}
