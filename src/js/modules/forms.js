const forms = () => {
    const form = document.querySelectorAll('form'),
          textArea = document.querySelector('textarea'),
          inputs = document.querySelectorAll('input');
    
    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся...',
        failure: 'Что-то пошло не так...'
    };

    const path = {
        question: 'question.php'
    };

    const postDate = async(url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let resoult = await fetch(url, {
            method: "POST",
            body: data
        });
        return await resoult.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            setTimeout(() => {
                input.value = '';
                textArea.value = '';
            }, 500);
        });
    };

    // inputs.forEach(input => {
    //     if (input.value == "") {
    //         form.forEach(item => {
    //             item.addEventListener('submit', (e) => {
    //                 e.stopPropagation();
    //                 input.style.borderColor = 'red';
    //             });
    //         });
            
    //     } 
    // });
    

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            item.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        console.log(item);
                        item.lastElementChild.focus();
                    }
                });
        


            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postDate(path.question, formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                });
        });
    });

};

export default forms;