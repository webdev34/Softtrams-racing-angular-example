import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { BannerComponent } from './banner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppService } from '../app.service';
import { ToastrModule, ToastrService } from "ngx-toastr";

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      providers: [AppService, ToastrService],
      imports: [ HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
