import { createRequire as VPV_createRequire } from "node:module";
import { fileURLToPath as VPV_fileURLToPath } from "node:url";
import { dirname as VPV_dirname } from "node:path";
const require = VPV_createRequire(import.meta.url);
const __filename = VPV_fileURLToPath(import.meta.url);
const __dirname = VPV_dirname(__filename);


// api/addSubscriber.js
var addMember = async (email) => {
  const response = await fetch("/api/mailchimp/members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_MAILCHIMP_API_KEY}`
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed"
    })
  });
  return await response.json();
};
export {
  addMember
};
