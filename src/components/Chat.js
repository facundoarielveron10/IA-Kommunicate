import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

export default function KommunicateChat() {
    Kommunicate.init(process.env.APP_ID, {
        automaticChatOpenOnNavigation: true,
        popupWidget: true,
    });

    return <div></div>;
}
