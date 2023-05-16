import {
  Directive,
  HostBinding,
  HostListener,
  Output,
  EventEmitter
} from "@angular/core";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


export interface FileHandle {
  file: File,
  url: SafeUrl
}

@Directive({
  selector: '[appDrag]'
})
export class DragDropDirective {

  @Output() files = new EventEmitter<FileHandle[]>();

  @HostBinding('style.background') private background = '#eee';

  constructor(private sanitizer: DomSanitizer) {}

  onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }

  onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';

    const files: FileHandle[] = [];
    const dataTransfer = evt.dataTransfer as DataTransfer;
    for (let i = 0; i < dataTransfer.files.length; i++) {
      const file = dataTransfer.files[i];
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      files.push({ file, url });
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }



}
