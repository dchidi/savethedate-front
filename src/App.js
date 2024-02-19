import { CardStack } from "./components/common/cards";
import { PageLayout } from "./components/layout";
import { page1, page2 } from "./content/pages";

function App() {
  return (
    <PageLayout>
      <CardStack pages={[page1, page2]} />
    </PageLayout>
  );
}

export default App;
