import Container from "react-bootstrap/Container";
import { AiTwotoneDelete,AiOutlineClose } from "react-icons/ai";
import { FaCheck} from "react-icons/fa";
import { IoClose} from "react-icons/io";
import { GiCancel} from "react-icons/gi";

const AppointmentList = ({ appointmentData, lawyersData,setAppointmentData }) => {


  const handleDelete=(id) => {  setAppointmentData(appointmentData.filter((item) => item.id !== id))}
  console.log(appointmentData);

  const handleCheck=(id)=>{setAppointmentData(appointmentData.map((item) => item.id === id?{...item, completed:true}:item))}
  const handleClose=(id)=>{setAppointmentData(appointmentData.map((item) => item.id === id?{...item, completed:false}:item))}
 

  return (
    <Container className="p-2 ">
      <h3 className="display-6 mb-2" >
        Appointment List
      </h3>
      {appointmentData.length <1 &&  <img src="./img/appointment.jpg" alt="" width="90%"  />  }

      {appointmentData.map(({ id, client, completed, lawyer, day }) => (
        <div className= {completed ? "appointments consulted d-flex justify-content-between" : "appointments d-flex justify-content-between"}>
          <div>
            <h3>
              {" "}
              <span className="text-danger"> Client:</span>
                {client}              
            </h3>
            <div clasName="app-law">
                {/* <img src=""></img> */}
                
                <h4>{lawyer}</h4>
                
              </div>
           
          </div>
          <div>
            {" "}
            <h5>{day}</h5>
          </div>
          <div className="d-flex flex-column gap-4" >
            {" "}
            <AiTwotoneDelete type="button" className="text-danger fs-3 icon" onClick={()=>handleDelete(id)} />
            <FaCheck type="button" className="text-success fs-3 icon" onClick={()=>handleCheck(id)} />
            <GiCancel type="button" className=" fs-3  icon" onClick={()=>handleClose(id)}/>
           
          </div>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
