import "./Questions.css";
import Accordion from "react-bootstrap/Accordion";

function Questions() {
  return (
    <section className="questions">
      <div className="container">
        <h2 className="questions-title">Часто Задаваемые Вопросы</h2>
        <Accordion className="questions-accordion" defaultActiveKey="0" flush>
          <Accordion.Item className="questions-item" eventKey="0">
            <Accordion.Header className="accord-header">
              Есть ли первое бесплатное посещение?
            </Accordion.Header>
            <Accordion.Body className="questions-body">
              <div className="question-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-heart-pulse logo-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                  <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                </svg>
              </div>
              <div className="q-answer">
                Да, конечно. Пробный день — бесплатно и без обязательств. Вам
                нужно только оставить номер телефона — мы пришлём код на вход. В
                зале дежурный тренер покажет основные тренажёры, если захотите.
                Никто не будет уговаривать купить абонемент сразу. Можете просто
                прийти, позаниматься, выпить воды и уйти.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="questions-item" eventKey="1">
            <Accordion.Header className="accord-header">
              Можно ли заморозить абонемент?
            </Accordion.Header>
            <Accordion.Body className="questions-body">
              <div className="question-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-heart-pulse logo-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                  <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                </svg>
              </div>
              <div className="q-answer">
                Да. На время болезни, командировки или отпуска — до 30 дней в
                году, без справок и комиссий. Просто напишите в чат.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="questions-item" eventKey="3">
            <Accordion.Header className="accord-header">
              Можно ли заморозить абонемент больше, чем на 30 дней?
            </Accordion.Header>
            <Accordion.Body className="questions-body">
              <div className="question-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-heart-pulse logo-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                  <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                </svg>
              </div>
              <div className="q-answer">
                По уважительной причине (травма с документальным подтверждением,
                тяжёлая болезнь) — да, до 90 дней. Просто «захотел отдохнуть» —
                только 30 дней в календарный год. Мы не банк, чтобы зарабатывать
                на неиспользованных днях. Но и не благотворительный фонд.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="questions-item" eventKey="4">
            <Accordion.Header className="accord-header">
              Выдаёте ли полотенца и воду?
            </Accordion.Header>
            <Accordion.Body className="questions-body">
              <div className="question-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-heart-pulse logo-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                  <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                </svg>
              </div>
              <div className="q-answer">
                Полотенца выдаются в аренду по вашему желанию (5 BYN, чистое и
                пахнет хлоркой, как и полагается). Вода из кулера бесплатно. С
                собой — пожалуйста.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="questions-item" eventKey="5">
            <Accordion.Header className="accord-header">
              Можно ли с ребёнком? Есть ли детский уголок?
            </Accordion.Header>
            <Accordion.Body className="questions-body">
              <div className="question-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-heart-pulse logo-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                  <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                </svg>
              </div>
              <div className="q-answer">
                Детского уголка у нас нет, но если ребёнку от 14 лет, он может
                заниматься с Вами по гостевому дню (конечно, под Вашу
                ответственность). Младше 14 — только в присутствии взрослого и с
                письменного согласия. Железо тяжелое, дети быстрые — риски ни к
                чему.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="questions-item" eventKey="6">
            <Accordion.Header className="accord-header">
              Можно ли снимать видео для соцсетей в зале?
            </Accordion.Header>
            <Accordion.Body className="questions-body">
              <div className="question-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-heart-pulse logo-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                  <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                </svg>
              </div>
              <div className="q-answer">
                Да, но без фанатизма. Короткий ролик для себя или сторис —
                пожалуйста. <br />
                Нельзя:
                <ul>
                  <li>снимать других людей без их явного согласия,</li>
                  <li>устанавливать штатив и перекрывать проход,</li>
                  <li>
                    вести прямые эфиры с комментариями (это отвлекает
                    остальных).
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}

export default Questions;
