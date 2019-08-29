import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { APP_BASE_HREF } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from "ngx-toastr";
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, BannerComponent],
      imports: [RouterModule.forRoot([]),  HttpClientTestingModule, ToastrModule.forRoot(), HttpClientModule, HttpModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ToastrService, HttpClientModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'softrams-racing'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('softrams-racing');
  }));
});
