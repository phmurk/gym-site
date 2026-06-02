import React, { useState, useEffect, type FormEvent } from "react";
import {
  scheduleData,
  type ScheduleItem,
} from "../../components/Schedule/ScheduleData";
import "./Schedule.css";
import { useAuth } from "../../context/AuthContext";

const uniqueClasses = Array.from(
  new Set(scheduleData.flatMap((d) => d.lessons.map((l) => l.title))),
).sort();
const uniqueTrainers = Array.from(
  new Set(scheduleData.flatMap((d) => d.lessons.map((l) => l.trainer))),
).sort();

const getLessonDescription = (title: string) => {
  const descMap: Record<string, string> = {
    "МИНИ-ГРУППА":
      "Тренировка в мини-группе до 5 человек. Индивидуальный подход и контроль техники выполнения упражнений от дежурного тренера.",
    FITBOXING:
      "Высокоинтенсивная кардио-тренировка с элементами бокса. Отлично снимает стресс, сжигает калории и развивает координацию.",
    "BODY SCULPT":
      "Силовая тренировка на все группы мышц с использованием различного оборудования. Формирует красивый рельеф тела.",
    STRETCHING:
      "Тренировка, направленная на развитие гибкости, улучшение подвижности суставов и эластичности мышц.",
    "ЗДОРОВАЯ СПИНА":
      "Специальный комплекс упражнений для укрепления мышечного корсета спины, снятия напряжения и улучшения осанки.",
    "FITNESS MIX":
      "Динамичная жиросжигающая тренировка, сочетающая в себе элементы аэробики, силовых упражнений и растяжки.",
    "STEP INTERVAL":
      "Интервальная тренировка с использованием степ-платформы. Чередование кардио и силовых блоков.",
    PILATES:
      "Система упражнений для создания сильного мышечного корсета, улучшения осанки и развития гибкости без ударной нагрузки.",
    "ФИТНЕС-ЙОГА":
      "Гармоничное сочетание физических упражнений, дыхательных практик и расслабления. Улучшает баланс и гибкость.",
    ZUMBA:
      "Танцевальная фитнес-программа на основе популярных латиноамериканских ритмов. Заряжает энергией и позитивом!",
    "РАСТЯЖКА + ПРЕСС":
      "Эффективная комбинация для проработки мышц живота и последующего глубокого растяжения всего тела.",
    "КРУГОВАЯ ТРЕНИРОВКА":
      "Высокоинтенсивный тренинг, при котором упражнения выполняются друг за другом по кругу с минимальным отдыхом.",
    "TOTAL BODY":
      "Комплексная силовая тренировка для проработки абсолютно всех мышечных групп вашего тела за одно занятие.",
    "ПРЕСС-БЕДРА-ЯГОДИЦЫ":
      "Целевая тренировка, направленная на проработку самых проблемных женских зон. Максимальный акцент на низ тела.",
    "STRETCHING & MFR":
      "Растяжка в сочетании с миофасциальным релизом (использование массажных роллов) для глубокого расслабления мышц.",
  };
  return (
    descMap[title] ||
    "Эффективная тренировка под руководством опытного тренера. Подходит для любого уровня подготовки."
  );
};

const checkIsBookingAvailable = (
  lessonTime: string,
  lessonDate: Date,
  now: Date,
) => {
  const [startStr] = lessonTime.split(" - ");
  const [hours, minutes] = startStr.split(":").map(Number);
  const classDateTime = new Date(lessonDate);
  classDateTime.setHours(hours, minutes, 0, 0);
  const diffMs = classDateTime.getTime() - now.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);
  return diffHours >= 3;
};

// --- НОВАЯ ФУНКЦИЯ: Проверка, записан ли уже пользователь на это занятие ---
const checkIfBooked = (
  userBookings: any[],
  lessonTitle: string,
  lessonDate: string,
  lessonTime: string,
) => {
  if (!userBookings || userBookings.length === 0) return false;
  return userBookings.some(
    (booking) =>
      booking.title === lessonTitle &&
      booking.date === lessonDate &&
      booking.time === lessonTime,
  );
};

