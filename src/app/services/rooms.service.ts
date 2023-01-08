import { Injectable } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {}

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free WiFi',
      price: 500,
      photos: 'https://www.dearhotelmadrid.com/images/CARROUSEL_THEHOTEL_3.jpg',
      checkinTime: new Date('07-01-2023'),
      checkoutTime: new Date('08-01-2023'),
      rating: 4.58,
    },
    {
      roomNumber: 2,
      roomType: 'Greater Deluxe Room',
      amenities: 'Air Conditioner, Free WiFi',
      price: 1000,
      photos: 'https://www.dearhotelmadrid.com/images/CARROUSEL_THEHOTEL_3.jpg',
      checkinTime: new Date('07-01-2023'),
      checkoutTime: new Date('08-01-2023'),
      rating: 3.43,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free WiFi',
      price: 15000,
      photos: 'https://www.dearhotelmadrid.com/images/CARROUSEL_THEHOTEL_3.jpg',
      checkinTime: new Date('07-01-2023'),
      checkoutTime: new Date('08-01-2023'),
      rating: 2.65,
    },
  ];

  getRooms() {
    return this.roomList;
  }
}
