import React,{useId} from "react";

const EmailForm = () => {

    const id = useId()
    const id2 = useId()

    return (
        <>
            <label htmlFor={`${id}-label`}>Email</label>
            <input type = "email" id ={`${id}-email`}  />
            <label htmlFor={`${id2}-label`}>Name</label>
            <input type = "email" id ={`${id2}-name`}  />
        </>
    )
}

const UseId = () => {
  return (
    <>
      <div>
        <strong>UseId</strong>
      </div>
      <EmailForm />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam
        aperiam, quaerat voluptatum sapiente labore veritatis optio provident
        laboriosam ullam, at sit nam repellat delectus, magnam nostrum corrupti
        adipisci? Veritatis?
      </div>
      <EmailForm />
    </>
  );
};

export default UseId;
