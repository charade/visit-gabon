import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmbientLight, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ThreeUtils } from 'src/app/utils/three';
@Component({
  selector: 'yellow-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yellow-section.component.html',
  styleUrls: ['./yellow-section.component.scss'],
})
export class YellowSectionComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @Input() animationTimeline: gsap.core.Timeline;

  #renderer: WebGLRenderer;
  #scene = new Scene();
  #camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );

  ngAfterViewInit(): void {
    this.#renderer = new WebGLRenderer({
      antialias: true,
      canvas: this.canvas.nativeElement,
    });

    console.log(this.#renderer);
    // this.#renderer.setClearColor('red');
    this.#mountLight();
    this.#mountCamera();
    this.#configRenderer();
    this.#loadModel();
    window.addEventListener('resize', () => this.#onResizeWindow());
  }

  #mountLight(): void {
    const ambientLight = new AmbientLight(0xffffff, 2);
    this.#scene.add(ambientLight);
  }

  #mountCamera(): void {
    // this.#camera.lookAt(-1, 0, 0);
  }

  #loadModel(): void {
    new GLTFLoader().load(ThreeUtils.Models.Sunset, ({ scene: _scene }) => {
      this.#scene.add(_scene);
      _scene.position.y = -0.3;
      _scene.position.z = 0.5;
      this.#renderer.setAnimationLoop(() =>
        this.#renderer.render(this.#scene, this.#camera)
      );
    });
  }

  #configRenderer(): void {
    this.#renderer.setSize(window.innerWidth, window.innerHeight);
    this.#renderer.setPixelRatio(devicePixelRatio);
    this.#renderer.render(this.#scene, this.#camera);
  }

  #onResizeWindow(): void {
    this.#camera.aspect = window.innerWidth / window.innerHeight;
    this.#camera.updateProjectionMatrix();
    this.#configRenderer();
  }
}
