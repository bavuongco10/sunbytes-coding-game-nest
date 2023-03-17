import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class MaskedBadRequestException implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.getStatus();
    console.log(exception.getResponse());

    response.status(status).json({
      message: 'BAD_REQUEST',
      statusCode: status,
      error: 'Bad Request',
      time: new Date().toISOString(),
    });
  }
}
