import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      // header
      "bio": "Biography",
      "press": "Press",
      "media": "Media",
      "photo": "Photo",
      "videoNav": "Video",
      "contact": "Contact",
      "theme-mode": "Dark Mode",
      "account": "Account",
      // header
      // biography
      "biographyOne": "Tina Barabadze Electro-acoustic violinist. I graduated from Tbilisi State Conservatory with a degree in violin, bachelor's degree. I also took courses in jazz in Berlin and electronic music in Amsterdam.  I also collaborated with Silk Factory Studio a few years ago. Musically I have voiced the films: 'Shindisi', 'Teasing Children 3', commercials: 'Bank of Georgia - Do not stop', 'Solo', 'Space', Georgian cartoon and other projects. I actively participate in various events in Georgia, as a private Also public. Last year I set up my own studio and actively started remote collaborations with foreign labels. We have implemented projects and today we continue to actively cooperate.",
      "biographyTwo": "I currently live and work in Georgia. I work as a solo violinist at POST RED. I listen to movies, commercials and video games musically.",
      "biographyThird": "I also collaborated with Silk Factory Studio a few years ago. Musically I have voiced the films: 'Shindisi', 'Teasing Children 3', commercials: 'Bank of Georgia - Do not stop', 'Solo', 'Space', Georgian cartoon and other projects. I actively participate in various events in Georgia, as a private Also public. Last year I set up my own studio and actively started remote collaborations with foreign labels. We have implemented projects and today we continue to actively cooperate.",
      "name": "TinaViolin B.",
      // biography
      // footer
      "rights": "All Rights Reserved ©2021",
      "privacy": "PRIVACY POLICY",
      "terms": "TERMS OF USE",
      "contact": "Contact",
      // footer
      // contact
      "contact_me": "Contact me",
      "facebook": "Facebook",
      "instagram": "Instagram",
      "twitter": "Twitter",
      "youtube": "YouTube",
      "soundCloud": "SOUNDCLOUD",
      "follow_tina": "Follow me and recieve all news from Tina Violin B.",
      "labelName": "Your Full Name",
      "labelNumber": "Your Phone Number",
      "labelMail": "Your Email Address",
      "textArea": "Your Message",
      "sendBtn": "Send",
      // contact
      // account
      "login":"Log In",
      "username": "Username",
      "password": "Password",
      "loginBtn": "Log In",
      // account
      // videoPage
      "video": "Videos |",
      "visitYoutube": "Visit To My YouTube Channnel",
      // videoPage
      // pressPage
      "pressPageTitle": "PRESS",
      "readMoreBtn": "Read More",
      "prevPage": "Prev Page",
      "nextPage": "Next Page",
      // pressPage
      // postPage
      "redirectfbArticle": "Read the article on Facebook",
      "writeComment": "write a comment...",
      // postPage
    }
  },
  ka: {
    translation: {
      // header
      "bio": "ბიოგრაფია",
      "press": "პრესა",
      "media": "მედია",
      "photo": "ფოტო",
      "videoNav": "ვიდეო",
      "contact": "კონტაქტი",
      "theme-mode": "ღამის რეჟიმი",
      "account": "ანგარიში",
      // header
      // biography
      "biographyOne": "თინა ბარაბაძე ელექტრო-აკუსტკური მევიოლინე. დავამთავრე თბილისის სახელმწიფო კონსერვატორია ვიოლინოს განხრით, ბაკალავრის ხარისხი. აგრეთვე კურსები გავიარე ბერლინში ჯაზის და ამსტერდამში ელექტრონული მუსიკის განხრით.",
      "biographyTwo": "ამჟამად ვცხოვრობ და ვმოღვაწეობ საქართველოში. ვმუშაობ „POST RED”-ში სოლო მევიოლინედ. ვახმოვანებ მუსიკალურად ფილმებს,რეკლამებსა და ვიდეოთამაშებს.",
      "biographyThird": "აგრეთვე, რამოდენიმე წლის წინ ვთანამშრომლობდი „Silk Factory Studio”-თან. მუსიკალურად გავახმოვანე ფილმები: „შინდისი“, „ცელქი ბავშვები 3“, რეკლამები: „საქართველოს ბანკი - არ გაჩერდე“, „სოლო“, „სფეისი“, ქართული მულტფილმი და სხვა პროექტები.აქტიურიად ვიღებ მონაწილეობას საქართველოში ჩატარებულ სხვადასხვა სახის ღონისძიებებში, როგორც კერძო, ასევე საჯარო.გასულ წელს მოვაწყვე საკუთარი სტუდია და აქტიურად დავიწყე დისტანციური თანამშრომლობა უცხოურ ლეიბლებთან. განვახორციელეთ პროექტები და დღესაც აქტიურად ვაგრძელებთ თანამშრომლობას.",
      "name": "TinaViolin B.",
      // biography
      // footer
      "rights": "ყველა უფლება დაცულია ©2021",
      "privacy": "კონფიდენციალობის პოლიტიკა",
      "terms": "გამოყენების პირობები",
      "contact": "კონტაქტი",
      // footer
      // contact
      "contact_me": "დამეკონტაქტე",
      "facebook": "ფეისბუქი",
      "instagram": "ინსტაგრამი",
      "twitter": "ტვიტერი",
      "youtube": "იუთუბი",
      "soundCloud": "საუნდქლაუდი",
      "follow_tina": "გამომყევი სოციალურ ქსელებში და გაიგე ყველა სიახლე ჩემგან.",
      "labelName": "სახელი და გვარი",
      "labelNumber": "ტელეფონის ნომერი",
      "labelMail": "იმეილის მისამართი",
      "textArea": "შეტყობინების ტექსტი",
      "sendBtn": "გაგზავნა",
      // contact
      // account
      "login":"შესვლა",
      "username": "მომხმარებლის სახელი",
      "password": "მომხმარებლის პაროლი",
      "loginBtn": "შესვლა",
      // account
      // videoPage
      "video": "ვიდეოები |",
      "visitYoutube": "ეწვიეთ ჩემს YouTube არხს",
      // videoPage
      // pressPage
      "pressPageTitle": "პრესა",
      "readMoreBtn": "მეტის წაკითხვა",
      "prevPage": "წინა გვერდი",
      "nextPage": "შემდეგი გვერდი",
      // pressPage
      // postPage
      "redirectfbArticle": "წაიკითხე სტატია ფეისბუქზე",
      "writeComment": "დაწერე კომენტარი...",
      // postPage
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;