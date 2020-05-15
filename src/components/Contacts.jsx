import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDatabase from "../config/firebase";

const Contacts = () => {

    const [ contactObjects, setContactObjects ] = useState({});
    const [ currentId, setCurrentId ] = useState("");
    
    useEffect(() => {
        firebaseDatabase.child("crudContacts").on("value", snapshot => {
            if (snapshot.val() !== null) {
                setContactObjects({
                    ...snapshot.val()
                });
            } else {
                setContactObjects({});
            }
        });
    }, []); // Similar To componentDidMount()

    const addOrEdit = (object) => {
        if (currentId === "") {
            firebaseDatabase.child("crudContacts").push(object, error => {
                if (error) {
                    console.log(error);
                } else {
                    setCurrentId("");
                }
            });
        } else {
            firebaseDatabase.child(`crudContacts/${ currentId }`).set(object, error => {
                if (error) {
                    console.log(error);
                } else {
                    setCurrentId("");
                }
            });
        }
    };

    const handleEdit = (id) => {
        setCurrentId(id);
    };

    const handleDelete = (key) => {
        if (window.confirm("Are You Sure You Want to Remove This Record..?")) {
            firebaseDatabase.child(`crudContacts/${ key }`).remove(error => {
                if (error) {
                    console.log(error);
                } else {
                    setCurrentId("");
                }
            });
        }
    };

  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Benion Contact Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm { ...({ addOrEdit, currentId, contactObjects }) } />
        </div>
        <div className="col-md-7">
            <table className="table table-borderless table-stripped">
                <thead className="thead-light">
                    <tr>
                        <th>Full Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(contactObjects).map(id => {
                            return <tr key={ id }>
                                <td>{ contactObjects[id].fullName }</td>
                                <td>{ contactObjects[id].mobile }</td>
                                <td>{ contactObjects[id].email }</td>
                                <td>
                                    <a className="btn btn-primary" onClick={ () => { handleEdit(id) } }>
                                        <i className="fas fa-pencil-alt"></i>
                                    </a>
                                    <a className="btn btn-danger" onClick={ () => { handleDelete(id) } }>
                                        <i className="fas fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
