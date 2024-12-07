import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.init";


export const authContext = createContext(null);



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(() => false);


    const googleProvider = new GoogleAuthProvider();


    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    const profileUpdate = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                // console.log(currentUser);
                setUser(currentUser);
                setLoading(false);

            }
            else {
                // console.log('No one is logged In')
                setLoading(false);
            }

        })
        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = {
        handleRegister,
        handleLogin,
        logOut,
        handleGoogleLogin,
        user,
        setUser,
        loading,
        setLoading,
        profileUpdate,
        isDarkMode,
        setIsDarkMode


    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}