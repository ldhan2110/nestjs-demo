import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IRequest } from 'src/middleware/logger.middleware';

@Injectable()
export class StudentInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before Interceptor...');
    const ctx = context.switchToHttp().getRequest<IRequest>();
    // ctx.body = {
    //   username: 'An Le',
    // };
    const now = Date.now();

    return next.handle().pipe(
      tap((x) => console.log('tap: ', x)),
      map((value: any[]) => {
        console.log(value);
        return value.map((item) => ({
          ...item,
          customField: 'admin',
        }));
      }),
      map((value) => ({
        ...value,
        customField2: 'admin2',
      })),
    );
  }
}


