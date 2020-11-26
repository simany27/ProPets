import React from 'react';

const Add = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-green">
                    <span className='bold'> Your new post! </span>Simply text, add photos and publish.
                </div>
            </div>
            <fieldset className='fieldset'>
                <form>
                    <div className="row">
                        <div className="col-2">
                            <label htmlFor="exampleFormControlSelect1" className='d-inline small'>Text:</label>
                            <br/>
                            <span className='text-green2 small'>up to 1500 char</span>
                        </div>
                        <div className="col-10">
                            <textarea className="form-control form" id="exampleFormControlTextarea1" rows='6'
                                      placeholder={'brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. ' +
                                      'Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'}
                                      maxLength="150"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label htmlFor="exampleFormControlSelect1" className='d-inline small'>Text:</label>
                            <br/>
                            <span className='text-green2 small'>up to 1500 char</span>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default Add;