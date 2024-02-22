import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
@Component({
  selector: 'yellow-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yellow-section.component.html',
  styleUrls: ['./yellow-section.component.scss'],
})
export class YellowSectionComponent implements AfterViewInit {
  @Input() animationTimeline: gsap.core.Timeline;

  ngAfterViewInit(): void {
    this.animationTimeline.add(this.#enteringYellowSection());
  }

  #enteringYellowSection(): gsap.core.Timeline {
    return gsap
      .timeline({
        scrollTrigger: {
          trigger: 'section.yellow-section',
          start: 'top 65%',
          end: 'top 65%',
          scrub: 2,
        },
      })
      .from('.yellow-section-container', { xPercent: -150, ease: 'expo.out' });
  }
}
