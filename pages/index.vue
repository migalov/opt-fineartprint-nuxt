<template>
  <header>
    <div class="container mx-auto">
      <div class="flex gap-6">
        <UiLogo />
        <div class="ofp-desktop-menus">
          <nav class="menu-row-1 bg-red-300">Мини-меню 1</nav>
          <nav class="user-actions bg-amber-400">Меню юзера</nav>
          <nav class="menu-row-2 bg-lime-300">Мини-меню 2</nav>
        </div>
      </div>
      <nav class="main-menu bg-cyan-400">
        Главное меню
      </nav>
      <code>
        {{ data }}
      </code>
      
    </div>
  </header>
  <main>
    <div class="page bg-indigo-200">
      <div class="container mx-auto">
        <h1>Заголовок страницы</h1>
        <!--<form class="
          ofp-form
          grid
          grid-cols-[2fr_1fr]
        " action="">
          <div class="form-params bg-pink-300">
            <UiCalculationParameter />
          </div>
          <div class="form-show-amounts bg-sky-300">
            <h2>Параметры заказа</h2>
            <ul>
              <li>Формат печати: 500х700 мм</li>
              <li>Красочность печати : 4+4</li>
              <li>Очередность печати : в подбор</li>
              <li>Вид бумаги: Мелованная </li>
              <li>Тип бумаги: Глянцевая</li>
              <li>Плотность бумаги: 150 г/м2</li>
              <li>Ламинация: Глянцевая 1+0</li>
              <li>3D лак: 1+0</li>
              <li>3D фольга: 1+0 золото</li>
              <li>Резка : Не резать</li>
            </ul>
            <label for="">
              <span>Количество полос</span>
              <input type="number" name="" id="">
            </label>
            <label for="">
              <span>Тираж</span>
              <input type="number" name="" id="">
            </label>
            <hr>
            <div>
              <h3>Готовность</h3>
              <p>17.04.24</p>
            </div>
            <div>
              <h2>Итог: </h2>
              <p>3090 ₽</p>
            </div>
            <span>в том числе НДС</span>
            <button type="submit">Оформить заказ</button>
          </div>
        </form>-->
      </div>
      
    </div>
  </main>
</template>

<script lang="ts" setup>
  import qs from 'qs';
  import axios from 'axios';
  const config = useRuntimeConfig(),
        API_DOMAIN = config.public.DOMAIN

  const queryObj = {
    fields: ['slug'],
    populate: {
      items: {
        fields: ['title', 'url']
      }
    },
  }

  const data = axios.get(`${API_DOMAIN}/api/menus/?${qs.stringify(queryObj)}`)
    .then((res) => {
      console.log(res.data);
      return res
    })

  const calculationData = ["500x700", "520x720", "330x482"];
  const calculationData1 = {
    "name": "format_print",
    "title": "Формат печати",
    "buttons": [
      {
        "value": "500x700"
      },
      {
        "value": "520x720"
      },
      {
        "value": "330x482"
      }
    ]
  };

</script>

<style lang="scss">
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1;
  }
  .ofp-desktop-menus {
    grid-template-areas: "menu-1 user-actions" "menu-2 menu-2";
    @apply grid flex-1;
  }
  .menu-row-1 {
    grid-area: menu-1;
  }
  .menu-row-2 {
    grid-area: menu-2;
  }
  .user-actions {
    grid-area: user-actions;
  }
  .ofp-calculator-row {
    display: flex;
    gap: 1rem;
  }
  .ofp-calculator-radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    & input {
      display: inline-flex;
      align-items: center;
      appearance: none;
      border-radius: 8px;
      background-color: var(--gray-color);
      border: 2px solid transparent;
      &::after {
        content: attr(aria-label);
      }
      &:hover {
        background-color: var(--gray-color);
        border: 2px solid var(--primary-color);
      }
      &:checked {
        background-color: var(--white-color);
        border: 2px solid var(--primary-color);
      }
      height: 2.5em;
      padding: 0 1.5em;
    }
  }
</style>