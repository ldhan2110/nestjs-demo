import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    console.log(request.body);

    if (exception instanceof HttpException) {
      console.log('This is HttpException');
      response.status(exception.getStatus()).json({
        errorType: 'Http Exception',
        statusCode: exception.getStatus(),
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else {
      console.log('This is ErrorResponse');
      response.status(exception.statusCode).json({
        errorType: 'Error Response',
        statusCode: exception.statusCode,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
