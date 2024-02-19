import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEnum } from '../utils/icons-enum';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() set iconName(icon: IconEnum) {
    this.icon = IconEnum.value.get(icon);
  }
  icon: IconDefinition;
}
