import { VisitedPlace, NavItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Prakash Thapa',
  title: 'A creative hunter',
  logoText: 'Prakash blog',
  country: 'Nepal',
  zone: 'Lumbini',
  district: 'Nawalparasi',
  bio: 'A creative hunter exploring computer technology, PC gaming, programming languages, and traveling across Nepal.',
  hobbiesText: 'Sometime, i play PC games and engage with testing and implementing programming language for enjoyment, read article is the best part of me.',
  facebookUrl: 'https://facebook.com/tprakash45',
  profileBg: '/myphoto.jpg',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'home', href: '#profile' },
  { label: 'About', href: '#about' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Moments', href: '#visited' },
  { label: 'contact', href: '#contact' },
];

export const VISITED_PLACES: VisitedPlace[] = [
  {
    id: 'humla',
    title: 'Humla',
    originalSrc: 'https://i2.wp.com/phasenepal.org/wp-content/uploads/2014/04/HumlaDistrictSimikot.jpg?fit=760%2C427',
    fallbackSrc: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    description: 'Simikot, Humla District - Remote mountain valleys in Karnali Province.',
    region: 'Karnali, Nepal',
  },
  {
    id: 'jumla',
    title: 'Jumla',
    originalSrc: 'http://www.phalano.com/images/2007/10/jumla_22.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
    description: 'Historic high-altitude valley famous for Marsi rice and organic apples.',
    region: 'Karnali, Nepal',
  },
  {
    id: 'kaski',
    title: 'Kaski',
    originalSrc: 'http://www.davnepal.org/sites/default/files/styles/720x340-program/public/img/Hiletaxar.jpg?itok=xm0QvBup',
    fallbackSrc: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    description: 'Scenic district home to Pokhara, lakes, and breathtaking Annapurna views.',
    region: 'Gandaki, Nepal',
  },
  {
    id: 'manang',
    title: 'Manang',
    originalSrc: 'http://destinationmanang.org/wp-content/uploads/2015/06/ngawal.png',
    fallbackSrc: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=80',
    description: 'High Himalayan valley with ancient villages like Ngawal along the Annapurna circuit.',
    region: 'Gandaki, Nepal',
  },
  {
    id: 'mustang',
    title: 'Mustang',
    originalSrc: 'http://himalayanexpeditions.com/wp/wp-content/gallery/nepal-kingdom-of-mustang/dscn7766.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
    description: 'The ancient forbidden kingdom of Mustang with dramatic desert cliffs and stupas.',
    region: 'Gandaki, Nepal',
  },
  {
    id: 'mugu',
    title: 'Mugu',
    originalSrc: 'https://www.adb.org/sites/default/files/styles/content_media/public/content-media/6411-nepal-post-card-binita-3.jpg?itok=RMfrTrem0o',
    fallbackSrc: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=800&q=80',
    description: 'Mugu District, famous for Rara Lake - the largest lake in Nepal.',
    region: 'Karnali, Nepal',
  },
  {
    id: 'nepalgunge',
    title: 'Nepalgunge',
    originalSrc: 'https://farm4.staticflickr.com/3918/14494750946_9df2f15028_m.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant hub in western Nepal near the Indian border and Bardiya National Park.',
    region: 'Lumbini, Nepal',
  },
  {
    id: 'kalikot',
    title: 'Kalikot',
    originalSrc: 'http://2.bp.blogspot.com/-JX59y-dWrDY/UGhNTOqIl_I/AAAAAAAAAm8/ER6Zt0xZ9So/s1600/IMG_3311.JPG',
    fallbackSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    description: 'Rugged hills and deep river gorges in the Karnali region of Nepal.',
    region: 'Karnali, Nepal',
  },
];
