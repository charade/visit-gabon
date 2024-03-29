import { AfterViewInit, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';
import SplitType from 'split-type';
import { MediaBreakPointsObserver } from '../../utils/breakpoint-observer';
import { UserAgent } from '../../utils/user-agent';

@Component({
  selector: 'green-section',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './green-section.component.html',
  styleUrls: ['./green-section.component.scss'],
})
export class GreenSectionComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit
{
  UserAgent = UserAgent;

  readonly greenPics: {
    src: string;
    alt: string;
    animationDuration: string;
    story: string;
    scaleX?: number;
    priority?: boolean;
  }[] = [
    {
      src: '/assets/pics/g-section/nyonie.jpg',
      alt: 'parc nyonie',
      animationDuration: '17.5s',
      story:
        "La Nyonié Cotoye l'Atlantique. Aux environs on y voit des buffles, des éléphants, des potamochères et de nombreux oiseaux.",
    },
    {
      src: '/assets/pics/g-section/elephants.jpg',
      alt: 'éléphants',
      animationDuration: '8.8s',
      story:
        'Dernier grand sanctuaire des éléphants de forêt, plus petit que leurs cousins de la savane. Chez nous se trouve 60% de leur population.',
    },
    {
      src: '/assets/pics/g-section/parc-lope.jpg',
      alt: 'parc lopé',
      animationDuration: '7.9s',
      story:
        "Inscrit au Patrimoine mondial de l'UNESCO. Le parc de la lopé  est une combinaison de forêts, de savanes,  surlignées de cours d'eau,  et d'une richèsse biologique unique.",
    },
    {
      src: '/assets/pics/g-section/perroquets.jpg',
      alt: 'parc de loango',
      animationDuration: '14.5s',
      story:
        "Notre Perroquet Gris, est le plus loquace d'entre tous. Capable d'apprendre jusqu'à un millier de mots, son intelligence lui permet de les restituer dans le bon contexte.",
    },
    {
      src: '/assets/pics/g-section/monts-de-crystal.jpg',
      alt: 'parc minkébé',
      animationDuration: '13s',
      story:
        'Constitués de forêts pluviales, les Monts de cristal présentent une biodiversité exceptionnelle, avec des reliefs allant de 200 à plus de 900 mètres.',
    },
    {
      src: '/assets/pics/g-section/plateaux-bateke.jpg',
      alt: 'plateaux bateke',
      animationDuration: '10.5s',
      story:
        'Combinaison de savanes et de forêts, entrecoupées par plusieurs vallées de rivières bleu turquoise, les Plateaux Batéké constituent une mosaïque unique.',
      priority: true,
    },
  ];

  ngAfterViewInit(): void {
    this.#enteringGreenSectionFirstContent();
    this.#enteringGreenSectionSecondContent();
  }

  #enteringGreenSectionFirstContent(): void {
    gsap.from('.green-section-first-content-catch-phrase', {
      y: -80,
      opacity: 0,
      delay: 0.3,
      scrollTrigger: {
        trigger: '.green-section-first-content',
        start: 'top 43%',
        end: 'top 43%',
        scrub: 2,
      },
    });

    gsap.from('.green-section-first-content-species-description-content', {
      height: 0,
      stagger: 0.2,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.green-section-first-content',
        start: 'top 20%',
        end: 'top 20%',
        scrub: 2,
      },
    });

    gsap.from('.green-section-first-content-species-description-content > h3', {
      rotate: '-45deg',
      y: 25,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: '.green-section-first-content',
        start: 'top 20%',
        end: 'top 20%',
        scrub: 2,
      },
    });

    const splittedText = new SplitType(
      '.green-section-first-content-species-description-content'
    );

    gsap.from(splittedText.words, {
      height: 0,
      stagger: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: '.green-section-first-content',
        start: 'top -3%',
        end: 'top -5%',
        scrub: 2,
      },
    });
  }

  #enteringGreenSectionSecondContent(): void {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.green-section-second-content',
          start: 'top 60%',
          end: 'top 60%',
          scrub: 2,
        },
      })
      .from('.green-section-second-content-bg', {
        scale: 0.5,
      })
      .from('.green-section-second-content-explore-content', {
        y: 30,
        opacity: 0,
        ease: 'sine.in',
      });
  }
}
