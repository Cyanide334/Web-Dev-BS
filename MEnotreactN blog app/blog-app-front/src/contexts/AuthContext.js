import React, { useContext, useState, useEffect } from "react"
import { axios } from 'axios';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(false)

  async function signup(name,email, password) {
      axios
          .post('http://localhost:8080')
          .then(({ data }) => {
              console.log(data);
          })
          .catch(({ response }) => {});
    let response = await axios.post('http://localhost:8080/users/signup', {
        name,
        email,
        password,
    });
    console.log(response)
    if(response.status===200){
      onAuthStateChanged(response.user);
    }
    return response;
  }

  // function login(email, password) {
  //   return signInWithEmailAndPassword(email, password)
  // }

  // function logout() {
  //   return signOut()
  // }


 const onAuthStateChanged=(user) => {
     setCurrentUser(user);
     setLoading(false);
 }

  const value = {
    currentUser,
    signup,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
