import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { MediaBreakPointsObserver } from '../breakpoint-observer';

@Component({
  selector: 'app-green-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './green-section.component.html',
  styleUrls: ['./green-section.component.scss'],
})
export class GreenSectionComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit
{
  @Input() animationTimeline: gsap.core.Timeline;

  #greenSectionSecondContentBgCinematic = 'cinematic';

  ngAfterViewInit(): void {
    const svgElement = document.querySelector('.clipGreenVideo') as SVGAElement;

    svgElement.addEventListener('pointerenter', (e) =>
      gsap.to('.cursor-mask', {
        y: -31,
        x: -20,
        scale: 2.5,
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
    this.animationTimeline.add(this.#enteringGreenSectionSecondContent());
  }

  #enteringGreenSectionIntroContentAnimation(): gsap.core.Timeline {
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
      .from('.green-section-contents-container', {
        opacity: 0,
        xPercent: -150,
        duration: 4,
      })
      .to('.low-video-container', {
        // reset the hublot video on returning to intro content
        scale: 1,
        opacity: 1,
      })
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
          end: 'top 40%',
          scrub: 4,
        },
      })
      .to('.low-video-container', {
        scale: 0.3,
        opacity: 0,
        duration: 2,
      })
      .to('.green-section-intro-content > *', {
        x: 100,
        opacity: 0,
        stagger: 0.3,
      })
      .to('.green-section-contents', {
        backgroundColor: 'rgb(173, 189, 175)',
        duration: 1,
      })
      .from(
        '.green-section-second-content',
        {
          opacity: 0,
        },
        this.#greenSectionSecondContentBgCinematic
      )
      .from('.green-section-second-content-bg', {
        filter: 'grayscale(0)',
        scale: 0.8,
      });
  }

  #enteringGreenSectionSecondContent(): gsap.core.Timeline {
    return gsap
      .timeline({
        scrollTrigger: {
          trigger: 'section.green-section-intro',
          start: 'top 40%',
          end: 'top 40%',
          scrub: 4,
        },
      })

      .from(
        '.separator.first',
        { width: 0 },
        this.#greenSectionSecondContentBgCinematic + '+=52'
      )
      .from(
        '.green-section-second-content-catch-phrase',
        {
          y: 20,
          opacity: 0,
        },
        this.#greenSectionSecondContentBgCinematic + '+=53'
      )
      .from(
        '.green-section-second-content-description > p',
        {
          y: -40,
          opacity: 0,
        },
        this.#greenSectionSecondContentBgCinematic + '+=53'
      )
      .from(
        '.green-section-second-content-explore',
        {
          clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 100%)',
          ease: 'sine',
          duration: 5,
        },
        this.#greenSectionSecondContentBgCinematic + '+=60'
      )
      .from(
        '.green-section-second-content-img-explore',
        {
          y: 30,
          opacity: 0,
          stagger: 0.3,
        }
        // this.#greenSectionSecondContentBgCinematic + '+=62'
      );
  }
}
