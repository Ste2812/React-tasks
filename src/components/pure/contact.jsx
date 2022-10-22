import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre: {contact.firstname}
            </h2>
            <h3>
                Apellido: {contact.lastname}
            </h3>
            <h4>
                Email: {contact.email}
            </h4>
            <h5>
                Contacto: {contact.connected ? 'En linea':'No Disponible'}
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
