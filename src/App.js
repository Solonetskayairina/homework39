    import React from "react";

    import Table from "./components/Table/Table";
    import {animals} from "./data/mockData";

    class App extends React.Component {
        render() {
            return(
              <React.Fragment>
                    <h2>Animals Table</h2>
                    <Table list={animals} />
              </React.Fragment>
            );
        };
    }

    export default App;
