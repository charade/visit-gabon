import { AfterViewInit, Component } from '@angular/core';
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
    this.#pinningMaskOnEnter();
    this.#pinImageOnScroll();
  }

  #pinningMaskOnEnter(): void {
    gsap.to('.yellow-section-bg-clipper-container', {
      scrollTrigger: {
        trigger: '.yellow-section-bg-clipper-container',
        start: 'top top',
        endTrigger: '.yellow-section-container',
        end: 'bottom bottom',
        pin: '.yellow-section-bg-clipper-container',
        scrub: true,
        pinSpacing: false,
        pinType: 'fixed',
      },
    });

    gsap.to('.yellow-section-catch-phrase-container', {
      scrollTrigger: {
        trigger: '.yellow-section-container',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.yellow-section-catch-phrase-container',
        scrub: true,
        pinSpacing: false,
        pinType: 'fixed',
      },
    });
  }

  #pinImageOnScroll(): void {
    //pinning others pics on enter viewport
    const sunsetPics: HTMLLIElement[] = gsap.utils.toArray(
      '.yellow-section-background-pic'
    );

    sunsetPics.forEach((pic) => {
      gsap.to(pic, {
        scrollTrigger: {
          trigger: pic,
          start: 'top top',
          endTrigger: '.yellow-section-container',
          end: 'bottom bottom',
          pin: true,
          scrub: 1.3,
        },
      });
    });
  }
}
