import { validationSchema } from './validationSchema';
import { BoxButton, Form } from './Form.styled';
import { useFormik } from 'formik';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import Input from 'components/Input/Input';
import { useState } from 'react';
import DishesList from 'components/DishesList/DishesList';

export default function FormHistory() {
  const [orders, setOrders] = useState(null);
  async function searchOrders(userInfo) {
    try {
      const responce = await fetch(`http://localhost:4000/api/users/orders`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userInfo }),
      });
      const { data } = await responce.json();
      const result = [];
      console.log(data.result, 'result');
      data.result.forEach(({ order }) => result.push(...order));
      setOrders(result);
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
      email: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      searchOrders(values);
      resetForm();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
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
      <DishesList shopping={orders} />
    </>
  );
}
