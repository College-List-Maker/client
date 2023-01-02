import axios from "axios";

export default function setVisitorCookie() {
  const visitorIdCookie = getCookie("visitorId=");
  try {
    const profileId = JSON.parse(localStorage.getItem("user_info") || "").result
      .id;
    if (profileId && profileId !== visitorIdCookie) {
      createCookie("visitorId", profileId, 10 * 365 * 24 * 60 * 60);
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

export function isLoggedIn() {
  const user_info = localStorage.getItem("user_info");
  if (user_info && user_info !== "undefined") {
    return true;
  }
  return false;
}

export function getProfilePicture() {
  const user_info = localStorage.getItem("user_info");
  if (user_info && user_info !== "undefined") {
    return JSON.parse(user_info).result.profilePicture + "";
  }
  return "";
}

/* 
  GET USER PROFILE NAME
*/
export function getProfileName() {
  const user_info = localStorage.getItem("user_info");
  if (user_info && user_info !== "undefined") {
    const first_name =
      JSON.parse(user_info).result.firstName === "NA"
        ? ""
        : JSON.parse(user_info).result.firstName;
    const last_name =
      JSON.parse(user_info).result.lastName === "NA"
        ? ""
        : JSON.parse(user_info).result.lastName;
    return first_name + " " + last_name;
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
        "https://collegy-server.herokuapp.com/college/get-submit-data/" +
          getCookie("visitorId=")
      )
      .then((res: any) => {
        if (res.data.length) localStorage.setItem("questionaireFilled", "true");
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
}

export function updateUserInfo() {
  // Get the current value of user_info from local storage
  const user_info = localStorage.getItem("user_info");
  if (user_info && user_info !== "undefined") {
    let userInfoJSON = JSON.parse(user_info);
    if (userInfoJSON) {
      setIsQuestionaireCompleted();
    }
    localStorage.setItem("user_info", JSON.stringify(userInfoJSON));
  }
}

export function isQuestionaireCompleted() {
  const questionaireFilled = localStorage.getItem("questionaireFilled");
  return questionaireFilled === "true";
}

export function removeLocalStorage() {
  localStorage.removeItem("user_info");
  localStorage.removeItem("questionaireFilled");
}
