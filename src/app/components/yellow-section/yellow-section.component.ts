import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { MediaBreakPointsObserver } from 'src/app/utils/breakpoint-observer';
@Component({
  selector: 'yellow-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yellow-section.component.html',
  styleUrls: ['./yellow-section.component.scss'],
})
export class YellowSectionComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit
{
  @Input() animationTimeline: gsap.core.Timeline;

  ngAfterViewInit(): void {
    this.animationTimeline.add(this.#enteringYellowSection());
  }

  #enteringYellowSection(): gsap.core.Timeline {
    return gsap
      .timeline({
        scrollTrigger: {
          trigger: 'section.yellow-section',
          start: 'top 75%',
          end: 'top 75%',
          scrub: 3,
        },
      })
      .from('.yellow-section-container', {
        xPercent: -100,
        ease: 'expo.out',
      });
  }
}
