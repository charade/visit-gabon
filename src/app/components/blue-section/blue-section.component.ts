import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { MediaBreakPointsObserver } from 'src/app/utils/breakpoint-observer';

enum PicAnimationDirection {
  Width = 1,
  Height,
}

@Component({
  selector: 'blue-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blue-section.component.html',
  styleUrls: ['./blue-section.component.scss'],
})
export class BlueSectionComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit
{
  readonly blueSectionPic = [
    {
      src: '/assets/pics/b-section/baie_du_cap.jpg',
      alt: 'bai du cap Estuaire',
      animationDirection: PicAnimationDirection.Width,
    },
    {
      src: '/assets/pics/b-section/baleine.jpg',
      alt: 'photo baleine',
      animationDirection: PicAnimationDirection.Height,
    },
    {
      src: '/assets/pics/b-section/dauphins.jpg',
      alt: 'photo dauphins',
      animationDirection: PicAnimationDirection.Height,
    },
    {
      src: '/assets/pics/b-section/gabon_plage.jpeg',
      alt: 'tropicana plage',
      animationDirection: PicAnimationDirection.Width,
    },
    {
      src: '/assets/pics/b-section/tortue.jpg',
      alt: 'photo tortue luth',
      animationDirection: PicAnimationDirection.Width,
    },
  ];
  ngAfterViewInit(): void {
    this.#animateBlueSectionPics();
  }

  #animateBlueSectionPics(): void {
    const pics: HTMLElement[] = gsap.utils.toArray('.blue-section-pic');

    const tl = gsap.timeline();

    pics.forEach((pic, index) => {
      gsap.from(pic, {
        ease: 'expo.in',
        delay: 0.1,
        scale: 2,
        width:
          this.blueSectionPic[index].animationDirection ===
            PicAnimationDirection.Width && 0,
        height:
          this.blueSectionPic[index].animationDirection ===
            PicAnimationDirection.Height && 0,
        scrollTrigger: {
          trigger: pic,
          start: 'top 97%',
          end: 'top 95%',
          scrub: 1.5,
        },
      });
    });

    gsap.from('.blue-section-video', {
      width: 0,
      ease: 'expo.in',
      scrollTrigger: {
        trigger: '.blue-section-video',
        start: 'top 90%',
        end: 'top 90%',
        scrub: 2,
      },
    });
  }
}
