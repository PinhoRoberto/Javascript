document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form.checkValidity()) {
            alert('Formulário Enviado com Sucesso!');
            form.reset();

            // opcional: também mostra mensagem na página
            let msg = document.querySelector('.success-message');
            if (!msg) {
                msg = document.createElement('p');
                msg.className = 'success-message';
                form.parentNode.insertBefore(msg, form.nextSibling);
            }
           // msg.textContent = 'Formulário Enviado com Sucesso!';
        } else {
            alert('Preencha o Formulário!');
            form.reportValidity();
        }
    });
});