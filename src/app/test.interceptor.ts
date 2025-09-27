import type { HttpInterceptorFn } from '@angular/common/http';

export const testInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('SHELL INTERCEPTOR, SHOULD SHOW EVEN IN MFEs HTTP calling');
  return next(req);
};
