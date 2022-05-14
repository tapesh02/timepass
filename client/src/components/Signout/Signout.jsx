import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { globalContext } from "../../Context/Context.js";

const Signout = () => {
    const history = useHistory();

    const { setIsSignedIn } = useContext(globalContext);
    const OnSignout = async () => {
        try {
            const res = await fetch("/signout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (res.status === 200) {
                setIsSignedIn(false);
                console.log("logged out at   ", new Date().getTime());
                history.push("/signin", { replace: true });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        OnSignout();
    });
    return (
        <>
            <h1>signout page</h1>
        </>
    );
};

export default Signout;
