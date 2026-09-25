import "./styles/style.css";

function getUserName() {
  const user = window.WebApp?.initDataUnsafe?.user;
  return [user?.first_name, user?.last_name].filter(Boolean).join(" ");
}

const name = getUserName();
console.log("name:", name);
