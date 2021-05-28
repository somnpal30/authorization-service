import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {LoaderService} from '../service/loader.service';
import {delay, finalize, tap} from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNYXJ2ZWwgQ2luZW1hdGljIFVuaXZlcnNlIiwiaWF0IjoxNjIxOTQyNjkxLCJleHAiOjE2NTM0Nzg2OTEsImF1ZCI6Ind3dy5tYXJ2ZWwuY29tIiwic3ViIjoiYWRtaW4uYXZlbmdlcnNAbWFydmVsLmNvbSIsIkdpdmVuTmFtZSI6IlN0ZXZlIiwiU3VybmFtZSI6IlJvZ2VyIiwiRW1haWwiOiJzdGV2ZS5yb2dlckBtY3UuY29tIiwiUm9sZSI6WyJBdmVuZ2VycyIsIkNhcHRhaW4gQW1lcmljYSJdfQ.lGotxaXEoUyO3oNEJTIgLtmkDCnumtt3QJbXl4AzTvU`
      }
    });

    return next.handle(request).pipe(
      delay(2000),
      finalize(() => this.hideLoader())
    );
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    // console.log('show loader');
    this.loaderService.show();
  }

  private hideLoader(): void {
    // console.log('hide loader');
    this.loaderService.hide();
  }
}
