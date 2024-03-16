// staticDb that will show on every page load by default
import {
  randEmail,
  randFullName,
  randPhoneNumber,
  randJobTitle,
  randUrl,
} from "@ngneat/falso";
const staticData = {
  perosnalInfo: {
    name: randFullName(),

    proffession: randJobTitle(),
    email: randEmail(),
    phone_no: randPhoneNumber(),
    website: randUrl(),
  },
};
export default staticData;
