import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/Igorth.png" alt="" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Igor Dias</strong>
                <time
                  title="14 de Março de 2024 às 06:09"
                  dateTime="2024-03-14 06:09:43"
                >
                  Cerca de 1h atrás
                </time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button title="Aplaudir">
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
