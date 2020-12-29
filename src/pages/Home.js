import React, {useState} from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import BodyRed from "../components/BodyRed";
import BodyWhite from "../components/BodyWhite";
import BodyGreen from "../components/BodyGreen";
import BodyWhite2 from "../components/BodyWhite2";
import Modal from 'react-modal';
import ModalWindow from "../containers/SignContainer";

export const Home = () => {
    const [isModal, setModal] = useState(false);
    const [purpose, setPurpose] = useState("/home");
    const handleClose = () => setModal(false);
    const handleShow = () => setModal(true);

    return (
        <div>
            <Header callModal={handleShow} choosePurpose={setPurpose}/>
            <BodyWhite callModal={handleShow} choosePurpose={setPurpose}/>
            <BodyGreen/>
            <BodyWhite2/>
            <BodyRed/>
            <Footer/>

            <Modal
                isOpen={isModal}
                ariaHideApp={false}
                className="modalWindow"
                overlayClassName="overlayWindow"
            >
                <ModalWindow closeModal={handleClose} purpose={purpose}/>
            </Modal>

        </div>
    )
}

export default Home;