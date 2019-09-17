import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { GrowlerModule } from './growler/growler.module';
import { LoadedOnceGuard } from './load.guard';

import { NavbarComponent } from './navbar/navbar.component'

import { AuthService } from './services/auth.service';

import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  imports: [HttpClientModule, GrowlerModule],
  exports: [GrowlerModule, NavbarComponent],
  declarations: [NavbarComponent],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: 'Window', useFactory: () => window }
  ]
})
export class CoreModule extends LoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}