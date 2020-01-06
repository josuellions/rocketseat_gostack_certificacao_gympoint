import Mail from '../../lib/Mail';

class HelpanswerMail {
  get key() {
    return 'HelpanswerMail';
  }

  async handle({ data }) {
    const { name, email, formatedDateCreated, question, answer } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Resposta solicitação auxílio',
      template: 'helpanswer',
      context: {
        student: name,
        date: formatedDateCreated,
        solicitation: question,
        response: answer,
      },
    });
  }
}

export default new HelpanswerMail();
