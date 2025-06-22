import React from 'react'
import ContactMe from '../Components/ContactMe'


export default function ContactMePage() {
    const [ContactMe] = useState([
    { Name: 1, Email: '', PhoneNumber: '' },
    { Name: 2, Email: '', PhoneNumber: '' },
    { Name: 3, Email: '', PhoneNumber: '' }
  ]);
  return (
    <ContactMe >
  )
}
