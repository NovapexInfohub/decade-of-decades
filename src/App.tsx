import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Philosophy from "./pages/Philosophy";
import WorkWithMe from "./pages/WorkWithMe";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/work-with-me" element={<WorkWithMe />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/clients" element={<Clients />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ThemeSwitcher />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
