import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  notes: [],
  activeNote: {}
}


const mutations = {
  //TODO: All posible mutations 

  ADD_NOTE (state) {
    const newNote = {
      text: 'New Note',
      favorite: false
    }

    // only mutator can mutate the state
    state.notes.push(newNote);
    state.activeNote = NewNote;
  },

  EDIT_NOTE(state, text) {
    state.activeNote.text = text;
  },
  DELETE_NOTE(state, text) {
    state.notes.$remove(state.activeNote);
    state.activeNote = state.notes[0];
  },
  TOGGLE_FAVORITE(state, note) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },  
  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
