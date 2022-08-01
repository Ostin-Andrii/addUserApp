import Button from "./Button";
import Card from "./Card";
import { useState } from "react";

import styles from "./CreateUser.module.css";
import ErrorModal from "./ErrorModal";

const CreateUser = (props) => {

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
  
  const onCreateUser = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Wrong input",
        message: "Can't be empty",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Wrong age",
        message: "Age should be greater than zero",
      });
      return;
    }
    props.onChange(userName, userAge);
    setUserName("");
    setUserAge("");
  };



  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {
        error && (
          <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message} />
        )
      }
      <Card className={styles.input}>
        <form onSubmit={onCreateUser}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={userName}
            onChange={userNameHandler}
            type="text"
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            value={userAge}
            onChange={userAgeHandler}
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
