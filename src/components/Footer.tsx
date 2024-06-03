import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { Facebook, Mail, Phone, Instagram } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white text-black">
      <div className="container px-6 pt-6">
        {/* <FooterLinks /> */}
        {/* <div>
          <form action="">
            <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ms-auto">
                <p>
                  <strong>Підпишіться на наші новини</strong>
                </p>
              </div>

              <div className="relative md:mb-6">
                <Input
                  type="email"
                  className="min-h-[auto] w-full rounded border bg-white"
                  id="exampleFormControlInputEmail"
                  placeholder="Email-адреса"
                />
              </div>

              <div className="mb-6 md:me-auto">
                <Button
                  type="submit"
                  className="inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Підписатись
                </Button>
              </div>
            </div>
          </form>
        </div> */}

        <div className="mb-6 border-b pb-6">
          <p>
            Ласкаво просимо на Hive - ваш ідеальний партнер у справах
            нерухомості.
            {/* Ми допомагаємо знаходити найкращі пропозиції щодо
            оренди та продажу нерухомості, забезпечуючи якість, зручність та
            надійність для наших клієнтів. */}
          </p>
        </div>

        <div className="mx-auto w-full ">
          <div className="mb-6 md:grid grid-cols-2 grid-rows-2">
            <div className="row-span-1 mb-6">
              <Link href="/" className="w-10 mx-auto">
                <h5 className="mb-2.5 font-bold uppercase hover:text-blue-600 duration-300">
                  Про нас
                </h5>
              </Link>
              <p>
                Дізнайтеся більше про нашу команду, наші цілі та цінності, які
                нам важливі, а також про наші досягнення та історію розвитку.
              </p>
            </div>
            <div className="row-span-1 mb-6">
              <Link href="/" className="w-10 mx-auto">
                <h5 className="mb-2.5 font-bold uppercase hover:text-blue-600 duration-300">
                  Контакти
                </h5>
              </Link>
              <p>
                Зв{`'`}яжіться з нами безпосередньо через наші контактні дані
                або скористайтеся формою зворотного зв{`'`}язку для найшвидшого
                розв{`'`}язання вашої проблеми або отримання відповіді на ваше
                питання.
              </p>
            </div>
            <div className="row-span-2">
              <Link href="/" className="w-10 mx-auto">
                <h5 className="mb-2.5 font-bold uppercase hover:text-blue-600 duration-300">
                  Продаж
                </h5>
              </Link>
              <p>
                Тут ви знайдете найкращі пропозиції щодо купівлі нерухомості.
                Від квартир до будинків, від комерційних приміщень до земельних
                ділянок — ми пропонуємо широкий вибір об{`'`}єктів нерухомості
                для вашого інвестування або проживання.
              </p>
            </div>
            <div className="row-span-2">
              <Link href="/" className="w-10 mx-auto">
                <h5 className="mb-2.5 font-bold uppercase hover:text-blue-600 duration-300">
                  Оренда
                </h5>
              </Link>
              <p>
                Тут ви знайдете найбільший вибір орендних об{`'`}єктів
                нерухомості — від квартир до офісних приміщень. Незалежно від
                того, чи шукаєте ви на довгострокову чи короткострокову оренду,
                у нас є відмінні варіанти, які задовольняють ваші потреби
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full bg-black/5 p-4 text-center">
        <p className="">
          © 2024 Всі права належать:{" "}
          <Link className="font-semibold" href="/contacts">
            Hive
          </Link>
        </p>
      </div> */}
    </footer>
  );
};

export const FooterLinks = () => {
  return (
    <div className="mb-6 flex justify-center space-x-2">
      <Link href="#!">
        <Button
          size="icon"
          type="button"
          className="rounded-full size-12 drop-shadow bg-white text-black transition duration-150 hover:text-white"
        >
          <Facebook />
        </Button>
      </Link>

      <Link href="#!">
        <Button
          size="icon"
          type="button"
          className="rounded-full size-12 drop-shadow bg-white text-black transition duration-150 hover:text-white"
        >
          <Instagram />
        </Button>
      </Link>

      <Link href="mailto:example@gmail.com">
        <Button
          size="icon"
          type="button"
          className="rounded-full size-12 drop-shadow bg-white text-black transition duration-150 hover:text-white"
        >
          <Mail />
        </Button>
      </Link>

      <Link href="tel:+123-45-56-789">
        <Button
          size="icon"
          type="button"
          className="rounded-full size-12 drop-shadow bg-white text-black transition duration-150 hover:text-white"
        >
          <Phone />
        </Button>
      </Link>
    </div>
  );
};

export default Footer;
