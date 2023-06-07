import { validationSchema } from './validationSchema';
import { BoxButton, Form } from './Form.styled';
import { useFormik } from 'formik';
import { CastomTextField } from './Input.styled';
import { Btn } from './Button.styled';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function FormDelivery({dish}) {
  const [userInfo, setUserInfo] = useState(null);
  const shopping = useSelector((state) => state.shoppingCart.items);

  useEffect(()=>{
    (async function(){
      await fetch(`/api/add_worker`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({...userInfo, order: shopping})
      })
    })()
  },[userInfo, shopping])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setUserInfo(values);
      toast.success('Order successfully created!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <CastomTextField
        id="name"
        name="name"
        type='text'
        label='Name *'
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <CastomTextField
        id="email"
        name="email"
        type='email'
        label='Email'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <CastomTextField
        id="phone"
        name="phone"
        type='phone'
        label='Phone *'
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <CastomTextField
        id="address"
        name="address"
        type='address'
        label='Address *'
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
      />
      <BoxButton>
        <Btn variant='contained' type="submit" >
          "Submit"
        </Btn>
      </BoxButton>
    </Form>
)
}
