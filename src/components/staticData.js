// staticDb that will show on every page load by default
import { randEmail, randFullName, randPhoneNumber, randJobTitle } from "@ngneat/falso";
const staticData = {
  perosnalInfo: {
    // name: "Rahul Porel",
    proffession: "Frontend Developer",
    email: randEmail(),
    phone_no: "9999-9999-01",
    website: "www.rahulporel.com",
    name: randFullName(),
  },
};
export default staticData;
