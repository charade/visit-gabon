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
    this.animationTimeline.add(this.#exitYellowSection());
  }

  #enteringYellowSection(): gsap.core.Timeline {
    return gsap
      .timeline({
        scrollTrigger: {
          trigger: 'section.yellow-section',
          start: 'top 75%',
          end: 'top 75%',
          scrub: 2,
        },
      })
      .from('.yellow-section-container', {
        xPercent: -100,
        ease: 'expo.out',
      });
  }

  #exitYellowSection(): gsap.core.Timeline {
    return gsap
      .timeline({
        scrollTrigger: {
          trigger: 'section.yellow-section',
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: 3,
        },
      })
      .to(
        'h2.yellow-section-catch-phrase-container',
        {
          y: -100,
          opacity: 0,
          ease: 'power2',
        },
        'exit yellow section'
      )
      .to(
        '.yellow-section-bg-clipper path',
        {
          y: '+0.1%',
          opacity: 0,
          ease: 'power2',
        },
        'exit yellow section'
      );
  }
}
