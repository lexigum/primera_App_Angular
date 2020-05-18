import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-location',
  templateUrl: './info-location.component.html',
  styleUrls: ['./info-location.component.css']
})
export class InfoLocationComponent implements OnInit {

  @Input() url;
  location;
  constructor(private http: HttpClient, private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(
      loc => {
        this.location = loc;
      }
    );
  }

}
