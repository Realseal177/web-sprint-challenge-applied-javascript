const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  const header = document.createElement('div');
  const spanDate = document.createElement('span');
  const h1Title = document.createElement('h1');
  const spanTemp = document.createElement('span');

  header.appendChild(spanDate);
  header.appendChild(h1Title);
  header.appendChild(spanTemp);

  header.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  spanDate.textContent = date;
  h1Title.textContent = title;
  spanTemp.textContent = temp;

  // //  <div class="header">
  // //    <span class="date">{ date }</span>
  // //    <h1>{ title }</h1>
  // //    <span class="temp">{ temp }</span>
  // //  </div>
  // //
  return header;
}

const headerAppender = (selector) => {
  const newHeader = Header('Lambda Times', '09 November, 2021', '33 Degrees');
  document.querySelector(selector).appendChild(newHeader);
  // // TASK 2
  // // Implement this function taking a css selector as its only argument.
  // // It should create a header using the Header component above, passing arguments of your choosing.
  // // It should append the header to the element in the DOM that matches the given selector.
  // //
}

export { Header, headerAppender }
