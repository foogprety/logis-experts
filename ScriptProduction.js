
                import Chatbot from "https://cdn.jsdelivr.net/gh/foogprety/FlowiseChatEmbed@v0.1.2/dist/web.js"
                Chatbot.init ({
                    chatflowid: "9f942a31-9c22-4f85-bce3-9bb3b4a6c7e8",
                    apiHost: "https://flowise-docker-67rq.onrender.com",
                    chatflowConfig: {
                        // topK: 2
                     
                    },
  
                    theme: {
                    button: {
                        backgroundColor: "rgb(20 73 137)",
                        right: 20,
                        bottom: 20,
                        size: "large",
                        iconColor: "white",
                        customIconSrc: "https://djibconsultantti.com/chatbot_logis_expert/chatbotmouving.gif",
                    },
                    chatWindow: {
                        welcomeMessage: "<p>Bienvenue chez Logis-Experts ! En tant qu'assistant virtuel, je suis là pour vous guider dans la recherche de votre logement idéal et pour répondre à toutes vos interrogations concernant nos biens.<br /><br /> <br /></p>",
                        backgroundColor: "#ffffff",
                        width: 400,
                        fontSize: 15,
                        title: "Votre Assistant IA",
                        poweredByTextColor: "#303235",
                        botMessage: {
                            backgroundColor: "#f7f8ff",
                            border: "1px solid",
                            textColor: "#303235",
                            showAvatar: true,
                             avatarSrc: "logo-color-256.png",
                        },
                        userMessage: {
                            backgroundColor: "#3B81F6",
                            textColor: "#ffffff",

                            showAvatar: true,
                            avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                        },
                        textInput: {
                            placeholder: "Taper votre message ici...",
                            backgroundColor: "#ffffff",
                            textColor: "#303235",
                            sendButtonColor: "#3B81F6",
                        }
                    }
                }
            
            });