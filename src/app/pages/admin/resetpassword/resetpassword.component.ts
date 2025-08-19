import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-resetpassword',
  imports: [SharedModule,RouterModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent {

  resetForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.resetForm = this.fb.group({
      oldPassword:[''],
      newPassword:['']
    });

  }


  onReset(){
      console.log(this.resetForm.value);
    
  }
}
