function getComponent() {
    const element = document.createElement('div');
    return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
    })
}

//т.к import() возвращает Promise можно использовать async/await

// async function getComponent() {
//     const element = document.createElement('div');
//     const { default: _ } = await import('lodash');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//  }

getComponent().then((component) => {
    document.body.appendChild(component);
});