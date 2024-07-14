import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ContentService} from "../content.service";

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss'
})
export class BlocksComponent implements OnInit{
  selectedOption: string ="";
  texts: string[] = [];
  displayedTexts: string[] = [];
  isOptionRequired: boolean = false;

  constructor(private contentService:ContentService) {}

  ngOnInit(): void {
    this.loadTexts();

  }

  loadTexts(): void {
    this.contentService.getContent().subscribe(
      data => {
        this.texts = data.texts;
        console.log(this.texts);
      },
      error => {
        console.error('Error loading JSON data', error);
      }
    );
  }

  replaceText(): void {
    if(this.selectedOption === ""){
      this.isOptionRequired = true;
    }
    else {
      this.isOptionRequired = false;
      let newText = this.getTextByOption(this.selectedOption);
      this.displayedTexts = [`<p>${newText}</p>`];
    }
  }

  appendText(): void {
    if(this.selectedOption === ""){
      this.isOptionRequired = true;
    }
    else {
      this.isOptionRequired = false;
      let newText = this.getTextByOption(this.selectedOption);
      if (!this.displayedTexts.includes(`<p>${newText}</p>`)) {
        this.displayedTexts.push(`<p>${newText}</p>`);
        this.displayedTexts.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
      } else {
        alert("Ten tekst jest już dodany.");
      }
    }
  }

  getTextByOption(option: string): string {
    console.log(this.selectedOption);
    if (option === "1") {
      return this.texts[0];
    } else if (option === "2") {
      return this.texts[1];
    } else {
      const randomIndex = Math.floor(Math.random() * (this.texts.length - 2)) + 2;
      return this.texts[randomIndex];
    }
  }
}
