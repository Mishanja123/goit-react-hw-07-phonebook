import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";


import { Section } from './Section/Section';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactList/ContactList';



export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  useEffect = (() => {
    dispatch(fetchContacts())
  },[dispatch]) 

    return (
      <>
        <Section title="Phonebook">
          <ContactsForm/>
        </Section>
        
        <Section title="Contacts"> 
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList/>
        </Section>
      </>
    );
};