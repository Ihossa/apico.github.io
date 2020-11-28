import Vuex from 'vuex'
import firebase from "firebase/app";

const createStore = () => {
  return new Vuex.Store({
    state: {
        user: '',
        error: null,
        posts: [],
        likes: []
    },

    getters: {
        user(state) {
            return state.user
        },
        error(state) {
            return state.error
        },
        posts(state) {
            return state.posts
        },
        likes(state) {
          return state.likes
      }
    },
    mutations: {
          setError(state, error) {
            state.error = error;
          },
          clearLikes(state) {
            state.likes = [];
          },
          clearError(state) {
            state.error = null;
          },
          setPosts(state, data) {
            state.posts.push(data)
          },
          setSearchPosts(state, data) {
            state.posts = data;
          },
          setLikes(state, data) {
              state.likes.push(data)
          },
          clearPosts(state) {
              state.posts = []
          }
    },

    actions: {
        async login({ dispatch, commit }, { email, password }) {
            try {
              await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (e) {
              commit("setError", e);
              throw e;
            }
          },

          async getLikePost({ commit}, idUser){
            try{
              commit('clearLikes')

              await firebase.database().ref(`/users/${idUser}/likePosts`).on('value', (snapshot) => {
                snapshot.forEach(function(childSnapshot) {
                    const childrenDate = childSnapshot.val()
                    commit('setLikes', childrenDate)
                })
              })
            } catch (e) {
              commit("setError", e);
              throw e;
            }
          },
          
          async setLikePost({dispatch, commit}, {idUser, idPost}){
            try{
              await firebase.database().ref(`/users/${idUser}/likePosts/${idPost}`).set(idPost)
            } catch (e) {
              commit("setError", e);
              throw e;
            }
          },

          async removeLikePost({dispatch, commit}, {idUser, idPost}){
            try{
              let mPostReference = await firebase.database().ref(`/users/${idUser}/likePosts/${idPost}`).remove();
            } catch (e) {
              commit("setError", e);
              throw e;
            }
          },

          async register({ dispatch, commit }, { email, password, name }) {
            try {
              await firebase.auth().createUserWithEmailAndPassword(email, password);
              const uid = await dispatch("getUid");
              await firebase
                .database()
                .ref(`/users/${uid}/info`)
                .set({
                  name
                });
            } catch (e) {
              commit("setError", e);
              throw e;
            }
          },
          async logout({ commit }) {
            await firebase.auth().signOut();
            commit("clearInfo");
          },

          getUid() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
          },

          async addPost({commit}, post) {
            await firebase.database().ref('/posts').push(post)
            commit('setPosts', post)
          },

          async getPosts({commit}) {
            commit('clearPosts')
              await firebase.database().ref('/posts').on('value', (snapshot) => {
                snapshot.forEach(function(childSnapshot) {
                    const childrenDate = childSnapshot.val()
                    commit('setPosts', childrenDate)
                })
              })
          }
    }
  })
}

export default createStore