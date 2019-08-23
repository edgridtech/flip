import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import  * as flipAactions from "../../store/actions/flips.actions";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    public store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe(data => {
      console.log(data)
    })

    // this.store.dispatch(new flipAactions.deleteFlip([
    //   {
    //     title: 'String',
    //     text: 'String',
    //     paid: false,
    //     banner: 'String',
    //     subject:'English',
    //     isBookmarked: false,
    //     description: ' Something simple',
    //     id: '123',
    //     longDesc: 'lorem',
    //     level: ''
    //   }
    // ]))
  }



}
