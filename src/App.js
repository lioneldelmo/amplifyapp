import logo from "./logo.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
    return (
        <div className="App">
            <Card>
                <img src={logo} className="App-logo" alt="logo" />
                <Heading level={1}>We now have Auth! testing version 3</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
        </div>
    );
}

export default withAuthenticator(App);
