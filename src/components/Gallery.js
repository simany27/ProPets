import React, {Fragment} from 'react';
import {FaPlus} from "react-icons/fa";

const Gallery = (props) => {

    function SwitchCase(props) {
        switch (props.value) {
            case 0:
                return (<div className="col-12 p-0">0</div>);
            case 1:
                return (
                    <Fragment>
                    <div className="col-9 p-0">
                        <img src={URL.createObjectURL(props.files[0])} className='photo-review h-100'/>
                    </div>
                   <div className="col-3 p-0">
                       <FaPlus className="photo-add h-100"/>
                   </div>
                    </Fragment>);
            case 2:
                return (<Fragment>
                    <div className="col-9 p-0">
                        <img src={URL.createObjectURL(props.files[1])} className='photo-review h-100'/>
                    </div>
                    <div className="col-3 p-0">
                        <img src={URL.createObjectURL(props.files[0])} className='photo-review h-50'/>
                        <FaPlus className="photo-add h-50"/>
                    </div>
                </Fragment>);
            case 3:
                return (<Fragment>
                    <div className="col-9 p-0">
                        <img src={URL.createObjectURL(props.files[2])} className='photo-review h-100'/>
                    </div>
                    <div className="col-3 p-0">
                        <img src={URL.createObjectURL(props.files[1])} className='img-small'/>
                        <img src={URL.createObjectURL(props.files[0])} className='img-small'/>
                        <FaPlus className="photo-add img-small"/>
                    </div>
                </Fragment>);
            default://case 4
                return (<Fragment>
                    <div className="col-9 p-0">
                        <img src={URL.createObjectURL(props.files[3])} className='photo-review h-100'/>
                    </div>
                    <div className="col-3 p-0">
                        <img src={URL.createObjectURL(props.files[2])} className='img-small'/>
                        <img src={URL.createObjectURL(props.files[1])} className='img-small'/>
                        <img src={URL.createObjectURL(props.files[0])} className='img-small'/>
                    </div>
                </Fragment>);
        }
    }

    return (
        <SwitchCase value={props.files.length} files={props.files}/>
    )


    // <Fragment>
    //     <div className="col-9 p-0">
    //         {props.files && props.files.map((item) => (
    //             <img src={URL.createObjectURL(item)}
    //                  className={props.files.length === 1 ? 'photo-review' : ''}/>
    //         ))}
    //         <FaPlus size="18px" className="photo-add"/>
    //     </div>
    //     <div className="col-3 p-0">
    //     </div>
    // </Fragment>
    // );
};

export default Gallery;