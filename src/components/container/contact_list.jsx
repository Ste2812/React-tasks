import React from 'react';
import PropTypes from 'prop-types';
import ContactComponent from '../pure/contact';
import { Contact } from '../../models/contact.class';


const ContactListComponent = () => {

    const defaultContact = new Contact('Lorem', 'Ipsum', 'loremipsum@example.com', true)

    return (
        <div>
            <div>
                Contactos:
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
