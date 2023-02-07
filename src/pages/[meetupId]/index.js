import MeetupDetail from "components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/da/Frauenkirche_Munich_-_View_from_Peterskirche_Tower2.jpg"
      title="first meetup"
      address="some street"
      description="laalal"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Frauenkirche_Munich_-_View_from_Peterskirche_Tower2.jpg",
        id: "m1",
        title: "first meetup",
        address: "some street",
        description: "laalal",
      },
    },
  };
}

export default MeetupDetails;
