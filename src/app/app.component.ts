import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { EntryComponent } from './entry/entry.component';
import { GreenSectionComponent } from './green-section/green-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EntryComponent, GreenSectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'visit-gabon';
  mainAnimationTimeline = gsap.timeline();

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    const cursorTracker = document.querySelector('.cursor-tracker');
  }
}
