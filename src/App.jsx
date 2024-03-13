import { Post } from './Post';
import { Header } from './components/Header';
import './styles.css';

export function App() {
  return (
    <>
      <Header />
      <Post author="Igor" content="Lorem" />
      <Post author="Laisa" content="Lorem" />
    </>
  );
}
