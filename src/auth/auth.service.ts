import { Injectable } from "@nestjs/common";
@Injectable({})
export class AuthService{
    register() {
        return {
            status: 200,
            message: "This is register"
        };
    }

    login() {
        return {
            status: 200,
            message: "This is login"
        };
    }
}