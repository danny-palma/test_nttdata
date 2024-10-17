import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@/app/app-routing.module';
import { AppComponent } from '@/app/app.component';
import { ClientModule } from '@/app/features/client/client.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule, // Importamos el módulo del cliente
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
