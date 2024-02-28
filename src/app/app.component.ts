import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { EntryComponent } from './components/entry/entry.component';
import { GreenSectionComponent } from './components/green-section/green-section.component';
import { YellowSectionComponent } from './components/yellow-section/yellow-section.component';
import { BlueSectionComponent } from './components/blue-section/blue-section.component';
import { IconEnum } from './utils/icons-enum';
import { IconComponent } from './icon/icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    EntryComponent,
    GreenSectionComponent,
    YellowSectionComponent,
    BlueSectionComponent,
    IconComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'visit-gabon';
  mainAnimationTimeline = gsap.timeline();
  IconEnum = IconEnum;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }
}
