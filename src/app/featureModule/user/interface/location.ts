export interface locationinterface {
    _id: string;
    userId: UserId;
    title: string;
    details: string;
    category: string;
    tag?: (string)[] | null;
    expdate: string;
    location: string;
    date: string;
    longitude: number;
    latitude: number;
    __v: number;
  }
  export interface UserId {
    _id: string;
    userName: string;
    email: string;
    password: string;
    image: string;
    phone: number;
    status: boolean;
    location: string;
    verifyemail: boolean;
    joinedDate: string;
    __v: number;
    work: string;
    address: string;
    birthday: string;
    gender: string;
    googleimage?: null;
  }
  