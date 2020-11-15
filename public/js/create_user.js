async function postUser(body) {
  return fetch('/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

document
  .getElementById('user-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target || event.srcElement;
    var formData = new FormData(form);

    if (formData.get('password') == formData.get('confirmation_password')) {
      postUser(Object.fromEntries(formData)).then((response) => {
        if (response.status == 200) {
          window.location.href =
            '/login.html?error=Seu usuário foi criado, agora é só logar';
        } else {
          window.alert('E-mail duplicado, erro ao adicionar no banco de dados');
        }
      });
    } else {
      window.alert('Senha de confirmação tem de ser igual a senha');
    }
  });
