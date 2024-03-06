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
      src: '/assets/pics/green-section/nyonie.jpg',
      alt: 'parc nyonie',
      animationDuration: '17.5s',
    },
    {
      src: '/assets/pics/green-section/chutes-de-kongou.jpg',
      alt: 'chutes de kongou',
      animationDuration: '8.8s',
    },
    {
      src: '/assets/pics/green-section/parc-de-loango.jpg',
      alt: 'parc de loango',
      animationDuration: '14.5s',
    },
    {
      src: '/assets/pics/green-section/parc-des-plateaux-bateke.jpg',
      alt: 'plateaux bateke',
      animationDuration: '18.1s',
    },
    {
      src: '/assets/pics/green-section/parc-lope.jpg',
      alt: 'parc lopé',
      animationDuration: '7.9s',
    },
    {
      src: '/assets/pics/green-section/parc-mayumba.jpg',
      alt: 'parc mayumba',
      animationDuration: '16.7s',
    },
    {
      src: '/assets/pics/green-section/parc-minkebe.jpg',
      alt: 'parc minkébé',
      animationDuration: '13s',
    },
    {
      src: '/assets/pics/green-section/parc-pongara.jpg',
      alt: 'parc pongara',
      animationDuration: '19.5s',
    },
  ];

  ngAfterViewInit(): void {
    this.animationTimeline.add(this.#enteringGreenSectionFirstContent());
    this.animationTimeline.add(this.#exitGreenSectionFirstContent());
    this.animationTimeline.add(this.#enteringGreenSectionSecondContent());
  }

  #enteringGreenSectionFirstContent(): gsap.core.Timeline {
    const tl = gsap
      .timeline()
      .from('.green-section-first-content-catch-phrase', {
        y: -80,
        opacity: 0,
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

  #exitGreenSectionFirstContent(): gsap.core.Tween {
    return gsap.to('.green-section-first-content', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.green-section-first-content',
        start: 'bottom 10%',
        end: 'bottom 10%',
        scrub: 3,
      },
    });
  }

  #enteringGreenSectionSecondContent(): gsap.core.Timeline {
    return gsap
      .timeline()
      .from('.green-section-second-content-bg', {
        scale: 0.5,
        scrollTrigger: {
          trigger: '.green-section-second-content',
          start: 'top 60%',
          end: 'top 60%',
          scrub: 3,
        },
      })
      .from('.green-section-second-content-bg', {
        scale: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: '.green-section-second-content',
          start: 'bottom 45%',
          end: 'bottom 45%',
          toggleActions: 'play reverse none reverse',
          scrub: 3,
        },
      });
  }
}
