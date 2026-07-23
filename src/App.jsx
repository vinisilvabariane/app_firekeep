import { DownloadSection } from "@/sections/DownloadSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProductSection } from "@/sections/ProductSection";
import { SiteFooter } from "@/sections/SiteFooter";
import { SiteHeader } from "@/sections/SiteHeader";
import { UpdatesSection } from "@/sections/UpdatesSection";
import { ValueSection } from "@/sections/ValueSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <ProductSection />
      <DownloadSection />
    </>
  );
}

function UpdatesPage() {
  return <UpdatesSection standalone />;
}

export default function App() {
  const isUpdatesPage = window.location.pathname === "/atualizacoes";

  return (
    <div className={isUpdatesPage ? "site-shell site-shell--updates" : "site-shell"}>
      <SiteHeader solid={isUpdatesPage} />
      <main>
        {isUpdatesPage ? <UpdatesPage /> : <HomePage />}
      </main>
      <SiteFooter />
    </div>
  );
}
