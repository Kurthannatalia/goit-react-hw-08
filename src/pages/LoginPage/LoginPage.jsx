import DocumentTitle from "../../components/common/DocumentTitle/DocumentTitle";
import LoginForm from "../../components/WrapperLoginAndRegisterPages/LoginForm/LoginForm";
import WrapperLoginAndRegisterPages from "../../components/WrapperLoginAndRegisterPages/WrapperLoginAndRegisterPages";
const LoginPage = () => {
  return (
    <WrapperLoginAndRegisterPages>
      <DocumentTitle>Log In</DocumentTitle>
      <LoginForm />
    </WrapperLoginAndRegisterPages>
  );
};
export default LoginPage;