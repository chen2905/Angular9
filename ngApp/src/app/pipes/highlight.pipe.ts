import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private _sanitizer:DomSanitizer){

  }
  transform(value: string, highlightString:string): unknown {
    return this._sanitizer.bypassSecurityTrustHtml('<div style="background-color:gold">'+ highlightString+'</div>')
  }

}
