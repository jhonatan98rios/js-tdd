## Getting Started

### Installation

For now, you can clone this repo or use the [slush generator](https://github.com/lyef/slush-lyef-react). We are creating a [CLI](https://github.com/lyef/lyef-react-cli) also.

**You’ll need to have Node >= 4 on your machine.** We recommend to use Node >= 6 and npm >= 3 for faster installation speed and better disk usage.

### Folders and Files

```sh
├── css
│   └── main.css
├── src
│   └── Main.js
├── stories
│   └── Main.js
├── storybook
│   ├── config.js
│   └── webpack.config.js
├── tests
│   ├── helpers
│   │   └── setup.js
│   └── specs
│       └── Main.spec.js
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .npmignore
├── .travis.yml
├── CONTRIBUTING.md
├── LICENSE.md
├── Readme.md
└── package.json
```

### Writing your code

```js
console.log("Código JS aqui")
```

### Running tests

![Terminal running tests](images/tests.gif)

We encourage everyone to write tests to your components, this can help us to create a more maintainable and free of bugs component. To do that, we create 3 tasks:

- `npm test`: run your tests in a single-run mode.
- `npm run test:tdd`: run and keep watching your test files.
- `npm run test:coverage`: prints and create html files by istanbul coverage.

## Contributing

We'd love to have your helping hand on our lyef-react-component! See [CONTRIBUTING.md](https://github.com/lyef/lyef-react-component/blob/master/CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## License

[MIT License](https://github.com/lyef/lyef-react-component/blob/master/LICENSE.md) @ [lyef](https://lyef.github.io)