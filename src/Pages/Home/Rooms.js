import React from 'react';
import singleBed from '../../Images/Rooms/single-bed.png';
import doubleBed from '../../Images/Rooms/double-bed.png';
import doubleBed1 from '../../Images/Rooms/double-bed1.png';
import Room from './Room';

const Rooms = () => {
    const rooms = [
        {
            id: 1, 
            roomTitle: 'SINGLE BED', 
            description: "Our single bed room is designed with solo travelers in mind. This cozy and well-appointed room offers a comfortable single bed and all the essential amenities for a comfortable stay. Relax and unwind in this intimate space after a busy day of exploring the city or attending meetings. It's the perfect choice for the solo traveler seeking comfort and convenience.",
            img: singleBed
        },
        {
            id: 2, 
            roomTitle: 'DOUBLE BED', 
            description: "Our spacious double bed room is designed for comfort and relaxation. It features a luxurious queen-size bed, perfect for couples or solo travelers looking for extra space. The room is elegantly decorated with modern furnishings, and large windows provide plenty of natural light. Enjoy a restful night's sleep and make yourself at home in this inviting retreat.",
            img: doubleBed
        },
        {
            id: 3, 
            roomTitle: 'SINGLE BED', 
            description: "Indulge in comfort with our double bed room, featuring two cozy twin beds ideal for friends or family traveling together. The room is tastefully decorated with warm tones and offers all the amenities you need for a pleasant stay. Whether you're here for business or leisure, you'll find this room to be a comfortable and inviting haven.",
            img: doubleBed1
        },
    ]

    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Services</h1>
            <div className='row'>
                {
                    rooms.map(room => <Room
                    key={room.id}
                    room={room}
                    ></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;