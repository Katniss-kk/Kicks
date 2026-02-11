import imgAvatar from '@assets/img/imgAvatar.jpg';

const ProfileConstants = {
  avatar: {
    defaultAvatar: imgAvatar,
    alt: 'Avatar',
  },
  firstName: 'First Name',
  lastName: 'Last Name',
  gender: {
    title: 'Gender',
    value: ['Female', 'Male'],
  },
  address: 'Delivery Address',
  email: 'Email',
  password: 'Password',
  phone: 'Phone Number',
  buttonSave: 'Save change',
  titles: ['Name', 'Contacts', 'Gender', 'Data'],
  validation: {
    email: 'Invalid field',
    firstName: 'The name must be more than 2 letters',
    lastName: 'The name must be more than 2 letters',
    address: 'The address must be more than 5 letters',
    phone: 'The number must be 10 digits',
    pass: 'The password must be more than 8 characters long.',
    gender: 'Select gender',
  },
};

export default ProfileConstants;
