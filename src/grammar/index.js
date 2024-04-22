import React from "react";
import { Link } from "react-router-dom";

function GrammarModule({ activeLesson }) {
  if (activeLesson !== 1) {
    return null; // Don't render if the active lesson is not 1
  }

  return (
    <div class="content">
      <div id="lesson">
        <h2>Падежи в немския език</h2>
        <p>В немския език има 4 падежа:</p>
        <ul>
          <li>
            <strong>Nominativ:</strong> Кой? (за лица) / Какво? (за неодушевени
            подлози)
          </li>
          <li>
            <strong>Akkusativ:</strong> Кого? (за лица) / Какво? (за неодушевени
            допълнения)
          </li>
          <li>
            <strong>Dativ:</strong> Кому? / На кого?
          </li>
          <li>
            <strong>Genitiv:</strong> Изразява притежание
          </li>
        </ul>
        <p>
          Падежите в немския език изразяват отношенията на думите в едно
          изречение една спрямо друга.
        </p>
        <p>Подлогът се открива с въпроса:</p>
        <ul>
          <li>Wer? (Кой?) - за лица</li>
          <li>Was? (Какво?) - за неодушевени подлози</li>
        </ul>
        <p>Прякото допълнение отговаря на въпросите:</p>
        <ul>
          <li>Wen? (Кого?) - за лица</li>
          <li>Was? (Какво?) - за неодушевени допълнения</li>
        </ul>
        <p>Непрякото допълнение се открива с въпроса:</p>
        <ul>
          <li>Wem? (Кому? / На кого?)</li>
        </ul>
        <p>
          Genitiv е четвъртият падеж в немския език и той изразява притежание,
          но е по-специфичен от останалите 3.
        </p>

        <div id="module1">
          <h2>Nominativ</h2>
          <p>
            В този падеж се състоят както подлогът на всяко изречение, така и
            съществителните имена след глаголите{" "}
            <span class="blue">sein; bleiben; werden</span>. В този случай на
            практика съществителните са част от сказуемото, така че в подобни
            изречения може да има две или повече съществителни, които са в
            Nominativ.
          </p>
          <p>Пример: Der Mann ist Lehrer.</p>

          <h2>Упражнение</h2>
          <Link to="/speaking">
            <button class="primary">Практикувай Nominativ</button>
          </Link>
        </div>

        <div id="module2">
          <h2>Akkusativ</h2>

          <p>Това е прякото допълнение:</p>
          <ul>
            <li>
              Der Mutter kauft <span class="blue">einen Ball</span>.
            </li>
          </ul>
          <p>Обстоятелствено пояснение:</p>
          <ul>
            <li>
              Es hat <span class="blue">den ganzen Tag</span> geregnet.
            </li>
          </ul>
          <p>
            Може да изпълнява и обстоятелствено пояснение за място само ако към
            него има глагол, изразяващ движение или посока. Трябва да отговори
            на въпроса <span class="blue">Wohin</span>?
          </p>
          <ul>
            <li>Ich stelle das Buch in das Regal.</li>
          </ul>

          <h2>Упражнение</h2>
          <Link to="/speaking">
            <button class="primary">Практикувай Akkusativ</button>
          </Link>
        </div>

        <div id="module3">
          <h2>Dativ</h2>
          <p>Допълнение, което отговаря на въпроса Wem?(Кому?):</p>
          <ul>
            <li>
              Die Mutter kauft <span class="blue">dem Kind</span> einen Ball.
            </li>
          </ul>
          <p>
            Обстоятелствено пояснение за място, което НЕ изразява движение, а
            изразява точно местоположение:
          </p>
          <ul>
            <li>
              Die Kinder spielen in <span class="blue">dem Hof</span>.
            </li>
          </ul>
          <h2>Упражнение</h2>
          <Link to="/speaking">
            <button class="primary">Практикувай Dativ</button>
          </Link>
        </div>

        <div id="module4">
          <h2>Genitiv</h2>
          <p>
            Този падеж изразява притежание. Той още се използва с точно
            определен тип предлози и глаголи. (wegen, trotz…)
          </p>
          <ul>
            <li>
              die Tasche <span class="blue">der Frau</span> - чантата на жената
            </li>
            <li>
              die Mutter <span class="blue">meines Freundes</span> - майката на
              моя приятел
            </li>
          </ul>
          <h2>Упражнение</h2>
          <Link to="/speaking">
            <button class="primary">Практикувай Genitiv</button>
          </Link>
        </div>
      </div>
      <div>
        <h2>Промяна на определителния член в падежите</h2>
        <table>
          <tr>
            <th>Падеж</th>
            <th>Мъжки род</th>
            <th>Женски род</th>
            <th>Среден род</th>
            <th>Множествено число</th>
          </tr>
          <tr>
            <td class="underline">Nominativ</td>
            <td>
              <span class="blue">der</span> Mann
            </td>
            <td>
              <span class="blue">die</span> Frau
            </td>
            <td>
              <span class="blue">das</span> Kind
            </td>
            <td>
              <span class="blue">die</span> Kinder
            </td>
          </tr>
          <tr>
            <td class="underline">Akkusativ</td>
            <td>
              <span class="blue">den</span> Mann
            </td>
            <td>
              <span class="blue">die</span> Frau
            </td>
            <td>
              <span class="blue">das</span> Kind
            </td>
            <td>
              <span class="blue">die</span> Kinder
            </td>
          </tr>
          <tr>
            <td class="underline">Dativ</td>
            <td>
              <span class="blue">dem</span> Mann
            </td>
            <td>
              <span class="blue">der</span> Frau
            </td>
            <td>
              <span class="blue">dem</span> Kind
            </td>
            <td>
              <span class="blue">den</span> Kinder<span class="blue">n</span>
            </td>
          </tr>
          <tr>
            <td class="underline">Genitiv</td>
            <td>
              <span class="blue">des</span> Mann<span class="blue">es</span>
            </td>
            <td>
              <span class="blue">der</span> Frau
            </td>
            <td>
              <span class="blue">des</span> Kind<span class="blue">es</span>
            </td>
            <td>
              <span class="blue">der</span> Kinder
            </td>
          </tr>
        </table>
      </div>
      <div>
        <h2>Промяна на неопределителния член в падежите</h2>
        <table>
          <tr>
            <th>Падеж</th>
            <th>Мъжки род</th>
            <th>Женски род</th>
            <th>Среден род</th>
            <th>Множествено число</th>
          </tr>
          <tr>
            <td class="underline">Nominativ</td>
            <td>
              <span class="blue">ein</span> Mann
            </td>
            <td>
              <span class="blue">eine</span> Frau
            </td>
            <td>
              <span class="blue">ein</span> Kind
            </td>
            <td>Kinder</td>
          </tr>
          <tr>
            <td class="underline">Akkusativ</td>
            <td>
              <span class="blue">einen</span> Mann
            </td>
            <td>
              <span class="blue">eine</span> Frau
            </td>
            <td>
              <span class="blue">ein</span> Kind
            </td>
            <td>Kinder</td>
          </tr>
          <tr>
            <td class="underline">Dativ</td>
            <td>
              <span class="blue">einem</span> Mann
            </td>
            <td>
              <span class="blue">einer</span> Frau
            </td>
            <td>
              <span class="blue">einem</span> Kind
            </td>
            <td>
              Kinder<span class="blue">n</span>
            </td>
          </tr>
          <tr>
            <td class="underline">Genitiv</td>
            <td>
              <span class="blue">eines</span> Mann<span class="blue">es</span>
            </td>
            <td>
              <span class="blue">einer</span> Frau
            </td>
            <td>
              <span class="blue">eines</span> Kind<span class="blue">es</span>
            </td>
            <td>Kinder</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default GrammarModule;
