import React, { createRef } from "react";

import Image from "./Image";

class Content extends React.Component {
  constructor() {
    super();
    this.state = { counter: 1 };
    this.programmingRef = createRef();
    this.sportsRef = createRef();
    this.lastElementRef = createRef();
  }

  changeProgrammingColor = () => {
    const element = this.programmingRef.current;
    const currentColor = element.style.backgroundColor;

    if (currentColor === "rgb(237, 227, 215)") {
      element.style.backgroundColor = "lightblue";
      element.style.color = "purple";
    } else {
      element.style.backgroundColor = "rgb(237, 227, 215)";
      element.style.color = "black";
    }
  };

  changeSportColor = () => {
    const element = this.sportsRef.current;
    const currentColor = element.style.backgroundColor;

    if (currentColor === "rgb(237, 227, 215)") {
      element.style.backgroundColor = "yellow";
      element.style.color = "darkblue";
    } else {
      element.style.backgroundColor = "rgb(237, 227, 215)";
      element.style.color = "black";
    }
  };

  addImage() {
    console.log(this.state.counter);
    this.setState({ counter: this.state.counter + 1 });
  }

  deleteImage() {
    if (this.state.counter === 0) return;
    this.setState({ counter: this.state.counter - 1 });
  }

  resizeImg(action) {
    const existingImage = this.lastElementRef?.current;
    if (!existingImage) return;

    const currentWidth = existingImage.width;

    if (action === "increase") {
      existingImage.setAttribute("width", currentWidth + 100);
    } else if (action === "decrease" && currentWidth >= 150) {
      existingImage.setAttribute("width", currentWidth - 100);
    }
  }

  render() {
    return (
      <main>
        <div className="personal-info">
          <div class="birthday">
            <p>Місце народження: 21.10.2004, м.Донецьк</p>
          </div>
          <div class="secondary-education">
            <p>Освіта: Школа №45 м.Донецьк</p>
          </div>
          <div class="higher-education" style={{ marginLeft: "5%" }}>
            <p>
              Національний технічний університет України "Київський
              політехнічний інститут імені Ігоря Сікорського"
            </p>
          </div>
        </div>

        <div class="hobbies">
          <p>Хоббі:</p>
          <ul>
            <li
              ref={this.programmingRef}
              onClick={this.changeProgrammingColor}
              style={{ backgroundColor: "rgb(237, 227, 215)" }}
              class="colouredElements"
            >
              Програмування
            </li>
            <li
              class="colouredElements"
              ref={this.sportsRef}
              style={{ backgroundColor: "rgb(237, 227, 215)" }}
              onClick={this.changeSportColor}
            >
              Спорт
            </li>
            <li>Автомобілі</li>
          </ul>
        </div>
        <div class="books">
          <p>Улюблені книги:</p>
          <ol>
            <li>Володар перснів</li>
            <li>Маленький принц</li>
            <li>Відьмак</li>
          </ol>
        </div>
        <div class="city">
          <p>
            Берлін - столиця та найбільше місто Німеччини, яке вражає своєю
            багатою історією та сучасними досягненнями. Місто розташоване на
            берегах річки Спрєї і славиться своєю архітектурною різноманітністю,
            від історичних пам'ятників до сучасних хмарочосів.
          </p>
        </div>

        {Array(this.state.counter)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              index={index}
              counter={this.state.counter}
              lastElementRef={this.lastElementRef}
            />
          ))}
        <div className="buttons">
          <button class="button" onClick={() => this.addImage()}>
            Додати
          </button>
          <button class="button" onClick={() => this.resizeImg("increase")}>
            Збільшити
          </button>
          <button class="button" onClick={() => this.resizeImg("decrease")}>
            Зменшити
          </button>
          <button class="button" onClick={() => this.deleteImage()}>
            Видалити
          </button>
        </div>
      </main>
    );
  }
}

export default Content;
