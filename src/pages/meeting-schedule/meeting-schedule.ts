import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'meeting-schedule',
  templateUrl: 'meeting-schedule.html'
})
export class MeetingSchedulePage {
  meeting: {title: string, description: string, startsAt: string, endsAt: string, at: string, remindBefore: number, priority: number};
  teamMembers: Array<{name: string, gravatorUri: string, pickedIn: boolean}> = [];
  teamMember: {name: string, gravatorUri: string};

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.meeting = {
      title: '',
      description: '',
      startsAt: (new Date()).toISOString(),
      endsAt: '',
      at: '',
      remindBefore: 5,
      priority: 1
    };

    this.teamMembers = [{
        name: 'Ashokan Sivapragasam',
        gravatorUri: 'http://localhost/vault/images/thumbnails/144-2015-228x160.jpg',
        pickedIn: false
      }, {
        name: 'Vinoth Sivapragasam',
        gravatorUri: 'http://localhost/vault/images/thumbnails/Eetti-2015-228x160.jpg',
        pickedIn: false
      }, {
        name: 'Prasanna Sivapragasam',
        gravatorUri: 'http://localhost/vault/images/thumbnails/Baahubali-2015_228x160.jpg',
        pickedIn: false
      }, {
        name: 'Shweta Gupta',
        gravatorUri: 'http://localhost/vault/images/thumbnails/Bajirao-Mastani-2015-228x160.jpg',
        pickedIn: false
      }, {
        name: 'Ashish Singla',
        gravatorUri: 'http://localhost/vault/images/thumbnails/Jackie-Chan-Adventures-Season-1-13-Episodes_228x160.jpg',
        pickedIn: false
      }, {
        name: 'Khushboo',
        gravatorUri: 'http://localhost/vault/images/thumbnails/The-Martian-2015_228x160.jpg',
        pickedIn: false
      }, {
        name: 'Asha',
        gravatorUri: 'http://localhost/vault/images/thumbnails/Baahubali-2015_228x160.jpg',
        pickedIn: false
      }, {
        name: 'Kranthi',
        gravatorUri: 'http://localhost/vault/images/thumbnails/Bajirao-Mastani-2015-228x160.jpg',
        pickedIn: false
      }, {
        name: 'Jacob',
        gravatorUri: 'http://localhost/vault/images/thumbnails/Jackie-Chan-Adventures-Season-1-13-Episodes_228x160.jpg',
        pickedIn: false
      }, {
        name: 'Dapinder',
        gravatorUri: 'http://localhost/vault/images/thumbnails/The-Martian-2015_228x160.jpg',
        pickedIn: false
      }
    ];

  }
}
