import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ElementoService } from 'src/app/services/elemento/elemento.service';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementDetailsComponent {
  constructor(readonly elementoService: ElementoService) {}
}
