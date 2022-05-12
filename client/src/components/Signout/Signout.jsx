import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Signout = () => {
    const history = useHistory();
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
