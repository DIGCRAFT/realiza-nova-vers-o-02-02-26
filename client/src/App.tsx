import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import LandingPage from "./pages/LandingPage";
import LandingPage4Us from "./pages/LandingPage4Us";
import ThankYou from "./pages/ThankYou";
import Guide from "./pages/Guide";
import GuidePerffeta from "./pages/GuidePerffeta";
import OrcamentoInterativo from "./pages/OrcamentoInterativo";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <Switch>
      {/* Rotas Standalone (sem Layout padrão) */}
      <Route path="/landing" component={LandingPage} />
      <Route path="/lp-4us" component={LandingPage4Us} />
      {/*<Route path="/orcamento" component={OrcamentoInterativo} />*/}
      <Route path="/obrigado" component={ThankYou} />
      
      {/* Rotas com Layout */}
      <Route path="/orcamento">
        <Layout>
          <OrcamentoInterativo />
        </Layout>
      </Route>

      <Route path="/sobre">
        <Layout>
          <Sobre />
        </Layout>
      </Route>

      <Route path="/projetos">
        <Layout>
          <Projetos />
        </Layout>
      </Route>

      <Route path="/contato">
        <Layout>
          <Contato />
        </Layout>
      </Route>

      <Route path="/guia-esquadrias">
        <Layout>
          <Guide />
        </Layout>
      </Route>

      <Route path="/guia-perffeta">
        <Layout>
          <GuidePerffeta />
        </Layout>
      </Route>
      
      <Route path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>

      {/* Fallback 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
