import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
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

  #greenSectionSecondContentBgCinematic = 'cinematic';

  ngAfterViewInit(): void {
    this.animationTimeline.add(
      this.#enteringGreenSectionIntroContentAnimation()
    );

    this.animationTimeline.add(this.#exitGreenSectionIntroContentAnimation());
    this.animationTimeline.add(this.#enteringGreenSectionSecondContent());
  }

  readonly greenPics = [
    {
      src: '/assets/pics/green-section/nyonie.jpg',
      alt: 'parc nyonie',
      animationDuration: '5.5s',
    },
    {
      src: '/assets/pics/green-section/chutes-de-kongou.jpg',
      alt: 'chutes de kongou',
      animationDuration: '4.8s',
    },
    {
      src: '/assets/pics/green-section/parc-de-loango.jpg',
      alt: 'parc de loango',
      animationDuration: '4.5s',
    },
    {
      src: '/assets/pics/green-section/parc-des-plateaux-bateke.jpg',
      alt: 'plateaux bateke',
      animationDuration: '4.1s',
    },
    {
      src: '/assets/pics/green-section/parc-lope.jpg',
      alt: 'parc lopé',
      animationDuration: '4.9s',
    },
    {
      src: '/assets/pics/green-section/parc-mayumba.jpg',
      alt: 'parc mayumba',
      animationDuration: '4.7s',
    },
    {
      src: '/assets/pics/green-section/parc-minkebe.jpg',
      alt: 'parc minkébé',
      animationDuration: '5s',
    },
    {
      src: '/assets/pics/green-section/parc-pongara.jpg',
      alt: 'parc pongara',
      animationDuration: '4.5s',
    },
  ];
  #enteringGreenSectionIntroContentAnimation(): gsap.core.Timeline {
    return gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: 'section.green-section-intro',
          start: 'top 99%',
          end: 'top 98%',
          scrub: 3,
        },
      })
      .from('.green-section-contents-container', {
        opacity: 0,
        xPercent: -150,
        duration: 4,
      })
      .to('.low-video-container', {
        // reset the hublot video on returning to intro content
        scale: 1,
        opacity: 1,
      })
      .from('.green-species-description-content', {
        opacity: 0,
        height: 0,
        stagger: 1,
      })
      .from('.green-species-description-content > h3', {
        transformOrigin: 'top right',
        rotateZ: '-30deg',
        y: 20,
        opacity: 0,
        stagger: 0.3,
      });
  }

  #exitGreenSectionIntroContentAnimation(): gsap.core.Timeline {
    return gsap
      .timeline({
        scrollTrigger: {
          trigger: 'section.green-section-intro',
          start: 'top center',
          end: 'top 45%',
          scrub: 4,
        },
      })
      .to('.low-video-container', {
        scale: 0.3,
        opacity: 0,
        duration: 2,
      })
      .to('.green-section-intro-content > *', {
        x: 100,
        opacity: 0,
        stagger: 0.3,
      })
      .from('.green-section-second-content', {
        opacity: 0,
      })

      .from(
        '.green-section-second-content-bg',
        {
          xPercent: -30,
          opacity: 0,
          filter: 'grayscale(0)',
          ease: 'expo.out',
          duration: 3,
        },
        this.#greenSectionSecondContentBgCinematic
      );
  }

  #enteringGreenSectionSecondContent(): gsap.core.Timeline {
    return gsap
      .timeline({
        scrollTrigger: {
          trigger: 'section.green-section-intro',
          start: 'top 45%',
          end: 'top 40%',
          scrub: 3,
        },
      })

      .from(
        '.separator.first',
        { width: 0 },
        this.#greenSectionSecondContentBgCinematic + '+=52'
      )
      .from(
        '.green-section-second-content-catch-phrase',
        {
          y: 20,
          opacity: 0,
        },
        this.#greenSectionSecondContentBgCinematic + '+=58'
      )
      .from(
        '.green-section-second-content-description > p',
        {
          y: -40,
          opacity: 0,
        },
        this.#greenSectionSecondContentBgCinematic + '+=58'
      )
      .fromTo(
        '.green-section-second-content-explore',
        {
          opacity: 0,
          clipPath: 'polygon(0% 0%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          opacity: 1,
          height: '30rem',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }
      )
      .from('.green-section-second-content-explore-content', {
        opacity: 0,
        xPercent: -100,
        ease: 'sine.out',
      });
  }
}
