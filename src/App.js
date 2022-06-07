import "./App.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Button from "./button";

const paypalScriptOptions = {
  "client-id":
    "AUZOZrWWVyN7_TzvmZrj8NmXwsh1LyXiyBSJAim8BAhdNBNtwC6Y79TcVV4kKyi69_n4rmDTVD0pwTMT",
  currency: "USD",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PayPalScriptProvider options={paypalScriptOptions}>
          <Button />
        </PayPalScriptProvider>
      </header>
    </div>
  );
}

export default App;
