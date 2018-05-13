// fetch ({ store, redirect }) {
//     if (!store.state.authUser) {
//       return redirect('/')
//     }
//   }

  export default function({store, redirect}) {
    if(!store.state.authUser) {
      return redirect('/');
    }
  }
