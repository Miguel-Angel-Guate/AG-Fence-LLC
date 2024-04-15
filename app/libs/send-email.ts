// Using JavaScript for example; adjust accordingly for TypeScript by specifying types
export const onSubmitAgForm = async (data:any, onSuccess:any, onError:any) => {
    try {
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        if (response.ok) {
            onSuccess('Message sent successfully!'); // Invoke success callback
        } else {
            onError(`Failed to send message: ${responseData.error}`); // Invoke error callback
        }
    } catch (error) {
        onError('Failed to send message. Please try again later.'); // Invoke error callback
    }
};


