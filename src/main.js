import "./styles/style.css";
import { createLead } from "./scripts/lead";

const lead = await createLead();
console.log("lead:", lead);
