import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Map, NavigationControl, Marker } from 'maplibre-gl';
import { UsersService } from 'src/app/coreModule/service/users.service';
import { addlistinterface } from '../../interface/addlist';
import moment from 'moment';

@Component({
  selector: 'app-singlelisting',
  templateUrl: './singlelisting.component.html',
  styleUrls: ['./singlelisting.component.css']
})
export class SinglelistingComponent implements OnInit,OnDestroy{  
  list!: addlistinterface;



constructor(private route: ActivatedRoute,private service:UsersService){
  this.route.params.subscribe(params => {
    this.singlelist(params['id'])
  });
}

  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  ngOnInit(): void {
  }
  singlelist(id:string){
    this.service.singlelist(id).subscribe((list)=>{
      this.list=list
      this.initmap(this.list)
      console.log(list);   
    })
  }
    initmap(list:any){
      const initialState = { lng:list.longitude,lat: list.latitude, zoom: 14 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets/style.json?key=KPOlDn1YjHHmA6pUZnAQ`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
      
    });

    this.map.addControl(new NavigationControl({}));
   
      new Marker({color: "#FF0000"})
      .setLngLat([list.longitude,list.latitude])
      .addTo(this.map)
    }
  ngOnDestroy() {
    this.map?.remove();
  }

  getexpdate(date:string | null | undefined ): string {
    return moment(date).format('MMM DD YYYY');
  } 
}


