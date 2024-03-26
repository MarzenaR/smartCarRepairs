import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { mainTheme } from "../globalStyles/themes/mainTheme";
import LoggedTemplate from "../templates/LoggedTemplate";
import UnloggedTemplate from "../templates/UnloggedTemplate";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import { usersCollection } from "../firebase/firestoreUtils";
import { setCurrentUser } from "../redux/actions";
import Footer from "../components/navigations/Footer";

const Root = () => {
  const [isLoadDone, setIsLoadDone] = useState(false); //useState -local state
  const { currentUser } = useSelector((state) => state); //useSelector gets state info from redux so global state
  const dispatch = useDispatch(); //dispatch starts actions from redux
  useEffect(() => {
    //this method is from firebase documentation and our element-parametr we call user:
    auth.onAuthStateChanged((user) => {
      if (user) {
        usersCollection
          .doc(user.uid) //uid is from firebase auth we can call it userid etc too
          .get()
          .then((res) => {
            setIsLoadDone(true); //we set state on true that it has finished getting user info from firebase
            dispatch(
              //now we start action setCurrentUser, dispatch is imported from redux
              setCurrentUser({
                userId: user.uid, //to box userId I put our current user's ID
                ...res.data(), //destruct response so all data which was shown
              })
            );
          })
          .catch((err) => console.log(err));
      } else {
        dispatch(setCurrentUser(null)); //if logged user not found
        setIsLoadDone(true); //to finish loading
      }
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <BrowserRouter>
        {/* No routes matched location "/users" - we get this warning because it check if user is logged quicker then logging user so it looks like user is unlogged */}
        {isLoadDone && (
          <>
            {currentUser ? (
              <>
                <LoggedTemplate />
                <Footer />
              </>
            ) : (
              <UnloggedTemplate />
            )}
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Root;
