import {
  AfterViewInit,
  Component,
  Input,
  ViewContainerRef,
  inject,
} from '@angular/core';
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
  #viewContainerEl = inject(ViewContainerRef).element.nativeElement;

  readonly yellowSectionPics = [
    { src: '/assets/pics/yellow-section/coucher-soleil.jpg', alt: 'pic 1' },
    { src: '/assets/pics/yellow-section/coucher_soleil_1.jpg', alt: 'pic 2' },
    {
      src: '/assets/pics/yellow-section/coucher-de-soleil-nyonie.jpg',
      alt: 'pic 4',
    },
    {
      src: '/assets/pics/yellow-section/coucher-soleil-yeux.jpg',
      alt: 'pic 5',
    },
    {
      src: '/assets/pics/yellow-section/tortue-coucher-soeil.jpg',
      alt: 'pic 6',
    },
  ];
  ngAfterViewInit(): void {
    this.#pinningMaskOnEnter();
  }

  #pinningMaskOnEnter(): void {
    ScrollTrigger.create({
      trigger: '.yellow-section-container',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.yellow-section-bg-clipper',
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: '.yellow-section-container',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.yellow-section-catch-phrase-container',
      scrub: true,
    });
  }
}
