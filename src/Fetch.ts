import axios from "axios";

/* 
  ------
  COOKIE
  ------
*/

export default function setVisitorCookie() {
    const visitorIdCookie = getCookie("visitorId=");
    try {
        const user_id = localStorage.getItem("user_id");
        if (user_id && user_id !== visitorIdCookie) {
            createCookie("visitorId", user_id, 10 * 365 * 24 * 60 * 60);
        } else if (!visitorIdCookie) {
            createCookie("visitorId", createUniqueId(), 10 * 24 * 60 * 60);
        }
    } catch {
        if (!visitorIdCookie) {
            createCookie("visitorId", createUniqueId(), 10 * 24 * 60 * 60);
        }
    }
}

function createCookie(name: string, value: string, expireDays: number) {
    const date = new Date();
    date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// will return format of: 51czetjt0lmh2k24gvbobh, no visitorId=
export function getCookie(s: string) {
    const idCoookie = document.cookie
        .split(";")
        .find((c: string) => c.trim().startsWith(s));
    if (idCoookie) {
        const cookieParts = idCoookie.split("=");
        const cookie = cookieParts[1];
        return cookie;
    }
    return undefined;
}

export function eraseCookie(s: string) {
    document.cookie = s + "=; Max-Age=-99999999;path=/";
}

// Generate a unique ID for each visitor
function createUniqueId() {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
}

/* 
  ------------------
  USER LOCAL STORAGE
  ------------------
*/

export function isLoggedIn() {
    const user_token = localStorage.getItem("user_token");
    if (user_token) {
        return true;
    }
    return false;
}

/* 
  GET USER PROFILE PICTURE
*/
export async function getProfilePicture() {
    const user_token = localStorage.getItem("user_token");
    if (user_token) {
        return await axios.get(
            "https://collegy-server.herokuapp.com/user/get-profile-picture/" +
                getCookie("visitorId=")
        );
    }
}

/* 
  GET USER PROFILE NAME
*/
export function getProfileName() {
    const user_token = localStorage.getItem("user_token");
    if (user_token) {
        axios
            .get(
                "https://collegy-server.herokuapp.com/user/get-name/" +
                    getCookie("visitorId=")
            )
            .then((res: any) => {
                return res.data;
            })
            .catch((err: any) => {
                console.error(err);
            });
    }
    return "";
}

/* 
  SET VARIABLE FOR IF USER HAS COMPLETED QUESTIONAIRE (LOCAL STORAGE)
*/
function setIsQuestionaireCompleted() {
    const questionaireFilled = localStorage.getItem("questionaireFilled");
    if (!questionaireFilled) {
        axios
            .get(
                "https://collegy-server.herokuapp.com/user/get-questionaire/" +
                    getCookie("visitorId=")
            )
            .then((res: any) => {
                if (res.data.length)
                    localStorage.setItem("questionaire_complete", "true");
            })
            .catch((err: any) => {
                console.error(err);
            });
    }
}

export function updateUserInfo() {
    // Get the current value of user_info from local storage
    const user_token = localStorage.getItem("user_token");
    const user_id = localStorage.getItem("user_id");
    if (user_token && user_id) {
        setIsQuestionaireCompleted();
    }
}

export function isQuestionaireCompleted() {
    const questionaireFilled = localStorage.getItem("questionaire_complete");
    return questionaireFilled === "true";
}

export function removeLocalStorage() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_token");
    localStorage.removeItem("questionaire_complete");
    localStorage.clear();
}
