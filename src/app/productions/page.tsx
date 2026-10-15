import { redirect } from "next/navigation";
import { DEFAULT_PRODUCTION_HREF } from "@/lib/productions";

export default function ProductionsPage() {
  redirect(DEFAULT_PRODUCTION_HREF);
}
