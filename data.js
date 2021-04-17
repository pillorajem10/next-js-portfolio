import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import InfoIcon from '@material-ui/icons/Info';

export const data = {
  skills:[
    {
      name:'React',
      images:'/images/react.png',
      href: 'https://reactjs.org/'
    },
    {
      name:'MongoDB',
      images:'/images/mongo.png',
      href: 'https://www.mongodb.com/'
    },
    {
      name:'GIT',
      images:'/images/git.png',
      href: 'https://git-scm.com/'
    },
    {
      key1: '4',
      key2: '4img',
      name:'NodeJS',
      images:'/images/node.png',
      href: 'https://nodejs.org/en/'
    },
    {
      name:"Redux",
      images:"/images/redux.png",
      href: 'https://redux.js.org/'
    },
    {
      name:"Ubuntu",
      images:"/images/ubuntu1.png",
      href: 'https://ubuntu.com/'
    },
    {
      name:"NextJS",
      images:"/images/next.png",
      href: 'https://nextjs.org/'
    }
  ],

  services:[
    {
      name:'E-commerce',
      icon: <AddShoppingCartIcon fontSize="large"/>,
      description:'I Will help your business to sell your products online with attractive UI design and solid UX provided with payment integration and secured data of the business, customers'
    },
    {
      name:'Bookings/Reservation',
      icon: <RestaurantIcon fontSize="large"/>,
      description:'Hotel, Restaurant, Car, etc. Bookings/Reservation website will help your business to reserve or book into your facility in easy way provided with payment integration and services of your business'
    },
    {
      name:'Service web page',
      icon: <InfoIcon fontSize="large"/>,
      description:'I Will help your business to create a static website with high quality and attractive UI to show the web the services and information of your business to inform customers'
    },
  ],
}
