import tour1 from '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint reprehenderit eos nostrum laboriosam ullam molestiae fugiat porro? Voluptatum quasi expedita amet ea deserunt error modi incidunt obcaecati, corrupti tenetur.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, totam ipsam? Accusamus officia corporis praesentium!',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem placeat quia vitae eaque, sunt dolor consectetur magni nulla fugit.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'portugal',
    duration: 8,
    cost: 3222,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, amet repellendus consequuntur aspernatur placeat dicta, eius architecto commodi, voluptatum ex quo porro voluptates rerum similique.',
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium asperiores maxime totam minima quaerat omnis, quibusdam voluptatibus ratione pariatur quasi cumque.',
    location: 'USA',
    duration: 12,
    cost: 3200,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nobis odit pariatur et tempora fugiat iure repellendus voluptates autem provident?',
    location: 'poland',
    duration: 12,
    cost: 2234,
  },
];
