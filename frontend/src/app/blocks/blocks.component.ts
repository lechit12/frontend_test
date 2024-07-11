import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss'
})
export class BlocksComponent {

}
