import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
for (const item of galleryItems) {
  const listElement = document.createElement('li');
  listElement.className = 'gallery_item';
  listElement.innerHTML = `<a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>`;
  galleryList.append(listElement);
}
const showOryginalSize = event => {
  event.preventDefault();
  const oryginalSize = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src=${oryginalSize} width="800" height="600">)}`
  );

  instance.show();
};
console.log(galleryItems);
galleryList.addEventListener('click', showOryginalSize);
