import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";
import {MatSnackBarModule} from '@angular/material/snack-bar';
/**
 * apollo client
 */
import {ApolloBoostModule, APOLLO_BOOST_CONFIG} from 'apollo-angular-boost';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ApolloBoostModule
  ],
  providers: [{
    provide: APOLLO_BOOST_CONFIG,
    useFactory() {
      return {
        uri : 'https://assignment-rewoke.herokuapp.com/graphql'
      };
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
