export function getMaxName() {
  const user = window.WebApp?.initDataUnsafe?.user;
  return [user?.first_name, user?.last_name].filter(Boolean).join(" ");
}

export async function getMaxPhone() {
  try {
    const contact = await window.WebApp.requestContact();
    if (!contact?.phone) {
      window.WebApp.close();
      return "";
    }

    return contact.phone;
  } catch (error) {
    console.error("Не удалось получить номер телефона:", error);

    window.WebApp.close();
    return "";
  }
}
