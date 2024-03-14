import {
  AfterViewInit,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { toObservable } from '@angular/core/rxjs-interop';

import { MediaBreakPointsObserver } from 'src/app/utils/breakpoint-observer';
import { IconComponent } from 'src/app/icon/icon.component';
import { IconEnum } from 'src/app/utils/icons-enum';
import { pairwise } from 'rxjs';
@Component({
  selector: 'yellow-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './yellow-section.component.html',
  styleUrls: ['./yellow-section.component.scss'],
})
export class YellowSectionComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit
{
  IconEnum = IconEnum;
  currentPicPosition: WritableSignal<number> = signal(0);

  animatePic = toObservable(this.currentPicPosition)
    .pipe(pairwise())
    .subscribe(([prev, current]) => {
      // on click next button make disappear curent pic
      if (prev < current) {
        gsap.to(`.sunset-pic--${prev}`, {
          opacity: 0,
          duration: 1.4,
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

  ngAfterViewInit(): void {}

  setCurrentPic(direction: 1 | -1): void {
    if (
      this.currentPicPosition() + direction > -1 &&
      this.currentPicPosition() + direction < this.yellowSectionPics.length
    ) {
      this.currentPicPosition.update((value) => value + direction);
    }
  }
}
