import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";


export const LoginPage = () => {

  const { user, onInputChange } = useForm({
    user: ''
  });

  const navigate = useNavigate()

  const onLogin = (e) => {
    e.preventDefault();
    if (user === '') return;

    localStorage.setItem('user', user);

    navigate('/marvel', {
      replace: true
    })
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
              name='user'
              autoComplete='off'
              value={user}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-3'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
