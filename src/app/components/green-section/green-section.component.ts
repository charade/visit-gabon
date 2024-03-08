import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import SplitType from 'split-type';
import { MediaBreakPointsObserver } from '../../utils/breakpoint-observer';
import { UserAgent } from '../../utils/user-agent';

@Component({
  selector: 'green-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './green-section.component.html',
  styleUrls: ['./green-section.component.scss'],
})
export class GreenSectionComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit
{
  @Input() animationTimeline: gsap.core.Timeline;
  UserAgent = UserAgent;

  readonly greenPics = [
    {
      src: '/assets/pics/g-section/nyonie.jpg',
      alt: 'parc nyonie',
      animationDuration: '17.5s',
    },
    {
      src: '/assets/pics/g-section/elephants.jpg',
      alt: 'chutes de kongou',
      animationDuration: '8.8s',
    },
    {
      src: '/assets/pics/g-section/parc-lope.jpg',
      alt: 'parc lopé',
      animationDuration: '7.9s',
    },
    {
      src: '/assets/pics/g-section/perroquets.jpg',
      alt: 'parc de loango',
      animationDuration: '14.5s',
    },
    {
      src: '/assets/pics/g-section/parc-des-plateaux-bateke.jpg',
      alt: 'plateaux bateke',
      animationDuration: '18.1s',
    },
    {
      src: '/assets/pics/g-section/parc-mayumba.jpg',
      alt: 'parc mayumba',
      animationDuration: '16.7s',
    },
    {
      src: '/assets/pics/g-section/monts-de-crystal.jpg',
      alt: 'parc minkébé',
      animationDuration: '13s',
    },
    {
      src: '/assets/pics/g-section/parc-pongara.jpg',
      alt: 'parc pongara',
      animationDuration: '19.5s',
    },
    {
      src: '/assets/pics/g-section/plateaux-bateke.jpg',
      alt: 'plateaux bateke',
      animationDuration: '10.5s',
    },
  ];

  ngAfterViewInit(): void {
    this.animationTimeline.add(this.#enteringGreenSectionFirstContent());
    this.animationTimeline.add(this.#enteringGreenSectionSecondContent());
  }

  #enteringGreenSectionFirstContent(): gsap.core.Timeline {
    const tl = gsap
      .timeline()
      .from('.green-section-first-content-catch-phrase', {
        y: -80,
        opacity: 0,
        delay: 0.3,
        scrollTrigger: {
          trigger: '.green-section-first-content',
          start: 'top 43%',
          end: 'top 43%',
          scrub: 3,
        },
      })
      .from('.green-section-first-content-species-description-content', {
        height: 0,
        stagger: 0.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.green-section-first-content',
          start: 'top 20%',
          end: 'top 20%',
          scrub: 3,
        },
      })
      .from('.green-section-first-content-species-description-content > h3', {
        rotate: '-45deg',
        y: 25,
        ease: 'expo.inOut',
        scrollTrigger: {
          trigger: '.green-section-first-content',
          start: 'top 20%',
          end: 'top 20%',
          scrub: 3,
        },
      });

    const splittedText = new SplitType(
      '.green-section-first-content-species-description-content'
    );

    tl.from(splittedText.words, {
      height: 0,
      stagger: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: '.green-section-first-content',
        start: 'top -3%',
        end: 'top -5%',
        scrub: 3,
      },
    });

    return tl;
  }

  #enteringGreenSectionSecondContent(): gsap.core.Timeline {
    return gsap
      .timeline({
        scrollTrigger: {
          trigger: '.green-section-second-content',
          start: 'top 60%',
          end: 'top 60%',
          scrub: 3,
        },
      })
      .from('.green-section-second-content-bg', {
        scale: 0.5,
      })
      .from('.green-section-second-content-explore', {
        y: 30,
        ease: 'sine.in',
        opacity: 0,
      });
  }

  onSelectGreenSectionSecondContentBg(
    img: HTMLImageElement,
    newSrc: string
  ): void {
    gsap
      .timeline()
      .fromTo(
        img,
        { scaleX: 3, ease: 'expo.out', opacity: 0.7 },
        { opacity: 1, scale: 1, attr: { src: `${newSrc}` }, ease: 'expo.out' }
      );
  }
}
