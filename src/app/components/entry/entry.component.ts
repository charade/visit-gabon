import {
  AfterViewInit,
  Component,
  Input,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import SplitType from 'split-type';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements AfterViewInit {
  @Input() animationTimeline: gsap.core.Timeline;

  #viewContainerRef = inject(ViewContainerRef).element.nativeElement;

  ngAfterViewInit(): void {
    const entryTimelineAnimation = gsap
      .timeline()
      .from('.entry-screen.animated', {
        width: 0,
        stagger: 0.8,
        duration: 1,
        delay: 0.5,
      });
    this.animationTimeline.add(entryTimelineAnimation);
    this.#animateEntryDescription();
  }

  #animateEntryDescription(): void {
    const descriptionContents = document.querySelectorAll(
      '.blue-screen-description'
    );

    descriptionContents.forEach((description, index) => {
      const splittedText = new SplitType(description as HTMLElement, {
        types: 'chars',
      });

      const tl = gsap
        .timeline()
        .from(description, { opacity: 0 })
        .from(splittedText.chars, {
          opacity: 0,
          x: -8,
          stagger: 0.1,
        });

      if (index < 7) {
        tl.to(
          splittedText.chars,
          {
            opacity: 0,
            y: -10,
            stagger: -0.05,
            onComplete: () => description.remove(),
          },
          '+=0.8'
        );
      }

      this.animationTimeline.add(tl);
    });

    this.animationTimeline
      .to(this.#viewContainerRef, {
        height: 0,
        duration: 0.5,
        delay: 1,
      })
      .to(this.#viewContainerRef, { opacity: 0 }, '-=0.6');
  }
}
