import useAuthHook from "../Hooks/authHook";

const Default = () => {
  useAuthHook();
  return <div>...Loading</div>;
};

export default Default;
