import React from 'react';
import {NavLink} from "react-router-dom";
import {FaPaw} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import {FiUpload} from "react-icons/fi";
import {pictures} from "../source/variables";
import Gallery from "./Gallery";

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
    }

    imgRemove = (index) => {
        const files =[...this.state.files];
        files.splice(index,1);
        this.setState({files});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-green my-3">
                        <span className='bold'> Your new post! </span>Simply text, add photos and publish.
                    </div>
                </div>
                <fieldset className='fieldset'>
                    <form>
                        <div className="row">
                            <div className="col-2 m-0 p-0 pr-1 right">
                                <label htmlFor="exampleFormControlSelect1" className='little'>Text:</label>
                                <br/>
                                <span className='text-green little'>up to 1500 char</span>
                            </div>
                            <div className="col-10 borderGreen">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows='16'
                                      placeholder={'brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. ' +
                                      'Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'}
                                      maxLength="150"/>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-2 m-0 p-0 pr-1 right">
                                <label htmlFor="exampleFormControlSelect1" className='little'>Photos:</label>
                                <br/>
                                <span className='text-green little'>up to 4 images</span>
                            </div>
                            <div className="col-4 p-0 borderGreen row m-0">
                                <Gallery files={this.state.files}/>
                            </div>
                            <div className="col-3 d-flex flex-column align-items-center">
                                <FiUpload size="30px" className='services'/>
                                <label htmlFor="exampleFormControlSelect1" className='little text-center my-2'>Drag and
                                    drop
                                    photos or</label>
                                <div
                                    className='nav-link btn btn-outline-light white-button-modal d-flex align-items-center justify-content-center'>Browse
                                    <div className="file-inputs2">
                                        <input type="file" className="file"
                                               onChange={event => {
                                                   console.log('ddddddddddd');
                                                   const file = event.target.files[0];
                                                   let files = this.state.files;
                                                   if (files.length <= 4) {
                                                       files.push(file);
                                                       this.setState({files});
                                                       console.log(this.state.files);
                                                   }
                                               }}
                                        /></div>
                                </div>
                            </div>
                            <div className="col-3 borderGreen">
                                <ul className="list-img">
                                    {!this.state.files.length == 0 ?
                                        this.state.files.map((item,index) =>
                                            (<li className='d-flex justify-content-between align-items-center'>
                                                {item.name} <FaTimes onClick={() => this.imgRemove(index)}/></li>)) : ''}
                                </ul>
                            </div>
                        </div>

                    </form>

                    <div className="row d-flex align-items-center">
                        <div className="col-1 text-green profilePhoto">
                            <img
                                src={this.props.accounting.avatar === '5555555.jpg' ? pictures.auto : this.props.accounting.avatar}
                                alt="avatar"
                                className="avatar"/>
                        </div>

                        <div className="col-5 small text-green bold d-flex align-items-center">
                            {this.props.accounting.name}
                        </div>
                        <div className="col-4 offset-2 my-3">
                            <NavLink to="/form"
                                     className='nav-link btn btn-outline-light button-addNew'>
                                <div><FaPaw size="18px" fixedWidth className="paw-modal"/>
                                    <span className="submit-modal">Publish</span></div>
                            </NavLink>
                        </div>
                    </div>

                </fieldset>
            </div>
        );
    }
};

export default Add;