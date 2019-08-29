import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberDetailsComponent } from './member-details.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { Member } from '../app.member-class';
import { Team } from '../app.team-class';

const fakeActivatedRoute = {
  snapshot: { 
    data: {} 
  }
} as ActivatedRoute;

// Bonus points! 
describe('MemberDetailsComponent', () => {
  let component: MemberDetailsComponent;
  let fixture: ComponentFixture<MemberDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberDetailsComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        ToastrModule.forRoot()
      ],
      providers: [
        HttpClient,
        FormBuilder,
        AppService, 
        ToastrService,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        },
        {provide: ActivatedRoute, useValue: fakeActivatedRoute}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailsComponent);
    component = fixture.componentInstance;
    component.memberId = 1;
    component.currentMember = new Member(3,"Jeb","Jackson","Reserve Driver","Formula 1 - Car 77","Inactive");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
