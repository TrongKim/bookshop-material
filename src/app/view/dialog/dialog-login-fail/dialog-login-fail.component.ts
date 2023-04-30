import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-login-fail',
  templateUrl: './dialog-login-fail.component.html',
  styleUrls: ['./dialog-login-fail.component.scss']
})
export class DialogLoginFailComponent implements OnInit {
  
  isForgotPassword: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogLoginFailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { email: string },
  ) {}

  ngOnInit(): void {}

  //=========================DOM EVENT FUNCTION=========================

  clickEventCloseDialog(): void {
    this.dialogRef.close();
  }

}
