import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'blue-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blue-section.component.html',
  styleUrls: ['./blue-section.component.scss'],
})
export class BlueSectionComponent implements AfterViewInit {
  @Input() animationTimeline: gsap.core.Timeline;

  ngAfterViewInit(): void {
    this.animationTimeline.add(this.#enteringBlueSection());
  }

  #enteringBlueSection(): gsap.core.Timeline {
    return gsap
      .timeline({
        scrollTrigger: {
          trigger: 'section.blue-section',
          start: 'top 15%',
          end: 'top 15%',
          scrub: 3,
        },
      })
      .to('.blue-section-container', {
        opacity: 1,
      });
  }
}
