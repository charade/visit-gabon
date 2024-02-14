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

    svgElement.addEventListener('mouseenter', (e) =>
      gsap.to('.cursor-mask', {
        y: -30,
        x: -12,
        scale: 3.2,
        ease: 'sin.inOut',
        duration: 0.5,
      })
    );

    svgElement.addEventListener('mouseleave', () =>
      gsap.to('.cursor-mask', {
        scale: 1,
        y: 0,
        x: 0,
        ease: 'sin.inOut',
        duration: 0.8,
      })
    );
  }
}
