import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import gsap from 'gsap';
import { GreenSectionComponent } from './green-section/green-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EntryComponent, GreenSectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'visit-gabon';
  mainAnimationTimeline = gsap.timeline();
}
