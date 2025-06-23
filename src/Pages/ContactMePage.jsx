import React, {useState} from 'react'
import ContactMe from '../Components/ContactMe'


export default function ContactMePage() {
    const [contactMe, setContactMe] = useState([
    { userName: 1, userEmail: '', userNumber: '' },
    { userName: 2, userEmail: '', userNumber: '' }]);

  return (
    <ContactMe contactMe={contactMe} setContactMe={setContactMe} />
  )
}
