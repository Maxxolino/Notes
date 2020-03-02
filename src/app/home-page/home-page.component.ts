import { Component, Input } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import {MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(
    public afAuth: AngularFireAuth
    ){}
}
