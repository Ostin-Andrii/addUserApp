import Card from "./Card";
import styles from "./UserList.module.css"

const UserList = (props) => {


  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;