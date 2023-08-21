// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/operations";


// import css from './Contact.module.css';


// export const Contact = ({contacts}) => {
//     const dispatch = useDispatch();

//     const handleDelete = () => dispatch(deleteContact(contacts.id));

//     return (
//         <>
//           {contacts.map(({id, name, phone}) => {
//                 return (
//                     <>
//                         <p>{name}: {phone}</p>
//                         <button type="button"  className={css.deleteBtn} onClick={handleDelete}>Delete</button>
//                     </>
//                 )
//             })}
//         </>
//     );
// };