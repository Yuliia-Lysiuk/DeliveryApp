import { validationSchema } from './validationSchema';
import { BoxButton, Form } from './Form.styled';
import { useFormik } from 'formik';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux/shoppingCartSlice';
import Input from 'components/Input/Input';

export default function FormDelivery({ address }) {
  const shopping = useSelector(state => state.shoppingCart.items);
  const dispatch = useDispatch();

  async function createOrder(userInfo, resetForm) {
    try {
      if (!address) {
        toast.error('Please, enter your address', {
          position: 'top-center',
          autoClose: 3000,
          theme: 'colored',
        });
        return;
      }
      const response = await fetch(`http://localhost:4000/api/users`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userInfo, address, order: shopping }),
      });
      let { message } = await response.json();

      if (response.status === 201) {
        resetForm();
        toast.success('Order successfully created!', {
          position: 'top-center',
          autoClose: 3000,
          theme: 'colored',
        });
        dispatch(reset());
      } else {
        toast.error(message, {
          position: 'top-center',
          autoClose: 3000,
          theme: 'colored',
        });
      }
    } catch (error) {
      toast.error(error, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      createOrder(values, resetForm);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id="name"
        name="name"
        type="text"
        label="Name *"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="Email *"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <Input
        id="phone"
        name="phone"
        type="phone"
        label="Phone *"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <BoxButton>
        <Button type="submit" text="Submit" />
      </BoxButton>
    </Form>
  );
}
