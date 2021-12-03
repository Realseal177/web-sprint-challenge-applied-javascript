import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  const divTopics = document.createElement('div');

  divTopics.classList.add('topics');

  for (let i = 0; i < topics.length; i++) {
    const divTabs = document.createElement('div');
    divTabs.classList.add('tab');
    divTabs.textContent = topics[i];
    divTopics.appendChild(divTabs);
  }
  // // <div class="topics">
  // //   <div class="tab">javascript</div>
  // //   <div class="tab">bootstrap</div>
  // //   <div class="tab">technology</div>
  // // </div>
  // //
  return divTopics;
}

const tabsAppender = (selector) => {
  axios.get('http://localhost:5000/api/topics')
    .then(resp => {
      // console.log(resp.data.topics);
      const array = resp.data.topics;
      const entryPoint = document.querySelector(selector)
      entryPoint.appendChild(Tabs(array))
    })
    .catch(error => {
      console.error(error);
    }).finally(() => console.log('It works!!'))
  // // TASK 4
  // // ---------------------
  // // Implement this function which takes a css selector as its only argument.
  // // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // // Append the tabs to the element in the DOM that matches the selector passed to the function.
}

export { Tabs, tabsAppender }
