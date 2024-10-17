import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentInputComponent } from '@/app/features/client/components/document-input/document-input.component';
import { ClientService } from '@/app/core/services/client.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('DocumentInputComponent', () => {
  let component: DocumentInputComponent;
  let fixture: ComponentFixture<DocumentInputComponent>;
  let mockClientService: jasmine.SpyObj<ClientService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockClientService = jasmine.createSpyObj('ClientService', ['getClientData']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ DocumentInputComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: ClientService, useValue: mockClientService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getClientData on form submit', () => {
    component.clientForm.setValue({ documentType: 'C', documentNumber: '23.445.322' });
    mockClientService.getClientData.and.returnValue(of({}));

    component.onSubmit();
    expect(mockClientService.getClientData).toHaveBeenCalledWith('C', '23445322');
  });

  it('should navigate to summary on successful form submit', () => {
    component.clientForm.setValue({ documentType: 'C', documentNumber: '23.445.322' });
    mockClientService.getClientData.and.returnValue(of({}));

    component.onSubmit();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/summary'], { state: {} });
  });
});
