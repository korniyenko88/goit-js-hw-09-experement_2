const createForm = () => {
    return `
    <form class="feedback-form" autocomplete="off">
        <label>
            Email
            <input type="email" name="email" autofocus />
        </label>
        <label>
            Message
            <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
    </form>`;
};

const formAdd = document.querySelector('.task-form');
formAdd.innerHTML = createForm();

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.email.value;
    const message = form.message.value;

    console.log('Email:', email);
    console.log('Message:', message);
    console.log(window.localStorage);




   
});