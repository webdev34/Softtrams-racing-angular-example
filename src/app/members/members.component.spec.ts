import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateRef } from "@angular/core";
import { MembersComponent } from './members.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { BsModalService, BsModalRef, ModalModule } from "ngx-bootstrap";
import { Member } from '../app.member-class';
import { Team } from '../app.team-class';

const fakeActivatedRoute = {
  snapshot: { 
    data: {} 
  }
} as ActivatedRoute;

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MembersComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        ToastrModule.forRoot(),
        ModalModule.forRoot()
      ],
      providers: [
        HttpClient,
        FormBuilder,
        AppService, 
        ToastrService,
        BsModalService,
        BsModalRef,
        TemplateRef,
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
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    component.modalRef = new BsModalRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
