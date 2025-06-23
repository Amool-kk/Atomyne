# 📘 Atomyne
A customized version of [Storybook](https://storybook.js.org/) tailored to support our internal design system, theming, documentation standards, and developer tooling.

---

## 🚀 Features

- 🔧 **Custom Addons** – Integrated support for internal development and UI testing tools.
- 🎨 **Theming Support** – Light/Dark mode toggle with support for custom themes.
- 📐 **Design Tokens** – Built-in display and usage reference of our design tokens.
- 📝 **Rich Documentation** – MDX and CSF-based documentation with live component previews.
- 🧪 **Automated Testing** – Integrated accessibility, visual regression, and interaction testing.
- 🔍 **Enhanced UX** – Better navigation, search, and story organization with custom sidebar and filters.

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-org/custom-storybook.git
cd custom-storybook
npm install
```
---

## 🛠️ Running the Project
To start Storybook in development mode:

```bash
npm run storybook
```
To generate a static build:

```bash
npm run build-storybook
```

---
## 📁 Project Structure

```
.
├── .storybook/              # Main Storybook config files
│   ├── main.ts              # Addons, stories, framework setup
│   ├── preview.ts           # Global parameters, decorators
│   └── manager.ts           # UI and theming config
├── addons/                  # Custom local addons
├── stories/                 # Component stories (CSF + MDX)
├── tokens/                  # Design token JSON/YAML files
├── themes/                  # Light/Dark theme definitions
├── public/                  # Static files served at root
└── README.md                # Project documentation
```
## 🧹 Linting & Formatting
Run ESLint:

```bash
npm run lint
```
Format with Prettier:
```bash
npm run format
```

## 📤 Deployment
To deploy a static version of the Storybook UI:

```bash
npm run build-storybook
```

## 🤝 Contributing
We welcome contributions! To contribute:
* Fork the repository.
* Create a feature branch.
* Make your changes and include tests/stories.
* Commit using conventional commit messages.
* Open a pull request.

## Code Style
* Follow the existing ESLint and Prettier rules.
* Use TypeScript where applicable.
* Keep stories readable and consistent.

## 📚 References
* [Storybook Documentation](https://storybook.js.org/docs)

* [MDX Format Guide](https://storybook.js.org/docs/writing-docs/mdx)

* [Component Story Format (CSF)](https://storybook.js.org/docs/writing-stories/introduction)

# 📄 License
This project is licensed under the MIT License.
```sql
MIT License

Copyright (c) 2025 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, 
publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```


> **_NOTE:_** For any questions or issues, please contact the project maintainer at [amoolkumar10@gmail.com] and [bodhankargajanan99@gmail.com].
