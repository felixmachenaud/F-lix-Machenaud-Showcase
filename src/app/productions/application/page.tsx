import { redirect } from "next/navigation";
import { getProductionCategory } from "@/lib/productions";

/** Ancienne URL « Application » : on conserve le lien pour ne pas casser les favoris. */
export default function ApplicationPage() {
  redirect(getProductionCategory("logiciel").href);
}
