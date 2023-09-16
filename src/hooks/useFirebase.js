import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useFirebase = () => {
    // States
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // To ridirect to the intended page
    const location = useLocation();
    const navigate = useNavigate();
    
    //Provider
    const googleProvider = new GoogleAuthProvider();

    // Creating User With email and password
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                //Signed in
                const user = userCredential.user;
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // Sign-in with email and password
    const userSignIn = (auth, email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                //Signed-in
                const user = userCredential.user;
                setUser(user)
                setError('')
                // Redirect to intended page
                if(location.state?.from) {
                    navigate(location.state?.from)
                }
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Currently Signed-in user
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])

    // Sign-out
    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
    }

    // Google Sign-in 
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
                // Redirect to intended page
                if(location.state?.from){
                    navigate(location.state?.from)
                }
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return { createUser, user, error, setError, userSignIn, userSignOut, googleSignIn };
}

export default useFirebase;