import styles from './app.module';
import './global';
import Ryu from './images/ryu-wallpaper';

interface User {
  id: number
  username: string
  firstName: string
  lastName: string
}

const newUser: User = {
  id: 123,
  username: 'jpreecedev',
  firstName: 'Jon',
  lastName: 'Preece'
}

const imagem = document.createElement('img');
imagem.src = Ryu;
document.body.appendChild(imagem);

console.log(newUser)