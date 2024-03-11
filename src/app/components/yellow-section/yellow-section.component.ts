import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { MediaBreakPointsObserver } from 'src/app/utils/breakpoint-observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

  readonly yellowSectionPics = [
    {
      src: '/assets/pics/yellow-section/coucher-soleil-yeux.jpg',
      alt: 'pic 1',
    },
    {
      src: '/assets/pics/yellow-section/coucher_soleil_1.jpg',
      alt: 'pic 2',
      backgroundPosition: 'left bottom',
    },

    {
      src: '/assets/pics/yellow-section/coucher-de-soleil-nyonie.jpg',
      alt: 'pic 3',
      backgroundPosition: '23% bottom',
    },
    {
      src: '/assets/pics/yellow-section/coucher-soleil.jpg',
      alt: 'pic 4',
      backgroundPosition: 'center 30%',
    },
  ];

  ngAfterViewInit(): void {
    this.animationTimeline.add(this.#pinningMaskOnEnter());
    this.animationTimeline.add(this.#pinImageOnScroll());
  }

  #pinningMaskOnEnter(): gsap.core.Timeline {
    return gsap
      .timeline()
      .to('.yellow-section-bg-clipper-container', {
        scrollTrigger: {
          trigger: '.yellow-section-container',
          start: 'top top',
          end: 'bottom bottom',
          pin: '.yellow-section-bg-clipper-container',
          scrub: true,
          pinType: 'fixed',
          pinSpacing: false,
          anticipatePin: 1,
        },
      })
      .to('.yellow-section-catch-phrase-container', {
        scrollTrigger: {
          trigger: '.yellow-section-container',
          start: 'top top',
          end: 'bottom bottom',
          pin: '.yellow-section-catch-phrase-container',
          scrub: true,
          pinType: 'fixed',
          pinSpacing: false,
        },
      });
  }

  #pinImageOnScroll(): gsap.core.Timeline {
    //pinning first pic on enter section;
    ScrollTrigger.create({
      trigger: '.yellow-section-container',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.sunset-pic--0',
      scrub: true,
      pinType: 'fixed',
      pinSpacing: false,
    });

    //pinning others pics on enter viewport
    const tl = gsap.timeline();
    const sunsetPics = document.querySelectorAll(
      '.yellow-section-background-pic'
    );

    sunsetPics.forEach((pic, index) => {
      if (index) {
        tl.from(`.sunset-pic--${index} img`, {
          scrollTrigger: {
            trigger: pic,
            start: 'top 10%',
            end: 'top 10%',
            scrub: 1.3,
          },
        }).to(pic, {
          scrollTrigger: {
            trigger: `.sunset-pic--${index}`,
            start: 'top top',
            end: () => pic.parentElement.scrollHeight * 1.4,
            pin: true,
            scrub: 1.3,
          },
        });
      }
    });

    return tl;
  }
}
