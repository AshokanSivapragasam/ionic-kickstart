import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Meeting } from './meeting';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const meetings: Meeting[] = [];
    for (let idx = 1; idx < 3; idx +=1) {
        meetings.push({
          id: idx,
          title: 'Daily standup call::' + idx,
          description: 'Design discussion on Modern Events. Index: ' + idx,
          startsAt: '12-' + idx + '-20' + idx + '12:34:56',
          endsAt: '12-' + idx + '-20' + idx + '12:34:56',
          durationInMinutes: 30,
          place: 'Block 56',
          remindBefore: 5,
          priority: 1
        });
    }

    return { meetings };
  }
}
