import React from "react";
import { Link } from "react-router-dom";

function GrammarModule({ activeLesson }) {
  if (activeLesson !== 1) {
    return null; // Don't render if the active lesson is not 1
  }

  return (
    <div class="content">
      <div id="lesson">
        <h2>Управление на предлози за място</h2>
        <p>Предлозите за място управляват два падежа:</p>
        <ul>
          <li>
            Ако глаголът в изречението изразява движение с въпроса "wohin?" след
            предлога за място, обектът стои в Akkusativ (Аккузатив).
          </li>
          <li>
            Ако глаголът изразява действие без движение (покой или движение без
            посока), обектът стои в Dativ (Датив).
          </li>
        </ul>

        <div id="module1">
          <h2>Аккузатив (Akkusativ) Примери:</h2>
          <p>Аз отивам в къщата. (Wohin? - в къщата) - Ich gehe in das Haus.</p>
          <p>Влизам в парка. (Wohin? - в парка) - Ich gehe in den Park.</p>
          <p>
            Ида на магазина. (Wohin? - на магазина) - Ich gehe in den Laden.
          </p>

          <h2>Упражнение</h2>
          <Link to="/speaking">
            <button class="primary">Практикувай Akkusativ</button>
          </Link>
        </div>

        <div id="module2">
          <h2>Датив (Dativ) Примери:</h2>
          <p>Аз работя в къщи. (Wo? - в къщи) - Ich arbeite im Haus.</p>
          <p>Тя стои в градината. (Wo? - в градината) - Sie steht im Garten.</p>
          <p>
            Мечката е в пещерата. (Wo? - в пещерата) - Der Bär ist in der Höhle.
          </p>

          <h2>Упражнение</h2>
          <Link to="/speaking">
            <button class="primary">Практикувай Dativ</button>
          </Link>
        </div>

        <div id="module4">
          <h2>Датив (Dativ) Akkusativ (Akkusativ)</h2>
          <p>in + dem = im in + das = ins</p>
          <p>von + dem = vom an + das = ans</p>
          <p>zu + dem = zum auf + das = aufs</p>
          <p>zu + der = zur</p>
          <p>an + dem = am</p>
        </div>
      </div>
    </div>
  );
}

export default GrammarModule;
