export type ScheduleItem = {
  title: string;
  time: string;
  trainer: string;
};

export type ScheduleDay = {
  day: string;
  lessons: ScheduleItem[];
};

export const scheduleData: ScheduleDay[] = [
  {
    day: "Понедельник",
    lessons: [
      {
        title: "МИНИ-ГРУППА",
        time: "08:15 - 09:05",
        trainer: "Дежурный инструктор",
      },
      {
        title: "FITBOXING",
        time: "09:00 - 09:50",
        trainer: "Гаврильчик Константин",
      },
      {
        title: "BODY SCULPT",
        time: "09:00 - 09:50",
        trainer: "Носова Валерия",
      },
      {
        title: "STRETCHING",
        time: "10:00 - 10:50",
        trainer: "Носова Валерия",
      },
      {
        title: "ЗДОРОВАЯ СПИНА",
        time: "11:00 - 11:50",
        trainer: "Никоноренкова Ольга",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "15:00 - 15:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "16:00 - 16:50",
        trainer: "Клавсуть Сергей",
      },
      {
        title: "FITNESS MIX",
        time: "18:00 - 18:50",
        trainer: "Барская Людмила",
      },
      {
        title: "STEP INTERVAL",
        time: "19:00 - 19:50",
        trainer: "Барская Людмила",
      },
      {
        title: "FITBOXING",
        time: "20:00 - 20:50",
        trainer: "Деменов Геннадий",
      },
      {
        title: "PILATES",
        time: "20:00 - 20:50",
        trainer: "Барская Людмила",
      },
    ],
  },

  {
    day: "Вторник",
    lessons: [
      {
        title: "ФИТНЕС-ЙОГА",
        time: "08:00 - 08:50",
        trainer: "Козловская Татьяна",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "08:00 - 08:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "FITNESS MIX",
        time: "09:00 - 09:50",
        trainer: "Барская Людмила",
      },
      {
        title: "ZUMBA",
        time: "10:00 - 10:50",
        trainer: "Барская Людмила",
      },
      {
        title: "PILATES",
        time: "11:00 - 11:50",
        trainer: "Барская Людмила",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "15:00 - 15:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "16:00 - 16:50",
        trainer: "Никоноренкова Ольга",
      },
      {
        title: "РАСТЯЖКА + ПРЕСС",
        time: "16:00 - 16:50",
        trainer: "Горенец Елизавета",
      },
      {
        title: "ЗДОРОВАЯ СПИНА",
        time: "17:00 - 17:50",
        trainer: "Никоноренкова Ольга",
      },
      {
        title: "PILATES",
        time: "18:00 - 18:50",
        trainer: "Горенец Елизавета",
      },
      {
        title: "КРУГОВАЯ ТРЕНИРОВКА",
        time: "19:00 - 19:50",
        trainer: "Горенец Елизавета",
      },
      {
        title: "TOTAL BODY",
        time: "20:00 - 20:50",
        trainer: "Горенец Елизавета",
      },
      {
        title: "FITBOXING",
        time: "20:00 - 21:20",
        trainer: "Гаврильчик Константин",
      },
      {
        title: "ФИТНЕС-ЙОГА",
        time: "21:00 - 21:50",
        trainer: "Козловская Татьяна",
      },
    ],
  },

  {
    day: "Среда",
    lessons: [
      {
        title: "МИНИ-ГРУППА",
        time: "08:00 - 08:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "FITBOXING",
        time: "09:00 - 09:50",
        trainer: "Гаврильчик Константин",
      },
      {
        title: "ПРЕСС-БЕДРА-ЯГОДИЦЫ",
        time: "09:00 - 09:50",
        trainer: "Севец Наталья",
      },
      {
        title: "STRETCHING",
        time: "10:00 - 10:50",
        trainer: "Севец Наталья",
      },
      {
        title: "FITNESS MIX",
        time: "11:00 - 11:50",
        trainer: "Севец Наталья",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "15:00 - 15:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "16:00 - 16:50",
        trainer: "Никоноренкова Ольга",
      },
      {
        title: "ЗДОРОВАЯ СПИНА",
        time: "17:00 - 17:50",
        trainer: "Никоноренкова Ольга",
      },
      {
        title: "КРУГОВАЯ ТРЕНИРОВКА",
        time: "18:00 - 18:50",
        trainer: "Севец Наталья",
      },
      {
        title: "BODY SCULPT",
        time: "19:00 - 19:50",
        trainer: "Севец Наталья",
      },
      {
        title: "FITBOXING",
        time: "20:00 - 20:50",
        trainer: "Деменов Геннадий",
      },
      {
        title: "STRETCHING",
        time: "20:00 - 20:50",
        trainer: "Севец Наталья",
      },
      {
        title: "FITNESS MIX",
        time: "21:00 - 21:50",
        trainer: "Севец Наталья",
      },
    ],
  },

  {
    day: "Четверг",
    lessons: [
      {
        title: "ФИТНЕС-ЙОГА",
        time: "08:00 - 08:50",
        trainer: "Козловская Татьяна",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "08:15 - 09:05",
        trainer: "Дежурный инструктор",
      },
      {
        title: "КРУГОВАЯ ТРЕНИРОВКА",
        time: "09:00 - 09:50",
        trainer: "Севец Наталья",
      },
      {
        title: "STRETCHING",
        time: "10:00 - 10:50",
        trainer: "Севец Наталья",
      },
      {
        title: "ПРЕСС-БЕДРА-ЯГОДИЦЫ",
        time: "11:00 - 11:50",
        trainer: "Севец Наталья",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "15:30 - 16:20",
        trainer: "Журок Евгения",
      },
      {
        title: "PILATES",
        time: "17:00 - 17:50",
        trainer: "Горенец Елизавета",
      },
      {
        title: "КРУГОВАЯ ТРЕНИРОВКА",
        time: "18:00 - 18:50",
        trainer: "Горенец Елизавета",
      },
      {
        title: "STRETCHING",
        time: "19:00 - 19:50",
        trainer: "Горенец Елизавета",
      },
      {
        title: "FITNESS MIX",
        time: "20:00 - 20:50",
        trainer: "Горенец Елизавета",
      },
      {
        title: "FITBOXING",
        time: "20:00 - 21:20",
        trainer: "Гаврильчик Константин",
      },
      {
        title: "ФИТНЕС-ЙОГА",
        time: "21:00 - 21:50",
        trainer: "Козловская Татьяна",
      },
    ],
  },

  {
    day: "Пятница",
    lessons: [
      {
        title: "FITNESS MIX",
        time: "09:00 - 09:50",
        trainer: "Барская Людмила",
      },
      {
        title: "ZUMBA",
        time: "10:00 - 10:50",
        trainer: "Барская Людмила",
      },
      {
        title: "PILATES",
        time: "11:00 - 11:50",
        trainer: "Барская Людмила",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "15:00 - 15:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "16:00 - 16:50",
        trainer: "Деменов Геннадий",
      },
      {
        title: "BODY SCULPT",
        time: "17:00 - 17:50",
        trainer: "Севец Наталья",
      },
      {
        title: "FITNESS MIX",
        time: "18:00 - 18:50",
        trainer: "Севец Наталья",
      },
      {
        title: "STRETCHING",
        time: "19:00 - 19:50",
        trainer: "Севец Наталья",
      },
      {
        title: "КРУГОВАЯ ТРЕНИРОВКА",
        time: "20:00 - 20:50",
        trainer: "Севец Наталья",
      },
    ],
  },

  {
    day: "Суббота",
    lessons: [
      {
        title: "BODY SCULPT",
        time: "09:30 - 10:20",
        trainer: "Севец Наталья",
      },
      {
        title: "STRETCHING",
        time: "10:30 - 11:20",
        trainer: "Севец Наталья",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "11:00 - 11:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "ПРЕСС-БЕДРА-ЯГОДИЦЫ",
        time: "11:30 - 12:20",
        trainer: "Севец Наталья",
      },
      {
        title: "STRETCHING & MFR",
        time: "12:30 - 13:20",
        trainer: "Севец Наталья",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "16:00 - 16:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "17:00 - 17:50",
        trainer: "Дежурный инструктор",
      },
    ],
  },

  {
    day: "Воскресенье",
    lessons: [
      {
        title: "МИНИ-ГРУППА",
        time: "11:00 - 11:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "BODY SCULPT",
        time: "13:00 - 13:50",
        trainer: "Носова Валерия",
      },
      {
        title: "STRETCHING",
        time: "14:00 - 14:50",
        trainer: "Носова Валерия",
      },
      {
        title: "КРУГОВАЯ ТРЕНИРОВКА",
        time: "15:00 - 15:50",
        trainer: "Носова Валерия",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "16:00 - 16:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "МИНИ-ГРУППА",
        time: "17:00 - 17:50",
        trainer: "Дежурный инструктор",
      },
      {
        title: "PILATES",
        time: "18:00 - 18:50",
        trainer: "Козловская Татьяна",
      },
      {
        title: "ФИТНЕС-ЙОГА",
        time: "19:00 - 20:20",
        trainer: "Козловская Татьяна",
      },
    ],
  },
];
