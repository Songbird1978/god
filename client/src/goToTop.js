//GoToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GoToTop() {
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(-10, -10);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    return null;
}
