import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html',
  styleUrls: ['./dialog-add-product.component.scss']
})
export class DialogAddProductComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, username: string },
  ) { }

  ngOnInit(): void {

  }

  //=========================DOM EVENT FUNCTION=========================

  clickEventCloseDialog(): void {
    this.dialogRef.close();
  }

}
