import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import SplitType from 'split-type';
import { MediaBreakPointsObserver } from 'src/app/utils/breakpoint-observer';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit
{
  #viewContainerRef = inject(ViewContainerRef).element.nativeElement;
  #entryAnimationTimeline = gsap.timeline();
  #animationEnd = 'animationEnd';

  ngAfterViewInit(): void {
    this.#entryAnimationTimeline.from('.entry-screen.animated', {
      width: 0,
      stagger: 0.8,
      duration: 0.5,
      delay: 0.4,
    });

    this.#animateEntryDescription();
  }

  #animateEntryDescription(): void {
    const descriptionContents: HTMLElement[] = gsap.utils.toArray(
      '.blue-screen-description'
    );

    descriptionContents.forEach((description, index) => {
      const splittedText = new SplitType(description as HTMLElement, {
        types: 'chars',
      });

      this.#entryAnimationTimeline.from(
        splittedText.chars,
        {
          opacity: 0,
          x: -5,
          stagger: 0.05,
        },
        '+=0.3'
      );

      if (index < descriptionContents.length - 1) {
        this.#entryAnimationTimeline.to(splittedText.chars, {
          opacity: 0,
          y: -10,
          stagger: -0.01,
          onComplete: () => description.remove(),
        });
      } else {
        this.#entryAnimationTimeline
          .to(
            description,
            {
              scale: 330,
              duration: 2,
              ease: 'power1.in',
            },
            this.#animationEnd
          )
          .to(
            '.entry-blue-screen',
            { backgroundColor: '#fff' },
            `${this.#animationEnd} -=1.5`
          );
      }
    });

    this.#entryAnimationTimeline
      .to(
        this.#viewContainerRef,
        {
          opacity: 0,
        },
        `${this.#animationEnd} -=1.3`
      )
      .to(this.#viewContainerRef, {
        height: 0,
        border: '1px solid red',
      });
  }
}
