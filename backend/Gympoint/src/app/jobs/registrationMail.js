import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const {
      students,
      name,
      title,
      formatedDateStart,
      formatedDateEnd,
      price,
    } = data;

    await Mail.sendMail({
      to: `${students.name} <${students.email}>`,
      subject: 'Matrícula realizada',
      template: 'registration',
      context: {
        student: name,
        plan: title,
        dateStart: formatedDateStart,
        dateEnd: formatedDateEnd,
        totalPrice: price,
      },
    });
  }
}

export default new RegistrationMail();
