import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds } from './js/cat-api';

const selectEl = document.querySelector('.breed-select');

fetchBreeds().then(data => {
  console.log(data);
  const markup = data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  selectEl.innerHTML = markup;
  new SlimSelect({ select: selectEl });
});
