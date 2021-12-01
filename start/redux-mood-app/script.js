  const angryFace = `(ಠ¿ಠ)`;
  const happyFace = `〷◠‿◠〷`;
  const sadFace = `(⌣́_⌣̀) `;
  const confusedFace = `「(°ヘ°)`;
  
  const INITIAL_STATE = {
    face: '...initial...'
  };
  function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'MOOD_ANGRY':
        return {...state, face: action.payload};
      case 'MOOD_CONFUSED':
        return {...state, face: action.payload};
      case 'MOOD_HAPPY':
        return {...state, face: action.payload};
      case 'MOOD_SAD':
        return {...state, face: action.payload};    
      default:
        return state;
    }
  }

const face = document.getElementById('face');
const store = Redux.createStore(moodReducer);

document.getElementById('angry').addEventListener('click', () => {
  store.dispatch({type: 'MOOD_ANGRY', payload: angryFace});
});
document.getElementById('confused').addEventListener('click', () => {
  store.dispatch({type: 'MOOD_CONFUSED', payload: confusedFace});
});
document.getElementById('happy').addEventListener('click', () => {
  store.dispatch({type: 'MOOD_HAPPY', payload: happyFace});
});
document.getElementById('sad').addEventListener('click', () => {
  store.dispatch({type: 'MOOD_SAD', payload: sadFace});
});
function renderFace() {
  face.innerHTML = store.getState().face;
}
renderFace()
store.subscribe(renderFace)