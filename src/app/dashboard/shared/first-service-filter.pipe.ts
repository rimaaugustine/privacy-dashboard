import {Pipe, PipeTransform} from '@angular/core';
import {Icons} from './Icons';

@Pipe({
  name: 'firstServiceFilter',
  pure: false
})
export class FirstServiceFilterPipe implements PipeTransform {
  transform(icons: any[], args: String): any {
    if (icons == null) {
      return null;
    }
    return icons
      ? icons.filter(icon => icon.title.toLowerCase().indexOf(args.toLowerCase()) !== -1)
      : icons;
  }
}
