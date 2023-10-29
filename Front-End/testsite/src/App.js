import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

var isLoggedIn = false;


export default function Profile() {
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginButton />;
  }
  return (
    <>
      {content}
    </>
  );
};

function AdminPanel() {
  return (
    <div>
      <p>Admin</p>
    </div>
  );
};

function LoginButton() {
  return (
    <div>
      <button>Login</button>
    </div>
  );
};
