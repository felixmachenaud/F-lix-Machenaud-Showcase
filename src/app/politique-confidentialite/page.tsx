import { permanentRedirect } from "next/navigation";

/** Ancienne URL : la politique est publiée sous /confidentialite */
export default function PolitiqueConfidentialiteRedirect() {
  permanentRedirect("/confidentialite");
}
