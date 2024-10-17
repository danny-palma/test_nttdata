import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentInputComponent } from '@/app/features/client/components/document-input/document-input.component';
import { SummaryComponent } from '@/app/features/client/components/summary/summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DocumentInputComponent, SummaryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: DocumentInputComponent },
      { path: 'summary', component: SummaryComponent },
    ]),
  ],
})
export class ClientModule {}
