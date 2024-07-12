import { Controller, Get, Post } from '@nestjs/common';
import { response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('login')
export class LoginController {


    @Post("")
    findAll():  object{

       
        return { mensaje: 'Hola desde NestJS!' };  
    }

   
}
