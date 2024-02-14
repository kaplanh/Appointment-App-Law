import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Lawyers from "../components/Lawyers";
import { appointmentData } from "../helper/data";
import lawyersData from "../helper/data";
import { Container } from "react-bootstrap";


const Home = () => {
  const [app, setApp] = useState(appointmentData);

  return (
    <main className="text-center mt-2">
      <Container  className="header d-flex justify-content-between align-items-center mt-5">
        <img src="./img/s1.png" alt="" className="rounded-circle"/>
        <div>
        <h1 className="display-5 ">LAWYER & ATTORNEY</h1>
        <h5>We Fight For Your Right</h5>
        </div>
        <img src="./img/s1.png" alt="" className="rounded-circle"/>
        
      </Container>
      <Lawyers
        lawyersData={lawyersData}
        appointmentData={app}
        setAppointmentData={setApp}
      />
      <AppointmentList
        appointmentData={app}
        lawyersData={lawyersData}
        setAppointmentData={setApp}
      />
    </main>
  );
};

export default Home;
