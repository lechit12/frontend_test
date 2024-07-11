import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  changeImage(event: Event, isHover: boolean):void{
    const element = event.target as HTMLImageElement;
    const hoverSrc = element?.getAttribute("data-hover-src");
    const originalSrc = element?.getAttribute("data-original-src");

    if(hoverSrc && originalSrc){
      element.setAttribute("src", isHover ? hoverSrc : originalSrc);
    }
  }
}
