import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AddModal({show,handleClose,lwName,appointmentData, setAppointmentData }) {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [addName, setAddName]=useState("")
    const [addDay, setAddDay]=useState(new Date().toISOString().slice(0, 10))

    const handleSubmit=(e)=>{
      e.preventDefault()
      setAppointmentData([...appointmentData, {
        id:new Date().getTime(),
        client: addName,
        day: addDay,
        completed: false,
        lawyer: lwName
      }]
       )
      handleClose()
      // console.log("a");
    }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onSubmit={handleSubmit}
      >
         <Form>
        <Modal.Header closeButton>
          <Modal.Title>Reservation for lawyer {lwName} </Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
        
          {/* <Row className="mb-3"> */}
            <Form.Group as={Col} md="10" controlId="name">
              <Form.Label>Client name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter name"
                defaultValue=""
                onChange={(e)=>{setAddName(e.target.value)
                // console.log(addApp);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="date" className="mt-2 mb-2">
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="date"
                Value= {addDay}
                onChange={(e)=>{setAddDay(e.target.value)
                // console.log(addApp);
                  }}
                
              />
            
            </Form.Group>
          {/* </Row> */}
          <br />
          Please, ensure the accuracy of the information provided above!
        </Modal.Body>
        <Modal.Footer className="mt-1">
          <Button variant="success" 
          type="submit"
          // onClick={handleSubmit}
         
           >
            Save
           </Button>
          <Button variant="danger"
           onClick={handleClose} 
           className="">
            Close
          </Button>
        </Modal.Footer>
        </Form> 
      </Modal>
    </>
  );
}

export default AddModal;
