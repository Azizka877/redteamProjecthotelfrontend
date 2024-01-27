import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Entete.css';
import axios from 'axios';


function Entetet() {
  const [showModal, setShowModal] = useState(false);
   
  const [userData, setUserData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserData({ ...userData, profileImage: file });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', userData.name);
    formData.append('phoneNumber', userData.phoneNumber);
    formData.append('email', userData.email);
    formData.append('profileImage', userData.profileImage);

    try {
      await axios.post('https://redazizteamhotel1234.onrender.com/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  };

  // upload image
  // const [file, setFile] = useState();
  
  // const upload = ()=> {
  //   const formdata = new FormData();
  //   formdata.append('file', file);
  //   axios.post('http://localhost:3001/upload', formdata)
  //   .then(res=>{
  //      console.log(res.data);
  //   }).catch(err=>console.log(err));
  // }
  
  // const handleChange = (e)=> {
  //  console.log(e.target.files[0]);
  //   setFile(e.target.files[0]);
  // }
  // fin upload image
  
  
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handlerSubmit= () => {
    handleSubmit();
    handleToggleModal();
  }
  return (
    <>
      <div className='d-flex justify-content-between align-items-center w-100 pb-3'>
        <span className='ms-3'>Hotel</span>
        <div className=" border border-1 d-flex justify-content-center align-items-center me-4 px-3 rounded-3">
          <span className="bi bi-plus form-control-feedback fs-3" onClick={handleToggleModal}></span>
          <span>Ajouter une hotel</span>
        </div>
      </div>

      <Modal show={showModal} onHide={handleToggleModal}>
        <Modal.Header closeButton>
          <Modal.Title >
            <span><i className='bi bi-arrow-left'></i> CREER UN NOUVEAU MODEL </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {/* row1 */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="">Nom de l'hotel</label>
                <input type="text" placeholder='CAP Marriane' name='name' value={userData.name} onChange={handleInputChange} className='rounded-3 border-0 modal_input fw-bold' />
              </div>
              <div className="col-md-6 ">
                <label htmlFor="">Adresse</label>
                <input type="text" className='rounded-3 border-0 modal_input fw-bold'  placeholder='Les Iles du Saloum....' />
              </div>
            </div>
            {/* row 2 */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder='info@gmail.com' name='email' value={userData.email} onChange={handleInputChange} className='rounded-3 border-0 modal_input fw-bold' />
              </div>
              <div className="col-md-6">
                <label htmlFor="">Telephone</label>
                <input type="text" placeholder='+221567988444' name='phoneNumber' value={userData.phoneNumber} onChange={handleInputChange} className='rounded-3 border-0 modal_input fw-bold' />
              </div>
            </div>
            {/* row 3 */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="">Prix par nuit</label>
                <input type="text" placeholder='250.0000$' className='rounded-3 border-0 modal_input fw-bold' />
              </div>
              <div className="col-md-6 d-flex flex-column">
                <label htmlFor="">Devise</label>
                <select name="devise" id="devise"className='rounded-3 border-0  modal_input fw-bold' >
                  <option value="volvo">Xof</option>
                  <option value="saab">Euro</option>
                  <option value="mercedes">Dollars</option>
                  
                </select>
              </div>
            </div>
            {/* file input */}
            <div className="row">
              <div className="col-12 d-flex flex-column">
              <label htmlFor="">Ajouter une photo</label>
                <input type="file" onChange={handleImageChange} />
              </div>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlerSubmit}>
            Enregistrer
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Entetet;
