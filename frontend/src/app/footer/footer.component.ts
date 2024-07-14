import {Component, HostListener} from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {ContentService} from "../content.service";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    NgIf,
    MatIcon
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  arrowIcon: string = 'keyboard_arrow_up';
  dane: string = "";
  toggleClicked = false;

  constructor(private contentService: ContentService) {
  }

  resetSettings() {
    window.location.reload();
    localStorage.removeItem("dane");
  }

  loadData(): void {
    this.contentService.getContent().subscribe(
      data => {
        localStorage.setItem("dane", data.dane);
        window.location.reload();
      },
      error => {
        console.error('Error loading JSON data', error);
      }
    );
  }

  showData() {
    this.loadData();
  }

  toggle() {
    this.arrowIcon = this.arrowIcon === 'keyboard_arrow_up' ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {

    const isIconClick = (event.target as HTMLElement).closest('.mat-icon') !== null;
    const isMenuClick = (event.target as HTMLElement).closest('.button-show') !== null;
    if (!isIconClick && !isMenuClick) {
      this.arrowIcon = 'keyboard_arrow_up';
    }
  }
}
