import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
// import "react-loader-spinner/dist/loader/css/react-loader-spinner.css";

// Rinkeby chainId
const supportedChainIds = [4];
const connectors = {
 injected: {},
};

function MyApp({ Component, pageProps }) {
 return (
  // Wrapping ThirdWeb Login... can access authentication in any of the pages or component
  <ThirdwebWeb3Provider
   supportedChainIds={supportedChainIds}
   connectors={connectors}
  >
   <Component {...pageProps} />
  </ThirdwebWeb3Provider>
 );
}

export default MyApp;
