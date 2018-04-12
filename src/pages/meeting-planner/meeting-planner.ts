import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MeetingDetailsPage } from '../meeting-details/meeting-details';
import { MeetingSchedulePage } from '../meeting-schedule/meeting-schedule';
import { MeetingPlannerProvider } from '../../providers/meeting-planner/meeting-planner';
import { Meeting } from '../../common/meeting';

@Component({
  selector: 'meeting-planner',
  templateUrl: 'meeting-planner.html'
})
export class MeetingPlannerPage {
  meetings: Array<Meeting> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public meetingPlannerProvider: MeetingPlannerProvider) {
    this.getMeetings();
  }

  getMeetings(): void {
    this.meetingPlannerProvider.getMeetings()
    .subscribe(meetings => this.meetings = meetings);
  }

  meetingTapped(event, meeting) {
    this.navCtrl.push(MeetingDetailsPage, {
      meetingId: meeting.id
    });
  }

  addNewMeeting(event) {
    this.navCtrl.push(MeetingSchedulePage, {});
  }
}
