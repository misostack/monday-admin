window.Prism = window.Prism || {};
window.Prism.manual = true;

const MondayAdmin = {
  init: () => {
    console.log('Monday Admin App Global Script Init!');
  }
};

// const _TRANSLATE = (str) => {
//   return str;
// }

document.addEventListener('DOMContentLoaded', function(event) {
  //the event occurred
  MondayAdmin.init();
  Prism.highlightAll();
})
