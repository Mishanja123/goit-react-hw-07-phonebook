import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";


import { Filter } from "../Filter/Filter";
// import { Contact } from "../Contact/Contact";

import css  from "./ContactList.module.css";


// тут робл. метод гет с бекєнда

export const ContactList = () => {

  const contacts = useSelector(getContacts)
  const dispatch = useDispatch();



  return (
    <>
      <Filter
      />
      <ul className= {css.contactList}>
        {contacts.map(({id, name, phone}) => {
            const handleDelete = () => dispatch(deleteContact(id));

          return (
            <li key={id}>
              <p>{name}: {phone}</p>
              <button type="button"  className={css.deleteBtn} onClick={handleDelete}>Delete</button>
            </li>
                )
        })}
      </ul>
    </>
  );
};