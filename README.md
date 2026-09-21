# Triawave Studio

Сайт студии на React, TypeScript и Vite. Домашняя и About-страницы реализованы по Figma; остальные маршруты пока являются честными `noindex`-заглушками и не должны считаться готовыми посадочными страницами.

## Быстрый старт

Нужен Node.js 20.19 или новее.

```bash
npm install
npm run dev
```

Vite покажет локальный адрес, обычно `http://localhost:5173`. Для проверки production-сборки:

```bash
npm run build
npm run preview
```

## Команды

| Команда | Что делает |
| --- | --- |
| `npm run dev` | Запускает локальную разработку с hot reload |
| `npm run check` | Проверяет TypeScript без сборки |
| `npm run build` | TypeScript → client build → SSR build → prerender → SEO-проверка |
| `npm run preview` | Показывает собранный сайт локально |
| `npm run seo:check` | Проверяет metadata, H1, alt, внутренние ссылки, JSON-LD и sitemap в готовой папке `dist` |
| `npm run validate` | Полный quality gate; сейчас эквивалентен `npm run build` |

`seo:check` запускайте после `build`: он проверяет уже созданные HTML-файлы.

## Где что менять

```text
src/
├── app/              App.tsx — выбор страницы; seo.ts — metadata и JSON-LD
├── components/
│   ├── layout/       Shell, Header с MegaMenu, MinimalHeader, ReferralBar, Footer
│   ├── sections/     CTASection — секция, общая для нескольких страниц
│   └── ui/           AppLink, Reveal, SectionHead, MathGrid
├── config/
│   ├── site.ts       домен, бренд, email, язык и год copyright
│   └── routes.ts     все маршруты, названия экранов и SEO-статус
├── content/          services.ts — общие данные услуг
├── pages/
│   ├── home/         HomePage.tsx, content.ts, sections/, components/, hooks/
│   ├── about/        AboutPage.tsx, content.ts, sections/
│   └── placeholder/  PlaceholderPage.tsx
├── styles/           index.css — порядок подключения; base.css и fidelity-файлы
├── main.tsx          клиентский вход и гидратация
└── entry-server.tsx  серверный рендеринг для prerender
```

Главные источники правды:

- домен, email или название студии — `src/config/site.ts`;
- URL, title, description и индексируемость — `src/config/routes.ts`;
- услуги — `src/content/services.ts` (меню, главная, footer и service routes используют один массив);
- тексты секций — `src/pages/home/content.ts` и `src/pages/about/content.ts`;
- общая разметка — `src/components/`.

Страница собирает готовые секции; каждая секция находится в отдельном файле в её `sections/`. Компоненты и хуки, нужные только одной странице, остаются внутри её папки. В общие `components/` выносите то, что используется несколькими страницами. Импорты ведут непосредственно к файлам компонентов, без общего barrel-файла. Отдельная папка компонента нужна, когда у него есть собственные вспомогательные файлы: например, `Header/MegaMenu.tsx` или `MathGrid/MathGrid.css`.

## Стили

`src/main.tsx` подключает `src/styles/index.css`. Порядок импортов внутри него важен:

1. `base.css` — токены, базовая разметка и адаптивность;
2. `home-fidelity.css` — точные desktop-настройки главной;
3. `shared-fidelity.css` — общие уточнения header/footer/CTA;
4. `about-fidelity.css` — точные настройки About.
5. `../components/sections/CTASection.css` — самостоятельные стили CTA: расположение, карточка, типографика и адаптивность. Размеры удобно менять через переменные `--cta-*` в начале файла.

Обычное изменение начинайте в `src/styles/base.css`. Fidelity-файлы меняйте только когда нужно синхронизировать конкретные размеры с Figma; они намеренно перекрывают базовые правила. Общий каскад сохранён централизованно; стили MathGrid находятся рядом с компонентом.

Высота секций, карточек и кнопок определяется содержимым и отступами. Не возвращайте фиксированные `height` или пиксельные строки grid для текстовых блоков. Для изображений и портретов используйте `aspect-ratio`, для текстовых колонок — гибкую сетку и ограничение максимальной ширины. Размеры иконок, линий и фонового canvas задаются отдельно от контентной раскладки.

Строки Process используют `padding-block: 55px`. Хук `src/pages/home/hooks/useProcessProgress.ts` подсвечивает шаги по их реальному положению при прокрутке; секция не закрепляется в контейнере фиксированной высоты. На мобильных экранах и при `prefers-reduced-motion` список остаётся статическим.

## Motion

`src/lib/motion/smoothScroll.ts` управляет единственным Lenis-контроллером для окна: `lerp: 0.11`, нативный touch-scroll, исключения для меню и `[data-lenis-prevent]`. `AppLink` останавливает инерцию перед переходом и прокручивает к якорю с учётом высоты шапки. Настройка `prefers-reduced-motion` отключает контроллер и анимации появления; изменение настройки применяется без перезагрузки.

Motion главной отделён от размеров и типографики: `src/styles/home-motion.css`, `src/pages/home/hooks/useHomeMotion.ts` и общий `MotionHeading`. Заголовки появляются по строкам, карточки — при входе в экран. SSR-контент главной виден и без JavaScript. Для сравнения откройте `/?motion=off`: плавная прокрутка и motion-эффекты выключены до перезагрузки обычного URL.

## Как добавить страницу

1. Создайте `src/pages/<name>/<Name>Page.tsx`, вынесите секции в соседнюю папку `sections/` и подключите страницу в `src/app/App.tsx`.
2. Добавьте маршрут и уникальные metadata в `src/config/routes.ts`.
3. Оставьте `indexable: false`, пока страница содержит заглушки или неполный контент.
4. Добавьте понятные внутренние ссылки на страницу.
5. Запустите `npm run validate` и проверьте desktop/mobile в браузере.

Для новой услуги сначала обновите `src/content/services.ts`: route, меню, список услуг и footer синхронизируются автоматически. Отдельный полноценный компонент услуги всё равно нужно подключить в `src/app/App.tsx` до включения индексации.

## SEO и рендеринг

Production build создаёт отдельный готовый HTML для каждого известного маршрута. Это позволяет поисковому роботу увидеть H1 и основной контент без выполнения JavaScript. `scripts/prerender.mjs` также создаёт актуальные `robots.txt` и `sitemap.xml`; `scripts/seo-check.mjs` валидирует результат.

При смене production-домена достаточно обновить `SITE.url` в `src/config/site.ts`, затем пересобрать проект. Также синхронизируйте fallback-файлы в `public/robots.txt` и `public/sitemap.xml`, которые обслуживаются Vite во время разработки.

## Что пока является заглушкой

- Work, Contact, service pages и legal pages имеют только экран-заглушку и поэтому закрыты от индексации.
- Портреты команды и отзывы используют placeholder-контент из дизайна.
- Социальные сети в footer показаны текстом: реальные URL не предоставлены.
- Не добавляйте Review schema, адрес, цены или факты о компании без подтверждённых данных.

## Перед передачей изменений

```bash
npm run validate
```

После этого вручную проверьте минимум `/` и `/about` на ширинах 390 px и 1440 px: меню, FAQ, стрелки отзывов, scroll-процесс и отсутствие горизонтального скролла. Не коммитьте `dist`, `dist-ssr` и QA-скриншоты, если команда заранее не договорилась хранить build-артефакты в репозитории.
