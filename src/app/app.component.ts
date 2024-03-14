import { Component } from '@angular/core';
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
import { OutroSectionComponent } from './components/outro-section/outro-section.component';
import { MediaBreakPointsObserver } from './utils/breakpoint-observer';

gsap.registerPlugin(ScrollTrigger);

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
    OutroSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends MediaBreakPointsObserver {
  title = 'visit-gabon';
  IconEnum = IconEnum;
}
