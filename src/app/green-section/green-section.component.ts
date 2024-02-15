import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-green-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './green-section.component.html',
  styleUrls: ['./green-section.component.scss'],
})
export class GreenSectionComponent implements AfterViewInit {
  @Input() animationTimeline: gsap.core.Timeline;

  ngAfterViewInit(): void {
    const svgElement = document.querySelector('.clipGreenVideo') as SVGAElement;

    svgElement.addEventListener('pointerenter', (e) =>
      gsap.to('.cursor-mask', {
        y: -50,
        x: -14,
        scale: 4,
        ease: 'sin.inOut',
        duration: 0.5,
      })
    );

    svgElement.addEventListener('pointerleave', () =>
      gsap.to('.cursor-mask', {
        scale: 1,
        y: 0,
        x: 0,
        ease: 'sin.inOut',
        duration: 0.8,
      })
    );

    this.animationTimeline.add(
      this.#enteringGreenSectionIntroContentAnimation()
    );

    this.animationTimeline.add(this.#exitGreenSectionIntroContentAnimation());
  }

  #enteringGreenSectionIntroContentAnimation(): gsap.core.Timeline {
    const greenSpeciesTextContent = document.querySelectorAll(
      '.green-species-description-content > h3'
    );

    return gsap
      .timeline({
        ease: 'sine',
        scrollTrigger: {
          trigger: 'section.green-section-intro',
          start: 'top 99%',
          end: 'top 98%',
          scrub: 3,
        },
      })
      .to('.cursor-mask', {
        opacity: 0,
      })

      .from('.green-section-content', {
        opacity: 0,
        xPercent: -150,
        duration: 4,
      })
      .to(
        '.low-video-container',
        {
          // reset the hublot video on returning to intro content
          scale: 1,
          opacity: 1,
        },
        '-=0.5'
      )
      .from('.green-species-description-content', {
        opacity: 0,
        height: 0,
        stagger: 1,
      })
      .from('.green-species-description-content > h3', {
        transformOrigin: 'top right',
        rotateZ: '-30deg',
        y: 20,
        opacity: 0,
        stagger: 0.3,
      });
  }

  #exitGreenSectionIntroContentAnimation(): gsap.core.Timeline {
    return gsap
      .timeline({
        scrollTrigger: {
          trigger: 'section.green-section-intro',
          start: 'top center',
          end: 'top 45%',
          scrub: 4,
        },
      })
      .to('.low-video-container', {
        scale: 0.3,
        opacity: 0,
        duration: 1.3,
      })
      .to('.green-section-intro-content > *', {
        x: 100,
        opacity: 0,
        stagger: 0.3,
      });
  }
}
