//тебе нужно менять только эти массивы
//ключ объекта равен id элемента в html (должны быть одинаковые)
const text = {
  ru: [
    { nav_link_main: "Главная" },
    { nav_link_services: "Услуги" },
    { nav_sublink_school: "Языковая школа" },
    { nav_sublink_services: "услуги для бизнеса" },
    { nav_sublink_visa: "Визы" },
    { reviews: "Отзывы" },
    { contacts: "Контакты" },
    {
      hero_header_1:
        "Оказание профессиональных услуг в Таиланде для туристов и экспатов!",
    },
    {
      hero_text_1:
        "«Oriental Bamboo» - ваш партнер в Таиланде! Мы предоставляем профессиональные услуги для туристов и экспатов. Языковая школа с курсами по английскому, французскому, китайскому и тайскому. Оформление виp, бизнес-поддержка и туристические услуги. Надежность и довольные клиенты за 10 лет работы. Добро пожаловать в Таиланд!",
    },
    {
      hero_subtext_1: "Для получения бесплатной консультации, свяжитесь с нами",
    },
    {
      hero_subtext_2: "Для получения бесплатной консультации, свяжитесь с нами",
    },
    {
      hero_header_2:
        "Студенческая виза (ED-Visa) в Таиланд с Oriental Bamboo - это просто и безопасно!",
    },
    {
      hero_text_2:
        "Освойте языки с профессионалами - Oriental Bamboo! Наши преподаватели - носители языка, которые сделают учебный процесс увлекательным и результативным. А получение студенческой визы с нами - это просто и безопасно. Присоединяйтесь к нам и окунитесь в мир культурного обмена в Таиланде!",
    },
    { connet_1: "Связаться с нами" },
    { connet_2: "Связаться с нами" },
    { show_more_1: "Узнать больше" },
    { show_more_2: "Узнать больше" },
    { about: "Почему выбирают именно нас" },
    // { about_1: "Самая крупная школа на Пхукете" },
    { about_2: "Работаем более 10 лет" },
    { about_3: "Занимаемся всеми типами виз" },
    { about_4: "Возможность изучения сразу нескольких языков с носителями" },
    { about_5: "Доступные цены" },

    { services: "Услуги" },
    { services_1: "Услуги для бизнеса/экспатов" },
    { services_11: "Открытие компании" },
    { services_12: "Аудиторские услуги" },
    { services_13: "Юридические услуги" },
    { services_14: "Водительское удостоверение" },
    { services_15: "Перевод документов" },
    { services_15: "Консультации" },
    { services_2: "Визовые услуги" },
    { services_21: "Студенческая виза" },
    { services_22: "Университетская виза" },
    { services_23: "Пенсионная виза" },
    { services_24: "Бизнес Виза/Разрешение на работу" },
    { services_25: "Туристическая виза" },
    { services_26: "Border run/Visa run" },
    { test_text: "Проверить, какую визу можно оформить именно вам" },
    { test_btn: "Проверить" },
    { find: "Как нас найти" },
    { find_phone: "Телефон:" },
    { find_time_1: "Режим работы:" },
    { find_time_2: "Пн. - Сб. с 8:00 до 17:00 Вс - выходной" },
    { find_mail: "Почта:" },
    { find_adress: "Адрес:" },
    { contact_us: "Оставить заявку" },
    { more_details_1: "Подробнее" },
    { more_details_2: "Подробнее" },
    { manager_1: "Связаться с менеджером" },
    { manager_2: "Связаться с менеджером" },
    { footer_main: "Главная" },
    { footer_services: "Услуги" },
    { footer_services_1: "Услуги для бизнеса" },
    { footer_school: "Языковая школа" },
    { footer_visa: "Визы" },
    { footer_review: "Отзывы" },
  ],
  en: [
    { nav_link_main: "Home" },
    { nav_link_services: "Services" },
    { nav_sublink_school: "Language school" },
    { nav_sublink_services: "Business services" },
    { nav_sublink_visa: "Visa" },
    { reviews: "Reviews" },
    { contacts: "Contacts" },
    {
      hero_header_1:
        "Provision of Professional Services in Thailand for Tourists and Expats!",
    },
    {
      hero_text_1:
        "Oriental Bamboo  - your partner in Thailand! We provide professional services for tourists and expats. A language school with courses in English, French, Chinese, and Thai. Visa processing, business support, and tourist services. Reliability and satisfied clients for 10 years of operation. Welcome to Thailand!",
    },
    {
      hero_subtext_1: "For a free consultation, please contact us",
    },
    {
      hero_subtext_2: "For a free consultation, please contact us",
    },
    {
      hero_header_2:
        "The Student Visa (ED-Visa) to Thailand with Oriental Bamboo is Simple and Safe!",
    },
    {
      hero_text_2:
        "Master languages with professionals - Oriental Bamboo! Our teachers are native speakers who make the learning process engaging and effective. Obtaining a student visa with us is simple and safe. Join us and immerse yourself in the world of cultural exchange in Thailand!",
    },
    { connet_1: "Contact us" },
    { connet_2: "Contact us" },
    { show_more_1: "Show more" },
    { show_more_2: "Show more" },
    { about: "Why Do People Choose Us" },
    // { about_1: "The largest school in Phuket" },
    { about_2: "We have been operating for over 10 years" },
    { about_3: "We deal with all types of visas" },
    {
      about_4:
        "The opportunity to study multiple languages with native speakers",
    },
    { about_5: "Affordable prices" },
    { services: "Services" },
    { services_1: "Services for businesses/expats " },
    { services_11: "Company incorporation" },
    { services_12: "Auditing services" },
    { services_13: "Legal services" },
    { services_14: "Driver license assistance " },
    { services_15: "Translation your documents" },
    { services_16: "Consultations " },
    { services_2: "Visa services" },
    { services_21: "Student visa" },
    { services_22: "University visa " },
    { services_23: `Retirement visa ` },
    { services_24: "Business visas / Work permit" },
    { services_25: "Tourist visa" },
    { services_26: "Border run / Visa run assistance " },
    { test_text: "Check which visa you can apply for with you specifically" },
    { test_btn: "Check It" },
    { find: "How to Find Us" },
    { find_phone: "Phone number:" },
    { find_time_1: "Working hours:" },
    { find_time_2: "Mon. - Sat. from 8:00 am to 5:00pm Sun - day off" },
    { find_mail: "Mail:" },
    { find_adress: "Address:" },
    { contact_us: "Contact us" },
    { more_details_1: "More details" },
    { more_details_2: "More details" },
    { manager_1: "Contact a manager" },
    { manager_2: "Contact a manager" },
    { footer_main: "Home" },
    { footer_services: "Services" },
    { footer_services_1: "Business services" },
    { footer_school: "Language school" },
    { footer_visa: "Visa" },
    { footer_review: "Reviews" },
  ],
};

async function changeLanguage(lang) {
  await localStorage.setItem("lang", lang);
  changeLanguageText();
}

function changeLanguageText() {
  const langText = text[localStorage.getItem("lang")];

  for (let i = 0; i < langText.length; i++) {
    const key = Object.keys(langText[i])[0];
    const value = langText[i][key];

    document.getElementById(key).textContent = value;
  }
}

window.addEventListener("load", () => {
  changeLanguageText();
});
