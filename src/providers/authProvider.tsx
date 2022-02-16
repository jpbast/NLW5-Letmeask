import React from 'react'
import { User } from '../types/backend'
import { firebase } from '../services/firebase'
import router from 'next/router'

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (path?: string) => void;
  logout: () => void
}

const AuthContext = React.createContext({} as AuthContextType)

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null)

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser({
          name: user.displayName,
          email: user.email,
          id: user.uid,
          picture: user.photoURL 
        })
      } else {
        if (router.pathname.includes('new'))
          router.push('/')
      }
    })
  }, [])

  const login = async (path?: string) => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(async (res) => {
        const token = await res.user.getIdToken()
        document.cookie = `token=${token}; path=/; expires=Fri, 01 Jan 2038 00:00:01 UTC`
        setUser({
          name: res.user.displayName,
          picture: res.user.photoURL,
          email: res.user.email,
          id: res.user.uid
        })
        if (path) router.push(path)
      })
      .catch((err) => console.log(err))
  } 

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)

export default AuthProvider