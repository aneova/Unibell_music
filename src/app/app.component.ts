import {Component, ElementRef, OnChanges, ViewChild} from '@angular/core';
import {Music} from "../inteface/musicInterface";
import {PeriodicElement} from "../inteface/periodic.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges{
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;
  ngOnChanges(changes:any) {
    if (changes['selectedTrack'] && this.selectedTrack) {
      this.playAudio();
    }
  }

  playAudio() {

  }
  displayedColumns: string[] = ['title', 'artist', 'id'];
  public musicArray: Music[] = [
    { id: 1, title: 'Trumpet Tune and Air', artist: '\'Purcell', album: 'Album 1', releaseYear: 1700, url:'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1685%20Purcell%20%2C%20Trumpet%20Tune%20and%20Air.mp3'},
    { id: 2, title: '1709 Bach Toccata in D minor', artist: 'J.S. Bach', album: 'Album 2', releaseYear: 1709,url:'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1709%20Bach%20%2C%20Toccata%20in%20D%20minor.mp3 ' },
    { id: 3, title: 'Vivaldi The four seasons. Spring', artist: 'Vivaldi', album: 'Album 3', releaseYear: 1723, url:'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1725%20Vivaldi%20%2C%20The%20Four%20Seasons%20-%20Spring.mp3' },
    // Add more music objects as needed
  ];
  selectedTrack: Music | null = null;
  title = 'untitled1';

  onRowClicked(row: Music): void {
    this.selectedTrack = row;
    const audioPlayer = this.audioPlayerRef?.nativeElement;
    audioPlayer.play();  // Автоматически начинаем воспроизведение
  }
}
