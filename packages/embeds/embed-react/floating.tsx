/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
import { useEffect } from "react";
import * as React from "react";
import ReactDom from "react-dom";

import { getCalApi } from "./src/index";

function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi("https://cal-dot-com-ai.vercel.app/embed/embed.js");
      cal("floatingButton", { calLink: "teampro/abc", calOrigin: "https://cal-dot-com-ai.vercel.app" });
      cal("ui", { styles: { branding: { brandColor: "#000000" } }, hideEventTypeDetails: false });
    })();
  }, []);
  return null;
}

ReactDom.render(<App />, document.getElementById("root"));
