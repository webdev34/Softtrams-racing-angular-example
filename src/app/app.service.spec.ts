import { TestBed, inject } from '@angular/core/testing';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";
import { MembersComponent } from "./members/members.component";
import { MemberDetailsComponent } from "./member-details/member-details.component";
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

const ROUTES = [
  {
    path: "",
    redirectTo: "members",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "members",
    component: MembersComponent
  },
  {
    path: "member-details/:id",
    component: MemberDetailsComponent
  }
];

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, BannerComponent, MembersComponent, MemberDetailsComponent, LoginComponent],
      providers: [AppService, ToastrService],
      imports: [HttpClientModule, ToastrModule.forRoot(), FormsModule, ReactiveFormsModule, RouterModule.forRoot(ROUTES, { useHash: true }),]
    });
  });

  it('should be created', inject([AppService, ToastrService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
});
