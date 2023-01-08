import {
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, OnDestroy
{
  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom = {} as RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Room About to Be Added',
      amenities: 'Air Conditioner, Free WiFi',
      price: 15000,
      photos: 'https://www.dearhotelmadrid.com/images/CARROUSEL_THEHOTEL_3.jpg',
      checkinTime: new Date('07-01-2023'),
      checkoutTime: new Date('08-01-2023'),
      rating: 1.5,
    };

    this.roomList = [...this.roomList, room];
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
