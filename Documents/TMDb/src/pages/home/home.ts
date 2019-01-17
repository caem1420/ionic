import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiscoverPage } from '../discover/discover';
import { SearchPage } from '../search/search';
import { SeriesPage } from '../series/series';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabHome = DiscoverPage;
  tabSearch = SearchPage;
  tabtv = SeriesPage;
  tabsettings = SettingsPage;

  constructor(public navCtrl: NavController) {

  }

}
