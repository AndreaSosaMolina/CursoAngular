import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'vuelaPipe'
})

export class VuelaPipe implements PipeTransform {

    transform(value: boolean): string {
        return (value) ? 'si vuela' : 'no vuela'
    }

}