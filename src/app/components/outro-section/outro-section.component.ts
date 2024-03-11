import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import SplitType from 'split-type';

import { MediaBreakPointsObserver } from 'src/app/utils/breakpoint-observer';

@Component({
  selector: 'outro-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outro-section.component.html',
  styleUrls: ['./outro-section.component.scss'],
})
export class OutroSectionComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit
{
  ngAfterViewInit(): void {
    this.#enteringOutroSection();
  }

  #enteringOutroSection(): void {
    const splittedText = new SplitType('.outro-catch-phrase:first-child', {
      types: 'chars',
    });

    gsap.to(splittedText.chars, {
      color: 'rgba(72, 138, 110, 0.6)',
      stagger: 0.7,
      scrollTrigger: {
        trigger: '.outro-section-container',
        start: 'top center',
        end: 'top 9%',
        scrub: 2,
      },
    });
    gsap.from('.outer-section-yellow-circle', {
      y: 190,
      scrollTrigger: {
        trigger: '.outro-section-container',
        start: 'top 8%',
        end: 'top 5%',
        scrub: 3,
      },
    });
    gsap.from('.outer-section-blue-circle', {
      y: -150,
      scrollTrigger: {
        trigger: '.outro-section-container',
        start: 'top 5%',
        end: 'top top',
        scrub: 4,
      },
    });
  }
}
