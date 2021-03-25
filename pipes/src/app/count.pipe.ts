import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'count'})
export class CountVowel implements PipeTransform {
    transform(value: string): string {
       
    }
}