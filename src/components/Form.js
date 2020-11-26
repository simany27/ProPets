import React from 'react';
import {pictures} from "../source/variables";
import {NavLink} from "react-router-dom";

const Form = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-green">
                    <span className='bold'> Lost your buddy? </span>Keep calm and complete the form.
                </div>
            </div>
            <fieldset className='fieldset'>
                <form>
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2">
                                    <label htmlFor="exampleFormControlSelect1" className='d-inline small'>Type</label>
                                </div>
                                <div className="col-4 offset-1">
                                    <select className="form-control d-inline form" id="exampleFormControlSelect1">
                                        <option>Dog</option>
                                        <option>Cat</option>
                                        <option>Animal3</option>
                                        <option>Animal4</option>
                                        <option>Animal5</option>
                                    </select>
                                </div>
                            </div>
                            {/*</div>*/}
                            <div className="row">
                                {/*<div className="form-group">*/}
                                <div className="col-2">
                                    <label htmlFor="exampleFormControlSelect1" className='d-inline small'>Sex</label>
                                </div>
                                <div className="col-4 offset-1">
                                    <select className="form-control d-inline form" id="exampleFormControlSelect1">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            {/*<div className="form-group">*/}
                            <div className="row">
                                <div className="col-2">
                                    <label htmlFor="exampleFormControlTextarea1"
                                           className='d-inline small'>Breed</label>
                                </div>
                                <div className="col-8 offset-1">
                                    <input className="form-control formInput d-inline" id="exampleFormControlTextarea1"
                                           placeholder={'Golden Retriever'}/>
                                </div>
                            </div>
                            {/*<div className="form-group">*/}
                            <div className="row">
                                <div className="col-2">
                                    <label htmlFor="exampleFormControlTextarea1" className='small'>Color</label>
                                </div>
                                <div className="col-8 offset-1">
                                    <input className="form-control formInput" id="exampleFormControlTextarea1"
                                           placeholder={'Beige'}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <label htmlFor="exampleFormControlSelect1" className='small'>Height</label>
                                </div>
                                <div className="col-4 offset-1">
                                    <select className="form-control form" id="exampleFormControlSelect1">
                                        <option>45-70</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="exampleFormControlTextarea1" className='small'>Distinktive
                                        features: <br/>
                                        <span className='text-green2'>up to 60 char</span></label>
                                </div>
                                <div className="col-8">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows='2'
                                      placeholder={'blue collar with stars, no left ear, damaged tail.'}
                                      maxLength="60"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="exampleFormControlTextarea1" className='small'>Description:<br/>
                                        <span className='text-green2'>up to 150 char</span></label>
                                </div>
                                <div className="col-8">
                            <textarea className="form-control form" id="exampleFormControlTextarea1" rows='6'
                                      placeholder={'brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. ' +
                                      'Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'}
                                      maxLength="150"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <label htmlFor="exampleFormControlTextarea1" className='small'>Location:</label>
                                </div>
                                <div className="col-8 offset-1">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows='3'
                                      placeholder={'Florentin Street, Tel Aviv'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col offset-2">
                                    <img src={pictures.form} alt=""/>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-4 offset-1">
                                    <div className="row">
                                        <div className="col-3 offset-2">
                                            <img src={pictures.download} alt='download'/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <span className='small text-center'>Drag and drop <br/>photos or</span>
                                    </div>
                                    <div className="row">
                                        <div className="col-2">
                                            <NavLink to='/signin'
                                                     className='nav-link btn btn-outline-light white-button-modal d-flex align-items-center justify-content-center'>Browse</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <select className='select-form col-12' name="day" multiple>
                                        <option value='picture'>файл1</option>
                                        <option value='Saturday'>файл2</option>
                                        <option value='Sunday'>файл3</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-1">
                            <div className='small'>Contacts:</div>
                        </div>
                        <div className="col-3 offset-1">
                            <input className="form-control formInput" id="exampleFormControlTextarea1"
                                   placeholder={'Phone*'} required/>
                        </div>
                        <div className="col-3">
                            <input className="form-control formInput" id="exampleFormControlTextarea1"
                                   placeholder={'Email'}/>
                        </div>
                        <div className="col-3">
                            <input className="form-control formInput" id="exampleFormControlTextarea1"
                                   placeholder='Facebook profile'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <img src={pictures.auto} alt=""/>
                        </div>
                        <div className="col-2 small text-green bold">
                            John Goodboi
                        </div>
                        <div className="col-2 offset-6">
                            <NavLink to='/Submit'
                                     className='nav-link btn btn-outline-light green-button-modal d-flex align-items-center justify-content-center'><img
                                src={pictures.found} className='img-button' alt="paw"/>Publish</NavLink>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default Form;