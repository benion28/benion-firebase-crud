import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {

    const initialState = {
        fullName: "",
        mobile: "",
        email: "",
        address: ""
    };

    const [ values, setValues ] = useState(initialState);

    useEffect(() => {
        if (props.currentId === "") {
            setValues({
                ...initialState
            });
        } else {
            setValues({
                ...props.contactObjects[props.currentId]
            });
        }
    }, [ props.currentId, props.contactObjects ]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [ name ]: value
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.addOrEdit(values);
    };

    return (
        <form autoComplete="off" onSubmit={ handleFormSubmit }>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName" value={ values.fullName } onChange={ handleInputChange } />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobie" name="mobile" value={ values.mobile } onChange={ handleInputChange } />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" name="email" value={ values.email } onChange={ handleInputChange } />
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Address" name="address" value={ values.address } onChange={ handleInputChange } />
            </div>
            <div className="form-group">
                <input className="btn btn-primary btn-block" type="submit" value={ props.currentId === "" ? "Save" : "Update" } />
            </div>
        </form>
    );
}
 
export default ContactForm;