// Den thiyena imports tika
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React walata Suspension hā lazy import karanna
import { lazy, Suspense } from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Loading component eka import karanna
import { LoadingSpinner } from "./components/ui/LoadingSpinner"; 

// WhatsApp button eka aluthenma load karanna ōne nisa, eka kalin thiyenna dunnā.
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

// DEN PAGES TIKA LAZY KARANNA (MEKATHAMAI WADAGATHMA VENASKIRIMA)
// Kalin thibba 'import Index from "./pages/Index";' wage ewa āyin karanna!
const Index = lazy(() => import("./pages/Index"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Videos = lazy(() => import("./pages/Videos"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* DEN OKKOMA ROUTES TIKA SUSPENSE EKAK ATHULE WRAP KARANNA */}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {/* WhatsApp button eka Suspense walin eliyē thiyenne eka mulinma load wenna ōne nisa */}
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;