import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth();

    const signInWithGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .finally(() => setLoading(false));
    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setLoading(false));
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
    }, []);
    return {
        user,
        logOut,
        signInWithGoogle
    };
};
export default useFirebase;