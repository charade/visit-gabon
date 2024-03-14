import {
  AfterViewInit,
  Component,
  DestroyRef,
  OnDestroy,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

import { MediaBreakPointsObserver } from 'src/app/utils/breakpoint-observer';
import { IconComponent } from 'src/app/icon/icon.component';
import { IconEnum } from 'src/app/utils/icons-enum';
import { Subscription, pairwise, takeUntil } from 'rxjs';
@Component({
  selector: 'yellow-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './yellow-section.component.html',
  styleUrls: ['./yellow-section.component.scss'],
})
export class YellowSectionComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit, OnDestroy
{
  IconEnum = IconEnum;
  currentPicPosition: WritableSignal<number> = signal(0);
  #destroyRef = inject(DestroyRef);

  animatePic = toObservable(this.currentPicPosition)
    .pipe(pairwise(), takeUntilDestroyed(this.#destroyRef))
    .subscribe(([prev, current]) => {
      // on click next button make disappear curent pic
      if (prev < current) {
        gsap.to(`.sunset-pic--${prev}`, {
          opacity: 0,
          duration: 1.5,
        });
      }
      // on click prev button make appear prev pic
      else if (prev > current) {
        gsap.to(`.sunset-pic--${current}`, {
          opacity: 1,
          duration: 1.5,
        });
      }
    });

  readonly yellowSectionPics: {
    src: string;
    backgroundPosition: string;
  }[] = [
    {
      src: '/assets/pics/yellow-section/coucher-soleil-yeux.jpg',
      backgroundPosition: 'center center',
    },
    {
      src: '/assets/pics/yellow-section/coucher_soleil_1.jpg',
      backgroundPosition: 'left bottom',
    },

    {
      src: '/assets/pics/yellow-section/coucher-de-soleil-nyonie.jpg',
      backgroundPosition: '35% bottom',
    },
    {
      src: '/assets/pics/yellow-section/coucher-soleil.jpg',
      backgroundPosition: 'center 30%',
    },
  ];

  ngAfterViewInit(): void {
    this.#enteringYellowSectionAnimaition();
  }

  #enteringYellowSectionAnimaition(): void {
    const pics = gsap.utils.toArray('.yellow-section-background-pic');
    pics.forEach((pic, index) => {
      gsap.from(pic as HTMLElement, {
        rotate: `-${(index + 1) * 20}deg`,
        scale: 0.5,
        scrollTrigger: {
          trigger: '.yellow-section-container',
          start: 'top 70%',
          end: 'top 30%',
          scrub: 2,
        },
      });
    });
  }

  setCurrentPic(direction: 1 | -1): void {
    if (
      this.currentPicPosition() + direction > -1 &&
      this.currentPicPosition() + direction < this.yellowSectionPics.length
    ) {
      this.currentPicPosition.update((value) => value + direction);
    }
  }
}
