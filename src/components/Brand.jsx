import { BRAND_ASSETS } from "@/config/site";

export function Brand({ compact = false, inverse = false }) {
  return (
    <span className={`brand ${compact ? "brand--compact" : ""} ${inverse ? "brand--inverse" : ""}`}>
      <img src={BRAND_ASSETS.logo} alt="" width="32" height="42" />
      <span>Firekeep</span>
    </span>
  );
}
