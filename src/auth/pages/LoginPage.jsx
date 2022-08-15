import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context";


export const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const { name, onInputChange } = useForm({
    name: ''
  });

  const navigate = useNavigate()

  const onLogin = (e) => {
    e.preventDefault();
    if (name === '') return;

    const lastPath = localStorage.getItem('lastPath') || '/';

    login(name);
    navigate(lastPath, {
      replace: true
    })
    /* navigate('/marvel', {
      replace: true
    }) */
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <form onSubmit={onLogin}>
            <input
              type="text"
              placeholder='Ingrese un nombre de usuario'
              className='form-control'
              name='name'
              autoComplete='off'
              value={name}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-3'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
