import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { Social } from '../../models/social.model';

@Component({
  selector: 'app-not-me',
  templateUrl: './not-me.component.html',
  styleUrl: './not-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotMeComponent {
  private readonly dataService = inject(DataService);
  readonly specs: Social[] = this.dataService.specs;
}
