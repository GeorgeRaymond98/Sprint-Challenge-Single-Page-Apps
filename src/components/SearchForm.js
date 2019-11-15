import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";

export default function SearchForm({ placeholder, handleSub, handleChange }) {

  return (
    <section className="search-form">
      <Form onSubmit={handleSub}>
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
