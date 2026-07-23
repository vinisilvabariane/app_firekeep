import { Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";

export function DownloadLink({ className, compact = false, inverse = false }) {
  return (
    <a
      className={cn(
        buttonVariants({ size: compact ? "default" : "lg" }),
        "download-link",
        inverse && "download-link--inverse",
        className,
      )}
      href={SITE_CONFIG.downloadUrl}
      download
    >
      <Download aria-hidden="true" />
      {compact ? "Baixar" : "Baixar para Windows"}
    </a>
  );
}
