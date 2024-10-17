import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '@/app/core/services/client.service';

type FormControls = { documentType: string; documentNumber: string };

@Component({
  selector: 'app-document-input',
  templateUrl: './document-input.component.html'
})
export class DocumentInputComponent {
  clientForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clientService: ClientService
  ) {
    this.clientForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(14),
        ],
      ],
    });
  }

  formatDocumentNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      let { documentType, documentNumber }: FormControls = this.clientForm.value;
      documentNumber = documentNumber.replace(/\./g, '');
      this.clientService.getClientData(documentType, documentNumber).subscribe(
        (data) => {
          this.router.navigate(['/summary'], { state: data });
        },
        (error) => {
          this.error = error;
        }
      );
    }
  }
}
