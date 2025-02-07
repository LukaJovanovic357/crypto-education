import { HfInference } from '@huggingface/inference';

const client = new HfInference(import.meta.env.VITE_HUGGING_FACE_API);

const getAIResponse = async (userMessage: string) => {
    try {
        const response = await client.chatCompletion({
            model: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B',
            messages: [
                {
                    role: 'user',
                    content: userMessage
                }
            ],
            provider: 'hf-inference',
            max_tokens: 500
        });

        let messageContent =
            response.choices[0].message.content ||
            `Sorry, i didn't quite catch that.`;
        messageContent = messageContent
            .replace(/<think>/g, '')
            .replace(/<\/think>/g, '');
        return messageContent || `Sorry, i didn't quite get that`;
    } catch (error) {
        console.error('Error fetching AI response:', error);
        return 'Oops! There was an error fetching the AI response.';
    }
};

export { getAIResponse };
