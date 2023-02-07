import MeetupList from "./../../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Frauenkirche_Munich_-_View_from_Peterskirche_Tower2.jpg",
    address: "Some addres 5, 12345 Some CIty",
    description: "This is a meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Frauenkirche_Munich_-_View_from_Peterskirche_Tower2.jpg",
    address: "Some addres 55, 12345 2Some CIty",
    description: "This is a meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