export const Schedule: React.FC = () => {
  const { user, openAuthModal, addBooking } = useAuth();

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [orderedDays, setOrderedDays] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  const [classFilter, setClassFilter] = useState("");
  const [trainerFilter, setTrainerFilter] = useState("");

  const [selectedLesson, setSelectedLesson] = useState<ScheduleItem | null>(
    null,
  );
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [agreePersonal, setAgreePersonal] = useState(false);
  const [agreeRules, setAgreeRules] = useState(false);
  const [agreeOffer, setAgreeOffer] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dayNamesRu = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    const today = new Date();
    const weekData = [];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const dayName = dayNamesRu[nextDate.getDay()];
      const dateStr = `${String(nextDate.getDate()).padStart(2, "0")}.${String(nextDate.getMonth() + 1).padStart(2, "0")}`;
      const dayData = scheduleData.find((d) => d.day === dayName);

      weekData.push({
        dayName: i === 0 ? "Сегодня" : dayName,
        dateStr,
        fullDate: nextDate,
        lessons: dayData ? dayData.lessons : [],
      });
    }
    setOrderedDays(weekData);
  }, []);

  const filteredDays = orderedDays.map((day) => {
    const filteredLessons = day.lessons.filter((lesson: ScheduleItem) => {
      const matchClass = classFilter === "" || lesson.title === classFilter;
      const matchTrainer =
        trainerFilter === "" || lesson.trainer === trainerFilter;
      return matchClass && matchTrainer;
    });
    return { ...day, lessons: filteredLessons };
  });

  const openModal = (
    lesson: ScheduleItem,
    isAvailable: boolean,
    dayObj: any,
  ) => {
    if (!isAvailable) return;

    if (!user) {
      openAuthModal();
      return;
    }

    setSelectedLesson(lesson);
    setSelectedDay(dayObj);
    setIsModalOpen(true);
    setIsSubmitted(false);

    setName(user.name);
    setNameError("");
    setPhone(user.phone);
    setPhoneError("");
    setEmail(user.email);
    setEmailError("");

    setAgreePersonal(false);
    setAgreeRules(false);
    setAgreeOffer(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedLesson(null);
      setSelectedDay(null);
    }, 300);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let isValid = true;

    if (name.trim().length < 2) {
      setNameError("Введите корректное имя");
      isValid = false;
    } else {
      setNameError("");
    }

    const cleanedPhone = phone.replace(/\D/g, "");
    if (!/^375(17|25|29|33|44)\d{7}$/.test(cleanedPhone)) {
      setPhoneError("Некорректный номер РБ");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Некорректный email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!isValid) return;

    if (agreePersonal && agreeRules && agreeOffer) {
      addBooking({
        id: Date.now().toString(),
        type: "Групповое занятие",
        title: selectedLesson?.title,
        trainer: selectedLesson?.trainer,
        date: selectedDay?.dateStr,
        time: selectedLesson?.time,
        timestamp: new Date().toISOString(),
      });

      setIsSubmitted(true);
    }
  };

  return (
    <section className="schedule-section">
      <div className="container">
        <div className="schedule-header">
          <h2 className="schedule-main-title">
            РАСПИСАНИЕ <span>ГРУППОВЫХ</span> ЗАНЯТИЙ
          </h2>
          <p className="schedule-subtitle">
            Выберите день и запишитесь на тренировку заранее
          </p>
        </div>

        <div className="schedule-filters">
          <div className="filter-group">
            <label className="filter-label">Направление:</label>
            <select
              className="filter-select"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
            >
              <option value="">Все занятия</option>
              {uniqueClasses.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Тренер:</label>
            <select
              className="filter-select"
              value={trainerFilter}
              onChange={(e) => setTrainerFilter(e.target.value)}
            >
              <option value="">Все тренеры</option>
              {uniqueTrainers.map((tr) => (
                <option key={tr} value={tr}>
                  {tr}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="schedule-tabs">
          {filteredDays.map((day, index) => (
            <button
              key={index}
              className={`schedule-tab ${activeTabIndex === index ? "active" : ""}`}
              onClick={() => setActiveTabIndex(index)}
            >
              <span className="tab-day">{day.dayName}</span>
              <span className="tab-date">{day.dateStr}</span>
            </button>
          ))}
        </div>

        <div className="schedule-table-wrapper">
          <div className="schedule-week-grid">
            {filteredDays.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`schedule-day-column ${activeTabIndex === dayIndex ? "active-mobile" : ""}`}
              >
                <div className="schedule-day-header">
                  <span className="col-day">{day.dayName}</span>
                  <span className="col-date">{day.dateStr}</span>
                </div>

                <div className="schedule-day-lessons">
                  {day.lessons.length > 0 ? (
                    day.lessons.map(
                      (lesson: ScheduleItem, lessonIdx: number) => {
                        // Проверяем доступность по времени
                        const isAvailable = checkIsBookingAvailable(
                          lesson.time,
                          day.fullDate,
                          currentTime,
                        );

                        // Проверяем, записан ли уже пользователь
                        const isBooked = user
                          ? checkIfBooked(
                              user.bookings,
                              lesson.title,
                              day.dateStr,
                              lesson.time,
                            )
                          : false;

                        // Карточка блокируется, если время вышло ИЛИ если юзер уже записан
                        const isCardDisabled = !isAvailable || isBooked;

                        return (
                          <div
                            key={lessonIdx}
                            className={`lesson-card ${isCardDisabled ? "lesson-card-disabled" : ""}`}
                            onClick={() => {
                              // Если карточка заблокирована из-за того, что юзер уже записан — ничего не делаем
                              if (isBooked) return;
                              openModal(lesson, isAvailable, day);
                            }}
                          >
                            <div className="lesson-time">{lesson.time}</div>
                            <h3 className="lesson-title">{lesson.title}</h3>
                            <div className="lesson-trainer">
                              <span className="trainer-icon">👤</span>{" "}
                              {lesson.trainer}
                            </div>

                            {/* Вывод плашки "Вы уже записаны" */}
                            {isBooked && (
                              <div className="lesson-booked-badge">
                                Вы уже записаны
                              </div>
                            )}

                            {/* Вывод плашки "Запись закрыта" (если время вышло и он НЕ был записан) */}
                            {!isAvailable && !isBooked && (
                              <div className="lesson-closed-badge">
                                Запись закрыта
                              </div>
                            )}
                          </div>
                        );
                      },
                    )
                  ) : (
                    <div className="no-lessons">
                      {classFilter || trainerFilter
                        ? "Нет подходящих занятий"
                        : "Занятий нет"}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Модальное окно оставляем без изменений */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="schedule-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            {isSubmitted ? (
              <div className="success-message">
                <h3>Успешно!</h3>
                <p>
                  Вы забронировали место на занятие{" "}
                  <span>{selectedLesson?.title}</span>.
                </p>
                <p>
                  Мы ждем вас {selectedDay?.dateStr} в{" "}
                  {selectedLesson?.time.split(" - ")[0]}
                </p>
                <button className="modal-submit-btn" onClick={closeModal}>
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <div className="modal-lesson-info">
                  <h2>{selectedLesson?.title}</h2>
                  <p className="modal-time-trainer">
                    <span>
                      📅 {selectedDay?.dayName}, {selectedDay?.dateStr}
                    </span>
                    <span>🕒 {selectedLesson?.time}</span>
                    <span>👤 {selectedLesson?.trainer}</span>
                  </p>
                  <p className="modal-desc">
                    {getLessonDescription(selectedLesson?.title || "")}
                  </p>
                </div>

                <form className="booking-form" onSubmit={handleSubmit}>
                  <h4 className="form-title">Запись на тренировку</h4>

                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setNameError("");
                      }}
                      className={nameError ? "error-input" : ""}
                    />
                    {nameError && (
                      <span className="error-text">{nameError}</span>
                    )}
                  </div>

                  <div className="input-group">
                    <input
                      type="tel"
                      placeholder="+375 (XX) XXX-XX-XX"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setPhoneError("");
                      }}
                      className={phoneError ? "error-input" : ""}
                    />
                    {phoneError && (
                      <span className="error-text">{phoneError}</span>
                    )}
                  </div>

                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Ваш Email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      className={emailError ? "error-input" : ""}
                    />
                    {emailError && (
                      <span className="error-text">{emailError}</span>
                    )}
                  </div>

                  <div className="checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        required
                        checked={agreePersonal}
                        onChange={(e) => setAgreePersonal(e.target.checked)}
                      />
                      <span className="checkmark"></span> Согласен на обработку
                      моих персональных данных
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        required
                        checked={agreeRules}
                        onChange={(e) => setAgreeRules(e.target.checked)}
                      />
                      <span className="checkmark"></span> Ознакомлен с правилами
                      клуба
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        required
                        checked={agreeOffer}
                        onChange={(e) => setAgreeOffer(e.target.checked)}
                      />
                      <span className="checkmark"></span> Ознакомлен с офертой
                    </label>
                  </div>
                  <button type="submit" className="modal-submit-btn">
                    Забронировать место
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Schedule;
