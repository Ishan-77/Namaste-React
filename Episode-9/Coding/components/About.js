import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About </h1>
      <h2>React.js</h2>
      <UserClass
        name={"Ishan (class based component)"}
        location={"Ranchi (class)"}
      />
    </div>
  );
};

export default About;
