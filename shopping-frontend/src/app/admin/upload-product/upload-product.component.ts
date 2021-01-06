import {Component, OnInit} from '@angular/core';
import {TypeProductService} from '../../service/type-product.service';
import {TypeProduct} from '../../model/TypeProduct';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';
import {DatePipe} from '@angular/common';
import {TokenStorageService} from '../../service/token-storage.service';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.css']
})
export class UploadProductComponent implements OnInit {
  typeProducts: TypeProduct[] = [];
  uploadForm: FormGroup;
  currentDate: string;
  user: User = null;
  username: string;

  constructor(private typeProductService: TypeProductService,
              private fb: FormBuilder,
              private userService: UserService,
              private datePipe: DatePipe,
              private tokenStorageService: TokenStorageService,
              private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    const dateCur = new Date();
    this.currentDate = this.datePipe.transform(dateCur, 'yyyy-MM-ddTHH:mm:ss');
    this.username = this.tokenStorageService.getUsername();
    this.userService.getUser(this.username).subscribe(
      (data) => {
        this.user = data;

      }
    );

    this.typeProductService.getAll().subscribe(
      (data) => {
        this.typeProducts = data;
      }
    );
    this.uploadForm = this.fb.group(
      {
        id: [''],
        name: [''],
        price: [''],
        url: [''],
        quantity: [0],
        saleOff: [0],
        tradeMark: [0],
        typeProduct: TypeProduct,
        dateUpload: [this.currentDate],
        view: [0],
        commentAmount: [0],
        downloadAmount: [0],
        followed: [0],
        user: User,
        deleted: [0],
        description: ['No description'],
      }
    );
  }

  submitUpload() {
    this.uploadForm.patchValue({user: this.user});
    this.productService.addNewProduct(this.uploadForm.value).subscribe(
      (data) => {
        console.log('da upload');
      }
    );
  }
}
