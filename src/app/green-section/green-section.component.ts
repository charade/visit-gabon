import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import SplitType from 'split-type';

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

    this.animationTimeline.add(this.#enteringGreenSectionContentAnimation());
  }

  #enteringGreenSectionContentAnimation(): gsap.core.Timeline {
    const greenSpeciesTextContent = document.querySelectorAll(
      '.green-species-description-content > h3'
    );

    return gsap
      .timeline({
        ease: 'sine',
        scrollTrigger: {
          trigger: 'section.green-section',
          start: 'top 99%',
          end: 'top 90%',
          scrub: 4,
        },
      })
      .to('.cursor-mask', {
        opacity: 0,
      })
      .from('.green-section-content', {
        opacity: 0,
        xPercent: -150,
        duration: 5,
      })
      .from('.green-species-description-content', {
        opacity: 0,
        height: 0,
        stagger: 1,
      })
      .from('.green-species-description-content > h3', {
        transformOrigin: 'top right',
        rotateZ: '-45deg',
        y: 20,
        opacity: 0,
        stagger: 0.4,
      });
  }
}
