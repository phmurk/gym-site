import "./Reviews.css";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";

const initialReviews = [
  {
    name: "Игорь",
    date: "28.05.2026",
    text: "Долго ходил мимо, решился на пробный, потому что бесплатно. Тренер подошел, показал пару упражнений для спины, через месяц заметил, что болеть перестала. А то, что музыка странноватая иногда — свои наушники никто не отменял.",
  },
  {
    name: "Юля",
    date: "25.05.2026",
    text: "Я панически боялась тренажерных залов. Думала, все будут пялиться. Подруга затащила на пробный. Никто вообще не смотрел. Все занимались своим делом. Тренер подошла один раз, спросила, всё ли ок. Идеально. Хожу уже полгода.",
  },
  {
    name: "Вадим",
    date: "20.05.2026",
    text: "Пошел потому что дешево. Из плюсов: реально чистые раздевалки. Из минусов: иногда вентиляция работает не на полную. Сказал администратору — вопрос решили за 10 минут. Для меня это показатель.",
  },
  {
    name: "Лена",
    date: "15.05.2026",
    text: "Пришла после декрета с желанием вернуть форму. Тренер не давил и не рассказывал про идеальное тело. Просто помог начать. Сейчас через 8 месяцев я снова чувствую себя уверенно.",
  },
  {
    name: "Саша",
    date: "10.05.2026",
    text: "Учусь рядом. Цена нормальная, расположение удобное. Можно заморозить абонемент на сессию. Это прям спасение.",
  },
  {
    name: "Татьяна",
    date: "05.05.2026",
    text: "Спортом никогда не занималась. Было страшно и неловко. Но персонал очень спокойно ко всему относится. Сейчас хожу два раза в неделю и реально чувствую себя лучше.",
  },
  {
    name: "Никита",
    date: "01.05.2026",
    text: "За три года офисной работы наел бока и спина болела постоянно. Хожу четвертый месяц — минус 7 кг и спина больше не беспокоит.",
  },
  {
    name: "Алина",
    date: "28.04.2026",
    text: "Тренер поправила технику приседа, которую я делала неправильно несколько лет. Никто ничего не навязывал. Просто помогли разобраться.",
  },
  {
    name: "Денис",
    date: "20.04.2026",
    text: "Зашел случайно. Понравилось, что здесь никто не бегает за тобой с продажами. Всё спокойно и по делу. Взял сразу годовой абонемент.",
  },
];

function Reviews() {
  const { user, openAuthModal, addReview } = useAuth();

  const [showMore, setShowMore] = useState(false);
  const [allReviews, setAllReviews] = useState<any[]>(initialReviews);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const globalReviews = JSON.parse(
      localStorage.getItem("globalReviews") || "[]",
    );
    setAllReviews([...globalReviews, ...initialReviews]);
  }, []);

  const handleWriteReviewClick = () => {
    if (!user) {
      openAuthModal();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewText.trim().length < 10) {
      return setErrorMsg("Отзыв слишком короткий. Напишите хотя бы пару слов!");
    }

    addReview(reviewText);

    const newReview = {
      name: user?.name,
      text: reviewText,
      date: new Date().toLocaleDateString("ru-RU"),
    };
    setAllReviews([newReview, ...allReviews]);

    setIsModalOpen(false);
    setReviewText("");
    setErrorMsg("");
  };

  const visibleReviews = showMore ? allReviews : allReviews.slice(0, 3);

  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-head">
          <h2 className="reviews-title">Отзывы Наших Клиентов</h2>
          <p className="reviews-subtitle">
            Пульс зала. Голоса участников. Реальные результаты.
          </p>
          <div className="reviews-line"></div>
        </div>

        <div className="review-content">
          {visibleReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-quote">“</div>
              <h3 className="review-name">
                {review.name}{" "}
                {review.date && (
                  <span className="review-date">({review.date})</span>
                )}
              </h3>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="review-buttons-wrapper">
          <button
            className="review-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Скрыть отзывы" : "Показать все"}
          </button>

          <button
            className="review-button review-button-primary"
            onClick={handleWriteReviewClick}
          >
            Написать отзыв
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="review-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="review-modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h2>Оставить отзыв</h2>
            <p>
              Поделитесь своими впечатлениями о тренировках в FitPulse. Ваш
              отзыв появится на сайте мгновенно.
            </p>

            <form onSubmit={handleSubmitReview}>
              <textarea
                className={`review-textarea ${errorMsg ? "error-border" : ""}`}
                placeholder="Что вам понравилось? Что можно улучшить?"
                value={reviewText}
                onChange={(e) => {
                  setReviewText(e.target.value);
                  setErrorMsg("");
                }}
                rows={5}
              ></textarea>

              {errorMsg && (
                <span className="review-error-text">{errorMsg}</span>
              )}

              <button type="submit" className="review-submit-btn">
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reviews;
