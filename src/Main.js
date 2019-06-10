import React from 'react';
import Footer from './Footer';
import './Main.css';
//import './animate.css';

const Main = () => {
  return (
    <div className='mw10 bg-light-gray'>
      <h2 className='animated flipInX pa3 tc f2'>Программы 1С:Предприятие 8</h2>
      <h4 className='ad1 animated flipInX f4 ph6 pb3 tc'>Купить или арендовать? Правильный выбор можно сделать после ответа на вопросы.</h4>
      <div className='main'>
        <section className="ad2 animated bounceInLeft  bg-animate hover-bg-light-yellow tc bg-white-50 dib br2 pa3 ma2 bw1 shadow-3">
          <div className=''>
            <h2 className="f3 mt0 pb3 mh3 dark-red">Покупка</h2>
            <p className="lh-copy measure pb3">
            <div className='b tl ml3 dark-green'>Преимущества: </div>
            <ul className='ml4 tl'>
              <li>база всегда "при себе". доступ только для своих.</li>
              <li>заплатил один раз и пользуйся</li>
              <li>низкая стоимость владения для базовых версий</li>
            </ul>
            <div className='b tl ml3 dark-red'>Недостатки: </div>
            <ul className='ml4 tl'>
              <li>если не соблюдать правила, легко потерять данные</li>
              <li>любое масштабирование связано с доп. затратами</li>
              <li>сопровождение конфигураций дороже.</li>
            </ul>
            </p>
          </div>
        </section>
        <section className="ad3 animated bounceInRight  bg-animate hover-bg-light-yellow tc bg-white-50 dib br2 pa3 ma2 bw1 shadow-3">
          <div className=''>
            <h2 className="f3 mt0 pb3 mh3 dark-blue">Аренда</h2>
            <p className="lh-copy measure pb3">
            <div className='b tl ml5 dark-green'>Преимущества: </div>
            <ul className='ml4 tl'>
              <li>база в надежном месте, безопасность на высоком уровне</li>
              <li>доступ из любой точки планеты. обновления - автоматически!</li>
              <li>легкое масштабирование</li>
            </ul>
            <div className='b tl ml5 dark-red'>Недостатки: </div>
            <ul className='ml4 tl'>
              <li>нет интернета - нет доступа к программе</li>
              <li>заплатил один раз и пользуйся</li>
              <li>не смогли придумать :)))</li>
            </ul>
            </p>
          </div>
        </section>
      </div>  {/*class Main */}
        <h2 className='animated flipInX pa3 pt4 tc f2'>Любое решение для Вашего бизнеса.</h2>
        <h4 className='ad1 animated flipInX f4 ph6 pb3 tc'>Мы поможем Вам выбрать нужный продукт.</h4>
      <div className='main'>  
        <section className="ad2 animated bounceInLeft  bg-animate hover-bg-light-yellow tc bg-white-50 dib br2 pa3 ma2 bw1 shadow-3">
          <div className=''>
            <h2 className="f3 mt0 pb3 mh3">1С Бухгалтерия</h2>
            <div className="pic">
              <img className='logoP' src="./img/logoBP.png" alt="logo"/>
            </div>
            <p className='lh-copy measure pb3 mb3'>
            Бухгалтерский и налоговый учет, сдача отчетности через Интернет – для ИП и организаций: все участки учета, любая система налогообложения (ОСНО, ЕНВД, УСН), любой вид деятельности.
            </p>
            <div className="btns pb3">
              <a className="h-btn ba br1 pa3">Купить</a>
              <a className="ba br1 pa3 grow">Арендовать</a>
            </div>
            
          </div>
        </section>
        <section className="ad2 animated bounceInRight  bg-animate hover-bg-light-yellow tc bg-white-50 dib br2 pa3 ma2 bw1 shadow-3">
          <div className=''>
            <h2 className="f3 mt0 pb3 mh3">1С Зарплата и Управление Персоналом</h2>
            <p className="lh-copy measure pb3 mb3">
            <div className='b tl m5'>Преимущества: </div>
            
            </p>
            <p className='lh-copy measure pb3 mb3'>
            Combine width or max-width values with the center class to create a centered
            container for your content.
            </p>
            <div className="btns pb3">
              <a className="h-btn ba br1 pa3">Купить</a>
              <a className="ba br1 pa3 grow">Арендовать</a>
            </div>
            
          </div>
        </section>
        <section className="ad2 animated bounceInLeft  bg-animate hover-bg-light-yellow tc bg-white-50 dib br2 pa3 ma2 bw1 shadow-3">
          <div className=''>
            <h2 className="f3 mt0 pb3 mh3">Покупка</h2>
            <p className="lh-copy measure pb3 mb3">
            <div className='b tl m5'>Преимущества: </div>
            <ul className='ml4 tl'>
              <li>база всегда "при себе". доступ только для своих.</li>
              <li>заплатил один раз и пользуйся</li>
              <li></li>
            </ul>
            <div className='b tl m5'>Недостатки: </div>
            <ul className='ml4 tl'>
              <li>база всегда "при себе". доступ только для своих.</li>
              <li>заплатил один раз и пользуйся</li>
              <li></li>
            </ul>
            </p>
            <p className='lh-copy measure pb3 mb3'>
            Combine width or max-width values with the center class to create a centered
            container for your content.
            </p>
            <div className="btns pb3">
              <a className="h-btn ba br1 pa3">Купить</a>
              <a className="ba br1 pa3 grow">Арендовать</a>
            </div>
            
          </div>
        </section>
        <section className="ad2 animated bounceInRight  bg-animate hover-bg-light-yellow tc bg-white-50 dib br2 pa3 ma2 bw1 shadow-3">
          <div className=''>
            <h2 className="f3 mt0 pb3 mh3">Покупка</h2>
            <p className="lh-copy measure pb3 mb3">
            <div className='b tl m5'>Преимущества: </div>
            <ul className='ml4 tl'>
              <li>база всегда "при себе". доступ только для своих.</li>
              <li>заплатил один раз и пользуйся</li>
              <li></li>
            </ul>
            <div className='b tl m5'>Недостатки: </div>
            <ul className='ml4 tl'>
              <li>база всегда "при себе". доступ только для своих.</li>
              <li>заплатил один раз и пользуйся</li>
              <li></li>
            </ul>
            </p>
            <p className='lh-copy measure pb3 mb3'>
            Combine width or max-width values with the center class to create a centered
            container for your content.
            </p>
            <div className="btns pb3">
              <a className="h-btn ba br1 pa3">Купить</a>
              <a className="ba br1 pa3 grow">Арендовать</a>
            </div>
            
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default Main;