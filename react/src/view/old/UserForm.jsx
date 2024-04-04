import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axios-client.js";
import { useStateContext } from "../../context/TokenContext.jsx";
import * as api from "../../api/api.js";
import { pageNames } from "../../repository/ApiParameters.js";
import usePageData from "../../components/use-page-data-hook/UsePageDataHook.jsx";

export default function UserForm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  const page = pageNames.usersForm;

  const {
    FontAwesomeIcon,
    faSpinner,
    localDataRepositoryOnly,
    isMobile,
    calcDifViewHeigh,
    openModal,
    objContentModal,
    typeOfModal,
    handleOpenModal,
    handleCloseModal,
    handleOnChangeFieldsModal,
    handleOnChangeImagesModal,
    handleUpdateDateModal,
    pageContent,
    isLoading,
    error,
  } = usePageData(page);

  useEffect(() => {
    if (id) {
      setLoading(true);
      api.getUserById(id)
        .then((data) => {
          setLoading(false);
          setUser(data);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);

  const onSubmit = (ev) => {
    ev.preventDefault();

    if (user.id) {
      api.updateUser(user.id, user)
        .then(() => {
          setNotification('User was successfully updated');
          navigate('/users');
        })
        .catch((error) => {
          const response = error.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      api.createUser(user)
        .then(() => {
          setNotification('User was successfully created');
          navigate('/users');
        })
        .catch((error) => {
          const response = error.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  }

  return (
    <>
      {user.id && <h1>Update User: {user.name}</h1>}
      {!user.id && <h1>New User</h1>}
      <div className="card animated fadeInDown">
        {loading && (
          <div className="text-center">
            <FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: '0.5rem' }} />
        {loading.text}
          </div>
        )}
        {errors &&
          <div className="alert">
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
        {!loading && (
          <form onSubmit={onSubmit}>
            <input value={user.name} onChange={ev => setUser({ ...user, name: ev.target.value })} placeholder="Name" />
            <input value={user.email} onChange={ev => setUser({ ...user, email: ev.target.value })} placeholder="Email" />
            <input type="password" onChange={ev => setUser({ ...user, password: ev.target.value })} placeholder="Password" />
            <input type="password" onChange={ev => setUser({ ...user, password_confirmation: ev.target.value })} placeholder="Password Confirmation" />
            <button className="btn">Save</button>
          </form>
        )}
      </div>
    </>
  )
}
