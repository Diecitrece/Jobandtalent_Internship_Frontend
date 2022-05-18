import type { NextPage } from 'next';
import Image from 'next/image';
import { TextInput } from 'components/UI/TextInput';
import { useReducer, useState, useEffect } from 'react';
import { Button } from 'components/UI/Button';
import { UserRegister, UserRegisterAction } from 'lib/models/user';
import jobandtalent from 'public/jobandtalent.png';

const Register: NextPage = () => {
  const INITIAL_VALUES: UserRegister = {
    firstName: { value: '', error: '' },
    surNames: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' },
    confirmPassword: { value: '', error: '' },
    phone: { value: '', error: '' },
    address: { value: '', error: '' },
  };

  const reducer = (
    state: UserRegister,
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
      case UserRegisterAction.FIRST_NAME_CHANGED:
        return {
          ...state,
          firstName: { ...state.firstName, value: action.payload },
        };
      case UserRegisterAction.FIRST_NAME_ERROR:
        return {
          ...state,
          firstName: { ...state.firstName, error: action.payload },
        };
      case UserRegisterAction.SUR_NAMES_CHANGED:
        return {
          ...state,
          surNames: { ...state.surNames, value: action.payload },
        };
      case UserRegisterAction.SUR_NAMES_ERROR:
        return {
          ...state,
          surNames: { ...state.surNames, error: action.payload },
        };
      case UserRegisterAction.EMAIL_CHANGED:
        return { ...state, email: { ...state.email, value: action.payload } };
      case UserRegisterAction.EMAIL_ERROR:
        return { ...state, email: { ...state.email, error: action.payload } };
      case UserRegisterAction.PASSWORD_CHANGED:
        return {
          ...state,
          password: { ...state.password, value: action.payload },
        };
      case UserRegisterAction.PASSWORD_ERROR:
        return {
          ...state,
          password: { ...state.password, error: action.payload },
        };
      case UserRegisterAction.CONFIRM_PASSWORD_CHANGED:
        return {
          ...state,
          confirmPassword: { ...state.confirmPassword, value: action.payload },
        };
      case UserRegisterAction.CONFIRM_PASSWORD_ERROR:
        return {
          ...state,
          confirmPassword: {
            ...state.confirmPassword,
            error: action.payload,
          },
        };
      case UserRegisterAction.PHONE_CHANGED:
        return { ...state, phone: { ...state.phone, value: action.payload } };
      case UserRegisterAction.PHONE_ERROR:
        return {
          ...state,
          phone: { ...state.phone, error: action.payload },
        };
      case UserRegisterAction.ADDRESS_CHANGED:
        return {
          ...state,
          address: { ...state.address, value: action.payload },
        };
      case UserRegisterAction.ADDRESS_ERROR:
        return {
          ...state,
          address: { ...state.address, error: action.payload },
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_VALUES);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (
      !state.firstName.value.error ||
      !state.surNames.value.error ||
      !state.email.value.error ||
      !state.password.value.error ||
      !state.confirmPassword.value.error ||
      !state.phone.value.error ||
      !state.address.value.error
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [state]);

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    value.length < 3
      ? dispatch({
          type: UserRegisterAction.FIRST_NAME_ERROR,
          payload: '3 characters',
        })
      : dispatch({ type: UserRegisterAction.FIRST_NAME_ERROR, payload: '' });
    dispatch({
      type: UserRegisterAction.FIRST_NAME_CHANGED,
      payload: value,
    });
  };

  const handleSurNames = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    value.length < 3
      ? dispatch({
          type: UserRegisterAction.SUR_NAMES_ERROR,
          payload: '3 characters',
        })
      : dispatch({ type: UserRegisterAction.SUR_NAMES_ERROR, payload: '' });

    dispatch({
      type: UserRegisterAction.SUR_NAMES_CHANGED,
      payload: value,
    });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    !value.includes('@')
      ? dispatch({
          type: UserRegisterAction.EMAIL_ERROR,
          payload: 'Invalid email',
        })
      : dispatch({ type: UserRegisterAction.EMAIL_ERROR, payload: '' });

    dispatch({
      type: UserRegisterAction.EMAIL_CHANGED,
      payload: value,
    });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    value.length < 6
      ? dispatch({
          type: UserRegisterAction.PASSWORD_ERROR,
          payload: 'Password must be at least 6 characters',
        })
      : dispatch({
          type: UserRegisterAction.PASSWORD_ERROR,
          payload: '',
        });

    dispatch({
      type: UserRegisterAction.PASSWORD_CHANGED,
      payload: value,
    });
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    value !== state.password.value && value.length > 0
      ? dispatch({
          type: UserRegisterAction.CONFIRM_PASSWORD_ERROR,
          payload: 'Passwords must match',
        })
      : dispatch({
          type: UserRegisterAction.CONFIRM_PASSWORD_ERROR,
          payload: '',
        });

    dispatch({
      type: UserRegisterAction.CONFIRM_PASSWORD_CHANGED,
      payload: value,
    });
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    value.length > 0 && value.length < 10
      ? dispatch({
          type: UserRegisterAction.PHONE_ERROR,
          payload: 'Phone must be at least 10 characters',
        })
      : dispatch({
          type: UserRegisterAction.PHONE_ERROR,
          payload: '',
        });

    dispatch({
      type: UserRegisterAction.PHONE_CHANGED,
      payload: value,
    });
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    value.length > 0 && value.length < 10
      ? dispatch({
          type: UserRegisterAction.ADDRESS_ERROR,
          payload: 'Address must be at least 10 characters',
        })
      : dispatch({
          type: UserRegisterAction.ADDRESS_ERROR,
          payload: '',
        });
    dispatch({
      type: UserRegisterAction.ADDRESS_CHANGED,
      payload: value,
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <>
      {/* {JSON.stringify(state)} */}
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <Image
              src={jobandtalent}
              alt={'jobandtalent'}
              width={600}
              height={150}
              objectFit={'contain'}
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign up to our company
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleOnSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <TextInput
                  name='firstName'
                  label='First name'
                  type='text'
                  placeholder='First name'
                  value={state.firstName.value}
                  onChange={handleFirstName}
                />
              </div>
              {state.firstName.error ? (
                <div className='text-red-600'>{state.firstName.error}</div>
              ) : null}
              <div>
                <TextInput
                  name='surNames'
                  label='Surnames'
                  type='text'
                  placeholder='Surnames'
                  value={state.surNames.value}
                  onChange={handleSurNames}
                />
              </div>
              {state.surNames.error ? (
                <div className='text-red-600'>{state.surNames.error}</div>
              ) : null}
              <div>
                <TextInput
                  name='email'
                  label='Email address'
                  type='email'
                  placeholder='Email address'
                  value={state.email.value}
                  onChange={handleEmail}
                />
              </div>
              {state.email.error ? (
                <div className='text-red-600'>{state.email.error}</div>
              ) : null}
              <div>
                <TextInput
                  name='password'
                  label='Password'
                  type='password'
                  placeholder='Password'
                  value={state.password.value}
                  onChange={handlePassword}
                />
              </div>
              {state.password.error ? (
                <div className='text-red-600'>{state.password.error}</div>
              ) : null}
              <div>
                <TextInput
                  name='confirmPassword'
                  label='Confirm password'
                  type='password'
                  placeholder='Confirm password'
                  value={state.confirmPassword.value}
                  onChange={handleConfirmPassword}
                />
              </div>
              {state.confirmPassword.error ? (
                <div className='text-red-600'>
                  {state.confirmPassword.error}
                </div>
              ) : null}
              <div>
                <TextInput
                  name='phone'
                  label='Phone'
                  type='text'
                  placeholder='Phone'
                  value={state.phone.value}
                  onChange={handlePhone}
                />
              </div>
              {state.phone.error ? (
                <div className='text-red-600'>{state.phone.error}</div>
              ) : null}
              <div>
                <TextInput
                  name='address'
                  label='Address'
                  type='text'
                  placeholder='Address'
                  value={state.address.value}
                  onChange={handleAddress}
                />
              </div>
              {state.address.error ? (
                <div className='text-red-600'>{state.address.error}</div>
              ) : null}
            </div>
            <div>
              {/* if error button disabled */}
              <Button text='Sign up' disabled={disableButton} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
