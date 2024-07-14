import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  dane: string ="";
  constructor() {
    this.setData();
  }
  changeImage(event: Event, isHover: boolean):void{
    const element = event.target as HTMLImageElement;
    const hoverSrc = element?.getAttribute("data-hover-src");
    const originalSrc = element?.getAttribute("data-original-src");

    if(hoverSrc && originalSrc){
      element.setAttribute("src", isHover ? hoverSrc : originalSrc);
    }
  }
  setData(){
    const data = localStorage.getItem("dane");
    if(data){
      this.dane = data;
    }
  }
}
