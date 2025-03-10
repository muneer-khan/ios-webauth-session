import { ASWebAuthSession } from '@palainteractive/ios-webauth-session';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    ASWebAuthSession.echo({ value: inputValue })
}
