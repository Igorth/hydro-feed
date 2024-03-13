import { Post } from './Post';
import { Header } from './components/Header';
import './styles.css';

export function App() {
  return (
    <>
      <Header />
      <Post author="Igor Dias" content="Lorem ipsum" />
      <Post author="Laisa" content="Lorem ipsum" />
    </>
  );
}
