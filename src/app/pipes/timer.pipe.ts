import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(time: number): string {
    const seconds: any = time % 60;
    const minutes: any = Math.floor((time / 60) % 60);
    const hours: any = Math.floor(((time / 60) / 60) % 24);

    const timeItems = [hours, minutes, seconds].map(timeItem => {
      if (timeItem < 10) {
        return timeItem = '0' + timeItem;
      } else {
        return timeItem;
      }
    });

    return `${timeItems[0]}:${timeItems[1]}:${timeItems[2]}`;
  }

}
