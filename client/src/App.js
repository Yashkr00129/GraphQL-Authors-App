import { ApolloProvider } from "@apollo/client";
import Booklist from "./components/Booklist";
import client from "./graphql/client";
import AddBook from "./components/AddBook";

function App() {
  return (
    <ApolloProvider client={client}>
      <div id={"main"}>
        <h1>Yash's reading list</h1>
        <Booklist />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
