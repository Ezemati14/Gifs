import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = "";

  public hasLoader: boolean = false;

  ngOnInit(): void {
    if( !this.url ) throw new Error('Url propoerty is required');
  }

  onLoad() {
    console.log('carga imagen')
    this.hasLoader = true;
  }

}
