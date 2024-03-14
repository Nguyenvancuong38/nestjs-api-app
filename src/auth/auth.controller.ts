import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
@Controller('auth')
export class AuthController {
    //Auth service is Automatically created when initializing the controller
    constructor(private authService: AuthService) {

    }
    //some request from client
    @Post("register")
    register() {
        return this.authService.register();
    }
    @Post("login") //...auth/login
    login() {
        return this.authService.login();
    }
}