import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-register-fail',
  templateUrl: './dialog-register-fail.component.html',
  styleUrls: ['./dialog-register-fail.component.scss']
})
export class DialogRegisterFailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogRegisterFailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { email: string, message: string },
  ) {}

  ngOnInit(): void {}

  //=========================DOM EVENT FUNCTION=========================

  clickEventCloseDialog(): void {
    this.dialogRef.close();
  }

}
