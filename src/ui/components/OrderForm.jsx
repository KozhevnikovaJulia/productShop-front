import React from 'react';
import '../App.css';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { Input, FormControl, FormGroup, Button, Grid, Paper } from '@material-ui/core';
import { setCurrentCustomerInfo } from '../../bll/reducer';

export const OrderForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      address: '',
      phone: '',
    },
    validate: values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.surname) {
        errors.surname = 'Required';
      }
      if (!values.address) {
        errors.address = 'Required';
      }
      return errors;
    },
    onSubmit: values => {
      setCurrentCustomerInfo(values);
    },
  });
  return (
    <div>
      <Grid item>
        <Paper elevation={3} style={{ width: '60%', padding: '15px', margin: '10px' }}>
          <h1>Step 1</h1>
          <form onSubmit={formik.handleSubmit} className='orderForm'>
            <FormGroup>
              <div>
                <Input name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} type='text' value={formik.values.name} placeholder={'Name'} />
              </div>
              {formik.touched.name && formik.errors.name ? <div style={{ color: 'red' }}> {formik.errors.name} </div> : null}
              <div>
                <Input name='surname' onChange={formik.handleChange} onBlur={formik.handleBlur} type='text' value={formik.values.surname} placeholder={'Surname'} />
              </div>
              {formik.touched.surname && formik.errors.surname ? <div style={{ color: 'red' }}> {formik.errors.surname} </div> : null}
              <div>
                <Input name='address' onChange={formik.handleChange} onBlur={formik.handleBlur} type='text' value={formik.values.address} placeholder={'Address'} />
              </div>
              {formik.touched.address && formik.errors.address ? <div style={{ color: 'red' }}> {formik.errors.address} </div> : null}
              <div>
                <Input name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} type='text' value={formik.values.phone} placeholder={'Phone'} />
              </div>
              <div>
                <Button color='inherit' type={'submit'} variant={'contained'}>
                  Go to the second step
                </Button>
              </div>
            </FormGroup>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};
