import React from "react";
import { Form, Input, } from 'reactstrap';

export default function SearchForm({ placeholder, handleChange, handleSub }) {
 
  return (
    <section className="search-form">
     <Form onSubmit={handleSub} >
       <Input
       name="search"
       type="search"
       placeholder={placeholder}
       onChange={handleChange}
       />
     </Form>

    </section>
  );
}