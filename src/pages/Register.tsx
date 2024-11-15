import React, { useEffect, useState } from 'react';
import { FormRow, Logo, Preferences } from "../components";
import { loginUser, registerUser } from '../features/user/userSlice';
import { PreferenceType, UserType } from '../utils/types'
import { useAppDispatch, useAppSelector } from "../hooks";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from "../assets/wrappers/RegisterPage"
import imgBck from '../assets/images/zones/cima-gourmet.jpg'
import { preferences } from '../utils/data';


const initialState: UserType = {
  id: 0,
  name: '',
  email: '',
  password: '',
  isMember: true,
  showPreferences: false,
  preferences: [...preferences],
};

function Register() {
  const [values, setValues] = useState(initialState);
  const dispatch = useAppDispatch();
  const { isLoading, user } = useAppSelector((store) => store.user)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value })
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, isMember, preferences } = values;
    if (!name || !password || (!isMember && !email)) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ name, password, preferences }))
      return;
    }
    dispatch(registerUser({ name, email, password, preferences }))
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember, showPreferences: false });
  };

  const togglePreferences = () => {
    setValues({ ...values, showPreferences: !values.showPreferences })
  }

  const setPreferences = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const newValues: PreferenceType[] = values.preferences.map((preference) => {
      return preference.id === id ? {
        ...preference,
        checked: checked
      } : preference
    })
    setValues({ ...values, preferences: [...newValues] });
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 1500)
    }
  }, [user, navigate])

  return (
    <Wrapper className='full-page' style={{ backgroundImage: `url(${imgBck})`, backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='welcome-container container'>
        <div className="welcome-card">
          <div className="info">
            <h1>Bienvenidos</h1>
            <Logo />
            <p>Experiencia culinaria de altura. Vive el lujo de la gastronomía en su máxima expresión. Ingresa a nuestro portal y reserva una experiencia inolvidable</p>
          </div>
        </div>
        <div className="form-container">
          <form className='form' onSubmit={onSubmit}>
            <h3>{values.isMember ? 'Login' : 'Register'}</h3>

            {!values.showPreferences && <FormRow labelText='Username' type='text' name='name' value={values.name} onChange={handleChange} />}

            {!values.isMember && !values.showPreferences && <FormRow labelText='Email' type='email' name='email' value={values.email} onChange={handleChange} />}

            {!values.showPreferences && <FormRow labelText='Contraseña' type='password' name='password' value={values.password} onChange={handleChange} />}

            {values.showPreferences && (
              <>
                <Preferences preferences={values.preferences} setPreferences={setPreferences} />
              </>
            )}

            {(!values.isMember && !values.showPreferences) && <button type='button' className='btn btn-block' onClick={togglePreferences}>Siguiente</button>}
            {(!values.isMember && values.showPreferences) && <button type='button' className='btn btn-block' onClick={togglePreferences}>Atrás</button>}

            {(values.isMember || values.showPreferences) && <button type='submit' className='btn btn-block'>{isLoading ? 'Loading...' : values.isMember ? 'Entrar' : 'Crear Cuenta'}</button>}

            {values.isMember && <button type="button" className="btn btn-block btn-hipster" onClick={() => dispatch(loginUser({ name: 'armandocasas', password: 'secret', preferences }))}>Demo</button>}

            <p>
              {values.isMember ? '¿No tienes cuenta aún?' : '¿Ya tienes tu cuenta ?'}

              <button type='button' onClick={toggleMember} className='member-btn'>
                {values.isMember ? 'Registrate' : 'Login'}
              </button>
            </p>

          </form>
        </div>
      </div>
    </Wrapper >
  )
}

export default Register