import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { MediaBreakPointsObserver } from 'src/app/utils/breakpoint-observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'blue-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blue-section.component.html',
  styleUrls: ['./blue-section.component.scss'],
})
export class BlueSectionComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit
{
  @Input() animationTimeline: gsap.core.Timeline;

  ngAfterViewInit(): void {
    this.animationTimeline.add(this.#enteringBlueSection());
  }

  #enteringBlueSection(): gsap.core.Timeline {
    const tl = gsap.timeline();

    tl.to('.blue-section-catch-phrase', {
      scrollTrigger: {
        trigger: '.blue-section-container',
        start: 'top 20%',
        end: 'bottom bottom',
        pin: '.blue-section-catch-phrase',
      },
    });

    return tl;
  }
}
