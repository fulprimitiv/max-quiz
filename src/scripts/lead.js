import { getMaxName, getMaxPhone } from "./max";

export async function createLead() {
  const name = getMaxName();
  const phone = await getMaxPhone();

  return {
    name,
    phone,
  };
}
