import Container from "react-bootstrap/Container";
// import lawyersData from "../helper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddModal from "./Modal";
import { useState } from "react";

const Lawyers = ({lawyersData, appointmentData, setAppointmentData }) => {
      const [show, setShow] = useState(false);
      const[lwName,setLwName]=useState("")
    //  const { name, id, dep, img }=lawyersData

    const handleClose = () => setShow(false);
    // const handleClick = () => {
    //   setShow(true)
    //   setLwName(name)
      
    // };

  // const handleClick = () => {}
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" >
      Аttorneys
      </h3>
      <Row className="justify-content-center">
        {lawyersData.map(({ name, id, dep, img }) => (
          <Col key={id} xs={6} sm={4} md={3} className="justify-content-center">
            <img src={img} alt="" className="img-thumbnail lawer-img" onClick={ () => {
      setShow(true)
      setLwName(name)
      
    } }  />

            <h4>{name}</h4>
            <h6> {dep} </h6>
          </Col>
        ))}
      </Row>
      <AddModal 
       show={show} 
       handleClose={handleClose} 
     
       appointmentData={appointmentData} 
       setAppointmentData={setAppointmentData}
      //  handleClick={handleClick} 
       lwName={lwName}

      
       
       />
    </Container>
  );
};

export default Lawyers;
