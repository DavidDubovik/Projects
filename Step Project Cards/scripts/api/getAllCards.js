export const getAllCards = async () => {
    try {
        const answer = await fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => response.json());
        return answer;
    } catch (err) {
        console.error(err);
    }
};