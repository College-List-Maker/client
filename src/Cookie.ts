export default function setVisitorCookie(name: string, expireDays: number) {
  const visitorIdCookie = getCookie("visitorId=");
  if (!visitorIdCookie) {
    createCookie("visitorId", createUniqueId(), 7);
  }
}

function createCookie(name: string, value: string, expireDays: number) {
  const date = new Date();
  date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// will return format of: visitorId=51czetjt0lmh2k24gvbobh
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

// Generate a unique ID for each visitor
function createUniqueId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
