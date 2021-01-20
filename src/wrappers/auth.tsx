import { Redirect } from 'umi';
import useAuth from '../customHook/useAuth';

export default (props:any) => {
  const isLogin:boolean  = useAuth();
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}