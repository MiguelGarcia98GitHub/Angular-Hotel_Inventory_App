import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  ngOnInit(): any {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free WiFi',
        price: 500,
        photos:
          'https://www.dearhotelmadrid.com/images/CARROUSEL_THEHOTEL_3.jpg',
        checkinTime: new Date('07-01-2023'),
        checkoutTime: new Date('08-01-2023'),
        rating: 4.58,
      },
      {
        roomNumber: 2,
        roomType: 'Greater Deluxe Room',
        amenities: 'Air Conditioner, Free WiFi',
        price: 1000,
        photos:
          'https://www.dearhotelmadrid.com/images/CARROUSEL_THEHOTEL_3.jpg',
        checkinTime: new Date('07-01-2023'),
        checkoutTime: new Date('08-01-2023'),
        rating: 3.43,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free WiFi',
        price: 15000,
        photos:
          'https://www.dearhotelmadrid.com/images/CARROUSEL_THEHOTEL_3.jpg',
        checkinTime: new Date('07-01-2023'),
        checkoutTime: new Date('08-01-2023'),
        rating: 2.65,
      },
    ];
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

  roomList: RoomList[] = [];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(receivedRoom: RoomList) {
    this.roomList = this.roomList.filter(
      (room) => room.price !== receivedRoom.price
    );
  }
}
