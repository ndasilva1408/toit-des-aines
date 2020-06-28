import { Component, OnInit } from '@angular/core';
import {Client} from "../model/client/client";
import {ImageService} from "../services/image.service";

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {


  cafs = ['CAF1', 'CAF2' , 'CAF3'];
  birthdate:Date = new Date();
  min: Date = new Date(1930, 1, 1)
  max: Date = new Date(1980,12,31)
  selectedFile: ImageSnippet;
  private imageService: ImageService;

  constructor() { }

  ngOnInit() {
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }

}
