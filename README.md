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
├── components/       общая навигация, footer, CTA и небольшие UI-примитивы
├── config/
│   ├── site.ts       домен, бренд, email, язык и год copyright
│   └── routes.ts     все маршруты, названия экранов и SEO-статус
├── content/          тексты и повторяющиеся данные Home, About и Services
├── hooks/            изолированная интерактивная логика
├── App.tsx           выбор страницы для текущего URL
├── HomePage.tsx      композиция секций главной страницы
├── AboutPage.tsx     композиция секций About
└── seo.ts            metadata, canonical, robots и JSON-LD
```

Главные источники правды:

- домен, email или название студии — `src/config/site.ts`;
- URL, title, description и индексируемость — `src/config/routes.ts`;
- услуги — `src/content/services.ts` (меню, главная, footer и service routes используют один массив);
- тексты секций — файлы в `src/content/`;
- общая разметка — `src/components/`.

## Стили

Порядок импортов в `src/main.tsx` важен:

1. `styles.css` — токены, базовая разметка и адаптивность;
2. `home-fidelity.css` — точные desktop-настройки главной;
3. `shared-fidelity.css` — общие уточнения header/footer/CTA;
4. `about-fidelity.css` — точные настройки About.

Обычное изменение начинайте в `styles.css`. Fidelity-файлы меняйте только когда нужно синхронизировать конкретные размеры с Figma; они намеренно перекрывают базовые правила.

## Как добавить страницу

1. Создайте компонент страницы и подключите его в `App.tsx`.
2. Добавьте маршрут и уникальные metadata в `src/config/routes.ts`.
3. Оставьте `indexable: false`, пока страница содержит заглушки или неполный контент.
4. Добавьте понятные внутренние ссылки на страницу.
5. Запустите `npm run validate` и проверьте desktop/mobile в браузере.

Для новой услуги сначала обновите `src/content/services.ts`: route, меню, список услуг и footer синхронизируются автоматически. Отдельный полноценный компонент услуги всё равно нужно подключить в `App.tsx` до включения индексации.

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
