import { redirect } from "next/navigation";

const RedirectToCatalog = () => {
  redirect("catalog/all");
};



export default RedirectToCatalog;
