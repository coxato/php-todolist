export default function isValidDataForm(form) {
    const { description, title } = form;
    return description.value.length > 0 && title.value.length > 0;
  }
  