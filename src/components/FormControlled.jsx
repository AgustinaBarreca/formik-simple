import { useInput } from '../hooks/useInput';

export const FormControlled = () => {
  const nameProps = useInput('');
  const phoneProps = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameProps.value;
    const phone = phoneProps.value;

    console.log(`Name: ${name}, Phone: ${phone}`);
  };

  return (
    <form style={{ display: 'grid' }} onSubmit={(e) => handleSubmit(e)}>
      <label> Name: </label>
      <input name="name" type="text" {...nameProps} />
      <p> {nameProps.value} </p>

      <label> Phone: </label>
      <input name="phone" type="number" {...phoneProps} />
      <p> {phoneProps.value} </p>

      <button> Send </button>
    </form>
  );
};
